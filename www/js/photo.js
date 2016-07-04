// This is a JavaScript file
function alertDismissed() {
            
}
        
function snapPicture() {
//    navigator.camera.getPicture(onSuccess, onFail, {quality:80, destinationType:Camera.DestinationType.DATA_URL});
    navigator.camera.getPicture(onSuccess, onFail, {quality:80, destinationType:Camera.DestinationType.FILE_URI, correctOrientation: true}) //allowEdit:true,targetWidth:600,
    
    
    function onSuccess (imageData) {
        var image = document.getElementById('picture');
   //     image.src = "data:image/jpeg;base64," + imageData;
   //clip: rect(0px, 260px, 140px, 0px);
        
    //    image.style.css({"height":"380px", "width":"auto"})
    //    image.height = "380px;";
        
        image.src = imageData;
        
        image.classList.add("putImg");

    }
    
    function onFail(message) {
        navigator.notification.alert("촬영중 오류가 발생했습니다",alertDismissed,"NNANYO.COM"," 확 인 ");
    }
}


function getPhotoOnSuccess(imageURI) {
    var largeImage = document.getElementById('picture');
    largeImage.src = imageURI;
}
function getPhoto() {
   navigator.camera.getPicture(getPhotoOnSuccess, onFail, {quality:80, destinationType:Camera.DestinationType.FILE_URI, sourceType:navigator.camera.PictureSourceType.SAVEDPHOTOALBUM, correctOrientation: true});
}

function onFail (message) {
    navigator.notification.alert("앨범을 가져오는 중 오류가 발생했습니다",alertDismissed,"NNANYO.COM"," 확 인 ");
}



$(function() {
    
    // Listen for orientation changes
   
    
    $("#sec1 #content .photoBtns").on("click","div",function() {
        if ($(this).attr("id")=="shotImg") {
            snapPicture();
        } else if ($(this).attr("id")=="getImg") {
            getPhoto();
        }
    })    
    
    
     
function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    
    localStorage.setItem('img',r.response.toString());
    
    console.log(localStorage.getItem('img'));
    
    $("#sec1 #msg #progress").html("send Byte:"+r.bytesSent);
    location.href="preview.html";
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
    navigator.notification.alert("앨범을 업로드 하는 중 오류가 발생했습니다",alertDismissed,"NNANYO.COM"," 확 인 ");
    location.href="index.html"
  //  $("#sec1").find("#msg").css("display","none")
//                    .end()
 //                   .find("#content").css("display","block");
}


    $("#submitBtn").on("click",function() {

                    //selected photo URI is in the src attribute (we set this on getPhoto)
                    var imageURI = document.getElementById('picture').getAttribute("src");
                    console.log(imageURI);
                    
                    localStorage.setItem("img_local",imageURI);
        // Specify transfer options
                    var options = new FileUploadOptions();
                    options.fileKey="file";
                    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                    options.mimeType="image/jpeg";
                    
                    var params = new Object();
                    params.value1 = localStorage.getItem("qrCode").toString();
                //    params.value2 = "param";
         
                    options.params = params;
            
                    options.chunkedMode = false;

                    // Transfer picture to server
                    
                    $("#sec1").css({"background-color":"#000","background-image":"none"})
                    .find("#msg").css("display","block")
                    .end()
                    .find("#content").css("display","none");
                    
                    var ft = new FileTransfer();
                    ft.upload(imageURI, encodeURI("http://nnanyo.slit.co.kr/slit_lib/f_upload.php"), win, fail, options);
                    
//                    ft.upload(imageURI, encodeURI("http://nnanyo.slit.co.kr/slit_lib/f_upload.php"), function(r) {
                      //  document.getElementById('picture_msg').innerHTML = "Upload successful: "+r.bytesSent+" bytes uploaded.";
                    //    img.src = uri;
                     //   img.width = 100;
                      //  img.height = 100;
                        //navigator.notification.alert("사진을 업로드 했습니다",alertDismissed,"Nnanyo","Done");
                         
  //                  },
//                    function(error) {
 //                       navigator.notification.alert("앨범을 업로드 하는 중 오류가 발생했습니다",alertDismissed,"Nnanyo","Done");
//                        document.getElementById('picture_msg').innerHTML = "Upload failed: Code = "+error.code;
  //                  }, options);
                    
       
       
    })
    function confirmCallBack(button) {
        if (button==1) {
             localStorage.removeItem("img_local");
             localStorage.removeItem("img");
             location.href="insert.html"; 
        }
    }
    
    $("#backBtn").on("click",function() {
        navigator.notification.confirm("입력을 취소하시겠습니까?", confirmCallBack, "NNANYO.COM", " 취소 , 취소 안함 ");
//        location.href="index.html";
    }) 
    
   
})
