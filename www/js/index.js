// This is a JavaScript file
        function trimString(val) {
            var rtStr = val.replace(" ","");
            console.log(rtStr);
            return rtStr;
        }
        
        function alertDismissed() {
            
        }
        
        $(function(){
            $("#setupBtn").on("click",function() {
                location.href="setup.html";
            })
            $("#submitBtn").on("click",function() {
               
                if (trimString($("#qrCode").val())!="") {
                    $.post("http://nnanyo.com/slit_lib/codeInput.php",{"tTag":$("#tTag").val(),"qrCode":$("#qrCode").val()},function(data,txtStatus,jqXHR){
                        console.log(data);
                        location.href="guide.html";
                    })
                } else {
                    navigator.notification.alert("인증코드를 입력하세요",alertDismissed,"Nnanyo","Done");
                }
            })    
        })
