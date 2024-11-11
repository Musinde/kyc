@extends('layouts.master')
@section('title')
    KYC
@endsection

@section('meta')
    <meta name="title" content="KYC">
    <meta name="description" content="KYC">
    <meta name="keywords" content="KYC">
@endsection


@section('page-title')
    KYC
@endsection
@section('body')

    <body>
    @endsection
    @section('content')
    <br>
        <div class="row justify-content-between mb-3 flex-sm-column flex-md-row">
            <div class="col-md-5">
                <div class="card p-4" id="upload_drop_zone">
                    <div class="file-drop-area">
                        <span class="drop-icon">
                            <i class="bx bx-cloud-upload"></i>
                        </span><br>
                        <span class="file-message">
                            Upload your ID <br>
                            <a href="#">select a file</a>
                        </span>
                        <input type="file" class="file-input" id="upload_post_image" accept=".jpg, .jpeg, .png">
                    </div>
                    <img src="{{ asset('loading.gif') }}" id="loading" hidden style="margin: auto;" height="50px"
                        width="50px">
                    <div id="preview_upload_post_image"></div>
                </div>
            </div>

            <div class="col-md-5">
                <div class="card p-4">
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-text">Names</div>
                            <input type="text" class="form-control" required name="names" id="names"
                                placeholder="Names">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-text">ID No</div>
                            <input type="text" class="form-control" required name="id_no" id="id_no"
                                placeholder="ID No">
                        </div>
                    </div>


                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-text">GENDER</div>
                            <input type="text" class="form-control" required name="gender" id="gender"
                                placeholder="Gender">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-text">DOB</div>
                            <input type="text" class="form-control" required name="dob" id="dob"
                                placeholder="DOB">
                        </div>
                    </div>

                    <div class="row">
                        <a href="#" id="facial_compare" class="btn btn-outline-primary btn-sm w-50 align-center">NEXT</a>
                    </div>


                </div>
            </div>
        </div>
    @endsection
    @section('scripts')
        <script src="{{ URL::asset('build/js/app.js') }}"></script>
        <script>
            $(document).on('change', '#upload_post_image', function(e) {

                $(".file-drop-area").prop('hidden', true);
                $("#loading").prop('hidden', false);


                var file = this.files[0]; // Get the selected file

                if (file) {
                    // Prepare form data
                    var formData = new FormData();
                    formData.append('file', file);

                    // Send the file via AJAX
                    $.ajax({
                        url: "{{ url('upload-post') }}", // Your upload URL
                        method: 'POST',
                        data: formData,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr(
                                'content') // Add CSRF token
                        },
                        contentType: false,
                        processData: false,
                        success: function(response) {
                            toastr.success(response.message);
                            $('#preview_upload_post_image').append(response.preview);

                            $("#logo_path").val(response.path);
                            $("#facial_compare").prop('href', '{{url("/")}}/detect-face?image_key=  '+response.path);

                            $('#upload_post_image').val('');
                            $("#loading").prop('hidden', true);
                            
                            $("#names").val(response.userdata.names);
                            $("#id_no").val(response.userdata.id_no);
                            $("#gender").val(response.userdata.gender);
                            $("#dob").val(response.userdata.dob);


                        },
                        error: function(xhr, status, error) {
                            toastr.error('Could not upload the file!')
                        }
                    });
                }
            });

            $(document).on('click', '.remove-image', function() {
                var $id = $(this).attr('data-string');
                var $toremove = $(this).closest('.image-preview');
                deleteDZFile($id, $toremove);

            });

            function deleteDZFile($id, $toremove, ) {
                var token = $('meta[name="csrf-token"]').attr('content');

                $.ajax({
                    url: '{{ url('delete-post-media') }}',
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': token
                    },
                    data: {
                        id: $id
                    },
                    success: function(response) {
                        $toremove.remove();
                        $(".file-drop-area").prop('hidden', false);
                        localStorage.removeItem('logo_path');
                        $("#logo_path").val("");
                    },
                    error: function(xhr, status, error) {

                    }
                });
            }
        </script>
    @endsection
