<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liveness Detection</title>
</head>
<body>
    <h1>Liveness Detection</h1>
    <video id="video" autoplay muted></video>
    <button id="startLiveness">Start Liveness Detection</button>
    <div id="status"></div>

    <script>
        const video = document.getElementById('video');
        const startButton = document.getElementById('startLiveness');
        const statusDiv = document.getElementById('status');

        // Step 1: Start Video Stream
        async function startVideoStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                return stream;
            } catch (err) {
                console.error("Camera access denied: " + err);
            }
        }
        startVideoStream();

        startButton.addEventListener('click', async () => {
            statusDiv.innerText = "Starting liveness detection...";
            const stream = video.srcObject;

            // Step 2: Initiate Liveness Detection Session on the Backend
            const response = await fetch('/initiate-liveness', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
            });
            const data = await response.json();

            if (data.sessionId && data.videoUrl) {
                // Pass the session data to the next steps
                await sendVideoToRekognition(stream, data.videoUrl, data.sessionId);
            } else {
                statusDiv.innerText = "Error initiating liveness detection session.";
            }
        });

        // Step 3: Capture and Send Video to AWS Rekognition
        async function sendVideoToRekognition(stream, videoUrl, sessionId) {
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
            const chunks = [];

            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            mediaRecorder.onstop = async () => {
                const videoBlob = new Blob(chunks, { type: 'video/webm' });
                const formData = new FormData();
                formData.append('file', videoBlob);

                try {
                    await fetch(videoUrl, {
                        method: 'POST',
                        body: formData
                    });
                    statusDiv.innerText = "Video sent. Checking for liveness...";
                    await checkLivenessStatus(sessionId);
                } catch (error) {
                    statusDiv.innerText = "Error sending video to Rekognition: " + error;
                }
            };

            // Start recording for a short duration, then stop
            mediaRecorder.start();
            setTimeout(() => mediaRecorder.stop(), 3000); // Record 3 seconds
        }

        // Step 4: Poll the Server for Liveness Detection Results
        async function checkLivenessStatus(sessionId) {
            const interval = setInterval(async () => {
                const response = await fetch(`/check-liveness/${sessionId}`);
                const data = await response.json();

                if (data.status === 'IN_PROGRESS') {
                    statusDiv.innerText = "Liveness check in progress...";
                } else {
                    clearInterval(interval);
                    if (data.success) {
                        statusDiv.innerText = `Liveness confirmed! Confidence: ${data.confidence}`;
                    } else {
                        statusDiv.innerText = "Liveness detection failed: " + data.status;
                    }
                }
            }, 3000); // Poll every 3 seconds
        }
    </script>
</body>
</html>
