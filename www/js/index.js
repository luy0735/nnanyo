// This is a JavaScript file
        function trimString(val) {
            var rtStr = val.replace(" ","");
            console.log(rtStr);
            return rtStr;
        }
        
        function alertDismissed() {
            
        }
        
        function errDescShow(errCode) {
            switch(errCode) {
                case 1:
                    return "등록되지 않은 인증코드입니다.";
                    break;
                case 2: 
                    return "기간 오류";
                    break;
                case 3: 
                    return "qr코드 오류";
                    break;
                case 4: 
                    return "사용중인 코드입니다.";
                    break;
                case 5: 
                    return "사용한 코드입니다.";
                    break;
                default:
                    return "오류입니다."
            }
        }
        
        $(function(){
            
            
            
            $("#intro").fadeOut(1500,function() {
                $("#sec1 #content").show();
            });
            
            $("#setupBtn").on("click",function() {
                location.href="setup.html";
            })
            
           $("#qrCode").on("keypress",function(event) {
                if (event.which==13) {
                    event.preventDefault();
                    $("#submitBtn").trigger("click");
                }
            })            

            $("#submitBtn")
            .on("click",function(event) {
               
               event.preventDefault();
               
                if (trimString($("#qrCode").val())!="") {
                    $.post("http://nnanyo.com/slit_lib/codeInput.php",{"tTag":$("#tTag").val(),"qrCode":$("#qrCode").val()},function(data,txtStatus,jqXHR){
                        console.log(data);
                        if (data.err) {
                            navigator.notification.alert(errDescShow(data.err),alertDismissed,"NNANYO.COM"," 확 인 ");
                            return;
                        }
                           
                        if(localStorage != undefined)
                        {
                       //   console.log("Local Storage is supported");
                        
                          //add
                          localStorage.setItem("qrCode", $("#qrCode").val());
                           location.href="guide.html";
                        
                          //update or overwrite
                         // localStorage.setItem("Website", "SitePoint.com");
                        
                          //remove
                         // localStorage.removeItem("Website");
                        
                          //remove all
                         // localStorage.clear();
                           
                        }
                        else
                        {
                          console.log("No support");
                        }   
                        
                    },"json")
                } else {
                    navigator.notification.alert("인증코드를 입력하세요",alertDismissed,"NNANYO.COM"," 확 인 ");
                }
            })    
        })
