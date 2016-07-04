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

    $("#submitBtn").on("click",function() {
        
        
        
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
        
    })    
    
    $("#backBtn").on("click",function() {
        location.href="photo.html";
    })
    
    $("#setColor > ul li").on("click",function() {
        
        var mImg = new Array("green","deep_blue","sky_blue","pink","black");
    
        var imgSrcOrder = $("#setColor > ul li").index($(this));
      
        $("#sec1 #content > div:nth-of-type(2)").css("background-color",$(this).attr("value"));
        $("#sec1 #content > div:nth-of-type(2) > div:first-child ").css("background-color",$(this).attr("value"));
        $("#sec1 #content > div:nth-of-type(2) > div:nth-child(2) > div:first-child").css("background-color",$(this).attr("value"));
        $("#sec1 #content > div:nth-of-type(2) > div:nth-child(2) > div:last-child").css("background-color",$(this).attr("value"));
        $("#sec1 #content > div:nth-of-type(2) > div:last-child").css("background-color",$(this).attr("value"));
        $("#sec1 #content > div:nth-of-type(3)").css("background-color",$(this).attr("value"));
        $("#sec1 #content > div:nth-of-type(4)").css("background-color",$(this).attr("value"));
        
        localStorage.setItem("mColor",$(this).attr("value"));
        localStorage.setItem("mMask",mImg[imgSrcOrder]);
      
        $("#sec1 #content div.mask img").attr("src","img/"+mImg[imgSrcOrder]+".png");
    })
})
