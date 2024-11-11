@yield('css')
<!-- Bootstrap Css -->
<link href="{{ URL::asset('build/css/bootstrap.min.css') }}" id="bootstrap-style" rel="stylesheet" type="text/css" />
<!-- Icons Css -->
<link href="{{ URL::asset('build/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
<!-- App Css-->
<link href="{{ URL::asset('build/css/app.min.css') }}" id="app-style" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<style>
    .file-drop-area {
        border: 2px dashed #4e4e4e;
        padding: 40px;
        text-align: center;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 200px;
        width: 400px;
        border-radius: 10px;
        position: relative;
        font-family: Arial, sans-serif;
        margin: auto;
    }

    .drop-icon {
        font-size: 30px;
        color: #808080;
    }

    .file-message {
        font-size: 14px;
        color: #666;
        margin-top: 10px;
    }

    .file-message a {
        color: #007bff;
        text-decoration: none;
    }

    .file-message a:hover {
        text-decoration: underline;
    }

    .file-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    .file-input:hover+.file-message {
        text-decoration: underline;
    }
    
    .remove-image {
    	 position: absolute;
    	 top: 5px;
    	 right: 5px;
    	 background-color: #fff;
    	 border: none;
    	 border-radius: 50%;
    	 width: 20px;
    	 height: 20px;
    	 font-size: 14px;
    	 line-height: 18px;
    	 color: #333;
    	 cursor: pointer;
    }
     .remove-image:hover {
    	 background-color: #f00;
    	 color: #fff;
    }

    .image-preview {
        position: relative;
        display: inline-block;
        margin: 5px;
    }

    
    .image-preview-img {
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        width: 400px;
        height: 200px;
        object-fit: contain;
        margin: auto;
    }
    
    
    #preview_generated_image {
        height: 100%; 
        width: 100%;
        position: relative; 
    }
    
    #preview_generated_image img {
        height: 100%;
        width: 100%;
        object-fit: contain; 
    }
    
    .blue-outline {
        border: 2px solid #1F58C7;
    }
    
    .icon-with-text {
        text-align: center;
    }
    
    .icon img {
        width: 40px; /* Adjust the size as needed */
        height: auto;
    }
    
    .text {
        font-size: 14px; /* Adjust text size */
        margin-top: 5px;
        color: #000; /* Set text color */
    }

    .select2{
        width: 100% !important;
    }

    .align-center{
        margin: auto;
        
    }


</style>
