<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Aws\Textract\TextractClient;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Aws\Rekognition\RekognitionClient;
use Aws\S3\S3Client;

class IndexController extends Controller
{

    protected $rekognition;
    protected $bucket;


    public function __construct()
    {
        $this->rekognition = new RekognitionClient([
            'region' => env('AWS_DEFAULT_REGION'),
            'version' => 'latest',
            'credentials' => [
                'key'    => env('AWS_ACCESS_KEY_ID'),
                'secret' => env('AWS_SECRET_ACCESS_KEY'),
            ]
        ]);

        $this->bucket = env('AWS_BUCKET');
    }

    public function index()
    {
        return view('index');
    }

    public function facialCompare()
    {
        return view('facial-compare');
    }

    public function takeSelfie()
    {
        return view('selfie');
    }

    public function verifyLiveness(Request $request)
    {
        // Extract the base64 encoded image from the request
        $imageData = $request->input('image');
        $imageData = str_replace('data:image/png;base64,', '', $imageData);
        $imageData = base64_decode($imageData);

        try {
            // Initialize the Rekognition client
            $rekognition = new RekognitionClient([
                'region' => env('AWS_DEFAULT_REGION'),
                'version' => 'latest',
                'credentials' => [
                    'key' => env('AWS_ACCESS_KEY_ID'),
                    'secret' => env('AWS_SECRET_ACCESS_KEY'),
                ]
            ]);

            // Call Rekognition's DetectLiveness API
            $result = $rekognition->detectLiveness([
                'Video' => [
                    'Bytes' => $imageData,
                ],
            ]);

            // Check liveness confidence score
            $confidence = $result['Confidence'] ?? 0;
            if ($confidence > 90) { // Example threshold for liveness detection
                return response()->json(['success' => true]);
            } else {
                return response()->json(['success' => false, 'message' => 'Liveness detection confidence too low.']);
            }
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Error in liveness detection: ' . $e->getMessage()]);
        }
    }


    public function uploadFile(Request $request)
    {

        try {
            $file = $request->file('file');
            $randomName = Str::random(40);
            $extension = $file->getClientOriginalExtension();

            $filePath = $randomName . '.' . $extension;

            Storage::disk('s3')->put($filePath, file_get_contents($file));
            Storage::disk('s3')->setVisibility($filePath, 'public');

            $path = Storage::disk('s3')->url($filePath);

            $textractClient = new TextractClient([
                'version' => 'latest',
                'region' => env('AWS_DEFAULT_REGION'),
                'credentials' => [
                    'key'    => env('AWS_ACCESS_KEY_ID'),
                    'secret' => env('AWS_SECRET_ACCESS_KEY'),
                ],
            ]);

            $result = $textractClient->analyzeDocument([
                'Document' => [
                    'S3Object' => [
                        'Bucket' => env('AWS_BUCKET'),
                        'Name' => $filePath,
                    ],
                ],
                'FeatureTypes' => ['TABLES', 'FORMS'],
            ]);

            $userdata = array(
                'names' => '',
                'id_no' => '',
                'gender' => '',
                'dob' => ''
            );

            $access_next = false;
            $access_next_index = '';
            $access_next_two = false;

            foreach ($result['Blocks'] as $block) {
                if ($block['BlockType'] === 'LINE') {

                    if ($access_next == true) {
                        $userdata[$access_next_index] = $block['Text'];
                        $access_next = false;
                        $access_next_index = '';
                    }

                    if ($access_next_two == true) {
                        $access_next = true;
                        $access_next_two = false;
                    }

                    if (in_array($block['Text'], ['ID NUMBER', '= NUMBER'])) {
                        $access_next = true;
                        $access_next_index = 'id_no';
                    }

                    if ($block['Text'] == 'FULL NAMES') {
                        $access_next = true;
                        $access_next_index = 'names';
                    }

                    if ($block['Text'] == 'SEX') {
                        $access_next_two = true;
                        $access_next_index = 'gender';
                    }

                    if ($block['Text'] == 'DATE OF BIRTH') {
                        $access_next = true;
                        $access_next_index = 'dob';
                    }
                }
            }

            $class = "image-preview-img";
            $img = (string) view('image-preview', compact('class', 'path', 'filePath'));

            return response()->json(['message' => 'File uploaded successfully', 'path' => $filePath, 'preview' => $img, 'userdata' => $userdata]);
        } catch (\Exception $e) {
            logger($e);
            return response()->json(['message' => 'Failed to upload. Please try again.'], 500);
        }
    }

    public function compareFaces($detectedFace, $selfie)
    {
        try {
            // Prepare the parameters
            $result = $this->rekognition->compareFaces([
                'SourceImage' => [
                    'S3Object' => [
                        'Bucket' => env('AWS_BUCKET'),
                        'Name' => $detectedFace,
                    ],
                ],
                'TargetImage' => [
                    'S3Object' => [
                        'Bucket' => env('AWS_BUCKET'),
                        'Name' => $selfie,
                    ],
                ],
                'SimilarityThreshold' => 80 // Set similarity threshold (0-100)
            ]);

            // Process and return the result
            if (!empty($result['FaceMatches'])) {
                $faceMatch = $result['FaceMatches'][0];
                $similarity = $faceMatch['Similarity'];
                return true;
            } else {
                return false;
            }
        } catch (\Exception $e) {
            logger($e);
            return false;
        }
    }

    public function uploadSelfie(Request $request)
    {

        try {
            $file = $request->file('file');
            $randomName = Str::random(40);
            $extension = $file->getClientOriginalExtension();

            $filePath = "selfie/".$randomName . '.' . $extension;
            $detected_face = request()->detected_face;

            Storage::disk('s3')->put($filePath, file_get_contents($file));
            Storage::disk('s3')->setVisibility($filePath, 'public');

            $path = Storage::disk('s3')->url($filePath);           

            $class = "image-preview-img";
            $img = (string) view('image-preview', compact('class', 'path', 'filePath'));

            $face_matches = $this->compareFaces($detected_face, $filePath);

            return response()->json(['message' => 'File uploaded successfully', 'path' => $filePath, 'preview' => $img, 'match' => $face_matches]);
        } catch (\Exception $e) {
            logger($e);
            return response()->json(['message' => 'Failed to upload. Please try again.'], 500);
        }
    }

    public function detectFace()
    {
        try {
            $imageKey = request()->image_key;
            // Detect faces in the image from S3
            $result = $this->rekognition->detectFaces([
                'Image' => [
                    'S3Object' => [
                        'Bucket' => $this->bucket,
                        'Name'   => $imageKey,
                    ],
                ],
                'Attributes' => ['ALL']
            ]);

            if (empty($result['FaceDetails'])) {
                return redirect()->back()->with(['error' => 'No face detected.']);
            }

            // Get bounding box of the first detected face
            $boundingBox = $result['FaceDetails'][0]['BoundingBox'];

            $image = $this->cropFaceFromS3Image($imageKey, $boundingBox);
            if(!empty($image)){
                return redirect('facial-compare?face='.urlencode($image[1])."&path=".$image[0]);
            }else{
                return redirect()->back()->with(['error' => 'No face detected.']);
            }
        } catch (\Exception $e) {
            logger($e);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    protected function cropFaceFromS3Image($imageKey, $boundingBox)
    {
        // Download the image from S3
        $s3 = Storage::disk('s3');
        $imageContent = $s3->get($imageKey);

        // Load the image in memory for processing
        $img = imagecreatefromstring($imageContent);
        $width = imagesx($img);
        $height = imagesy($img);

        // Calculate the bounding box dimensions
        $x = $boundingBox['Left'] * $width;
        $y = $boundingBox['Top'] * $height;
        $faceWidth = $boundingBox['Width'] * $width;
        $faceHeight = $boundingBox['Height'] * $height;

        // Crop the face from the image
        $faceImage = imagecrop($img, [
            'x' => $x,
            'y' => $y,
            'width' => $faceWidth,
            'height' => $faceHeight
        ]);


        if ($faceImage !== false) {
            // Save the cropped face as a new image
            ob_start();
            imagejpeg($faceImage);
            $croppedContent = ob_get_clean();

            // Optionally, save the cropped image back to S3 or return as response
            $croppedKey = 'extracted/' . basename($imageKey);
            Storage::disk('s3')->put($croppedKey, $croppedContent);
            Storage::disk('s3')->setVisibility($croppedKey, 'public');

            imagedestroy($img);
            imagedestroy($faceImage);

            return [$croppedKey, $s3->url($croppedKey)];
        }

        return null;
    }

    public function deleteFile(Request $request)
    {
        try {
            $id = $request->input('id');
            Storage::delete('public/' . $id);

            return response()->json(['message' => 'File deleted successfully']);
        } catch (\Exception $e) {
            logger($e);
            return response()->json(['message' => 'Failed to delete. Please try again.'], 500);
        }
    }

    public function initiateLiveness(Request $request)
    {
        try {
            // Step 1: Start a Face Liveness Session
            $result = $this->rekognition->createFaceLivenessSession([
                'ClientRequestToken' => uniqid(), // Unique identifier for the request
            ]);

            // Get the session ID to use for checking the result later
            $sessionId = $result['SessionId'];
            $videoUrl = $result['VideoUrl'];

            return response()->json([
                'sessionId' => $sessionId,
                'videoUrl' => $videoUrl,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error initiating liveness detection: ' . $e->getMessage()], 500);
        }
    }

    public function checkLiveness($sessionId)
    {
        try {
            // Step 2: Check the Liveness Detection Results
            $result = $this->rekognition->getFaceLivenessSessionResults([
                'SessionId' => $sessionId,
            ]);

            $confidence = $result['Confidence'] ?? 0;
            $status = $result['Status'];

            return response()->json([
                'success' => $status === 'SUCCEEDED',
                'confidence' => $confidence,
                'status' => $status,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error checking liveness results: ' . $e->getMessage()], 500);
        }
    }
}
