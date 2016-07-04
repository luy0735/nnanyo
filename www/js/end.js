// This is a JavaScript file
$(function() {
    
            
    $("#submitBtn").on("click",function() {
        localStorage.removeItem("qrCode");
        localStorage.removeItem("typeCode");
        localStorage.removeItem("typeSel");
        localStorage.removeItem("iName");
        localStorage.removeItem("iYear");
        localStorage.removeItem("iMonth");
        localStorage.removeItem("iSex");
        localStorage.removeItem("iInfo");
        localStorage.removeItem("iProtector1");
        localStorage.removeItem("tel1");
        localStorage.removeItem("iProtector2");
        localStorage.removeItem("tel2");
        localStorage.removeItem("img");
        localStorage.removeItem("img_local");
        localStorage.removeItem("mColor");
        localStorage.removeItem("mMask");
    })
    
    $("#backBtn").on("click",function() {
                    
                    
                    
        location.href="photo.html"; 
       
    }) 

})
