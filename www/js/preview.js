// This is a JavaScript file
function alertDismissed() {
            
}
$(function(){
    
//    $("#picture").attr("src","http://nnanyo.slit.co.kr/data/file/dataTbl/"+localStorage.getItem('img'));
    $("#iName").html(localStorage.getItem("iName"));
    
    $("#iBirth_n_Sex").html(localStorage.getItem("iYear")+"년 "+localStorage.getItem("iMonth")+"월생 ("+localStorage.getItem("iSex")+")");

    if (localStorage.getItem("iInfo")) {
        $("#iInfo").html(localStorage.getItem("iInfo"));
    } else
        $("#iInfo").css("display","none");

    $("#call1").html(localStorage.getItem("iProtector1")+"에게 전화걸기").attr("href","tel:"+localStorage.getItem("tel1")); 

    console.log(localStorage.getItem("iProtector2"));

    if (localStorage.getItem("iProtector2") && (localStorage.getItem("iProtector2")!="선택")) {
        $("#call2").html(localStorage.getItem("iProtector2")+"에게 전화걸기").attr("href","tel:"+localStorage.getItem("tel2"));
        
    } else {
        $(".call2").css("display","none");
    }

    function confirmCallBack(button) {
        if (button==1) {
             var $opt = {"qrCode":localStorage.getItem("qrCode"),"typeCode":localStorage.getItem("typeCode"),
                    "typeSel":localStorage.getItem("typeSel"),"iName":localStorage.getItem("iName"),
                    "iYear":localStorage.getItem("iYear"), "iMonth":localStorage.getItem("iMonth"),"iSex":localStorage.getItem("iSex"),
                    "iInfo":localStorage.getItem("iInfo"),"iProtector1":localStorage.getItem("iProtector1"),
                    "tel1":localStorage.getItem("tel1"),"iProtector2":localStorage.getItem("iProtector2"),"tel2":localStorage.getItem("tel2"),
                    "img":localStorage.getItem("img"),"img_local":localStorage.getItem("img_local"),
                    "mColor":localStorage.getItem("mColor"),
                    "mMask":localStorage.getItem("mMask"),
                    "uuid":device.uuid};
            $.post("http://nnanyo.slit.co.kr/slit_lib/DBInput.php",$opt,function(data,txtStatus,jqXHR) {
                console.log(data);
                location.href="end.html";
            })
        }
    }
    
    $("#submitBtn").on("click",function() {
        
        navigator.notification.confirm("등록시 수정이 불가합니다. 등록하시겠습니까? ", confirmCallBack, "NNANYO.COM", " 예  , 아니요 ");
        
    })    
    
    $("#backBtn").on("click",function() {
        
        location.href="photo.html";
    })
    
    $("#setColor > ul li").on("click",function() {
        
        var mImg = new Array("green","deep_blue","sky_blue","pink","black");
    
        var imgSrcOrder = $("#setColor > ul li").index($(this));
      
        $("#sec1 #content > div:nth-of-type(2)").css("background-color",$(this).attr("value"));
       
        $("#sec1 #content > div:nth-of-type(2) #mask > div:first-child,#sec1 #content > div:nth-of-type(2) #mask > div:last-child").css("background-color",$(this).attr("value"));
        
        $("#sec1 #content > div:nth-of-type(2) > div:first-child > div:last-child").css("background-color",$(this).attr("value"));
       
        
        localStorage.setItem("mColor",$(this).attr("value"));
        localStorage.setItem("mMask",mImg[imgSrcOrder]);
      
        $("#sec1 #content #mask > div:nth-child(2) img").attr("src","img/"+mImg[imgSrcOrder]+".png");
    })
})
