// This is a JavaScript file

$(function() {
    
//    console.log(localStorage.getItem("qrCode"));
    var cType = localStorage.getItem("qrCode").toString().substring(0, 1); // C:미아방지용 D:치매환자용 B:반려견용 
    
    $("#typeCode").val(cType);
    
    switch(cType) {
        case "C":
            $("#typeSel").val("미아방지용");
            $("#iProtector1").html("<option value=''>선택</option><option value='엄마'>엄마</option><option value='아빠'>아빠</option><option value='삼촌'>삼촌</option><option value='이모'>이모</option><option value='고모'>고모</option>");
            
            break;
        case "D": 
             $("#typeSel").val("치매환자용");
             $("#iProtector1").html("<option value=''>선택</option><option value='아들'>아들</option><option value='딸'>딸</option><option value='형제'>형제</option><option value='가족'>가족</option><option value='요양사'>요양사</option><option value='주치의'>주치의</option>");
             
            break;
        case "B":
             $("#typeSel").val("반려견용");
             $("#iProtector1").html("<option value=''>선택</option><option value='주인'>주인</option><option value='견주'>견주</option><option value='아빠'>아빠</option><option value='엄마'>엄마</option>");
             
            break;
    }
    
    function alertDismissed() {
            
    }
    
    $("#iProtector1").on("change",function(){
        switch(cType) {
            case "C": 
                $("#iProtector2").html("<option>선택</option><option value='엄마'>엄마</option><option value='아빠'>아빠</option><option value='삼촌'>삼촌</option><option value='이모'>이모</option><option value='고모'>고모</option>");
                
                break;
            case "D": 
                $("#iProtector2").html("<option>선택</option><option value='아들'>아들</option><option value='딸'>딸</option><option value='형제'>형제</option><option value='가족'>가족</option><option value='요양사'>요양사</option><option value='주치의'>주치의</option>");
                
                break;
            case "B": 
                $("#iProtector1").html("<option>선택</option><option value='주인'>주인</option><option value='견주'>견주</option><option value='아빠'>아빠</option><option value='엄마'>엄마</option>");
             
                break;
        
        }
        
        var tIdx = $("#iProtector1 option").index($("#iProtector1 option:selected"));
        $("#iProtector2 option:eq("+tIdx+")").remove();
                
    })
    
    function confirmCallBack(button) {
        if (button==1) {
            localStorage.clear();
            location.href="index.html";
        }
    }
    
    $("#backBtn").on("click",function() {
        navigator.notification.confirm("입력을 취소하시겠습니까?", confirmCallBack, "NNANYO.COM", " 취소 , 취소 안함 ");
//        location.href="index.html";
    })    
    $("#submitBtn").on("click",function() {
        
        var tChk = true;
        
        $(".required").each(function(idx,ele){
            var tThis = $(this);
            if ($(this).val()=="") {
                var tLabel = tThis.prev().html();
                navigator.notification.alert(tLabel + ":필수 값입니다.",alertDismissed,"NNANYO.COM"," 확 인 ");
                $(this).focus();
               tChk = false;
               return false;
            }
        })
        
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth()+1;
        m = m.toString();
        
        if (m.length<2) m = '0'+m;
        
        
        var n = y+m;
        console.log(n);
        console.log($("#iYear").val()+$("#iMonth").val());
    
        if (($("#iYear").val()+$("#iMonth").val()) > n) {
            navigator.notification.alert("년도가 올해보다 클 수 없습니다.",alertDismissed,"NNANYO.COM"," 확 인 ");
            return;
        }
        
        var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
        if(($(".tel").val()!="") && (!regExp.test($(".tel").val()))) {
            navigator.notification.alert("전화번호 형식이 잘못되었어요",alertDismissed,"NNANYO.COM"," 확 인 ");
            $(this).focus();
            return;
        }
        
        if (tChk) {
            localStorage.setItem("typeCode",$("#typeCode").val());
            localStorage.setItem("typeSel",$("#typeSel").val());
            localStorage.setItem("iName",$("#iName").val());
            localStorage.setItem("iYear",$("#iYear").val());
            localStorage.setItem("iMonth",$("#iMonth").val());
            localStorage.setItem("iSex",$("#iSex").val());
            localStorage.setItem("iInfo",$("#iInfo").val());
            localStorage.setItem("iProtector1",$("#iProtector1").val());
            localStorage.setItem("tel1",$("#tel1").val());
            localStorage.setItem("iProtector2",$("#iProtector2").val());
            localStorage.setItem("tel2",$("#tel2").val());
            
            console.log(localStorage.getItem("iProtector2"));
            
            location.href="photo.html";
        }
    })
})
