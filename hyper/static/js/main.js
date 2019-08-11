$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});
$(document).ready(function() {
    $('#input1').blur(function() {
        var inputnum1 = $('#input1').val();
        if (inputnum1.length < 3 || inputnum1.match(/^\d+$/)) {
            $('#input1').addClass("failclass")
            $('#input1').removeClass("successclass")
             $('.here3').removeClass("rotan")
             $('.here4').addClass("rotan")
        } else {
            $('#input1').removeClass("failclass") &&
                $('#input1').addClass("successclass")&&
                $('.here3').addClass("rotan")
                 $('.here4').removeClass("rotan")
        }
    })
    $('#input2').blur(function() {
        var inputnum2 = $('#input2').val();

        if (inputnum2.length < 6 || inputnum2.search('@') <= -1 || inputnum2.indexOf('.') == -1) {
            $('#input2').addClass("failclass")
            $('#input2').removeClass("successclass")
             $('.here1').removeClass("rotan")
             $('.here2').addClass("rotan")
        } else {
            $('#input2').removeClass("failclass") &&
                $('#input2').addClass("successclass")&&
                 $('.here1').addClass("rotan")
                 $('.here2').removeClass("rotan")
        }

    })
    $('#input3').blur(function() {
        var inputnum3 = $('#input3').val();

        if (inputnum3.length < 6) {
            $('#input3').addClass("failclass")
            $('#input3').removeClass("successclass")
             $('.here5').removeClass("rotan")
             $('.here6').addClass("rotan")
        } else {
            $('#input3').removeClass("failclass") &&
                $('#input3').addClass("successclass")&&
                 $('.here5').addClass("rotan")
                 $('.here6').removeClass("rotan")
        }

    })
    $('#input4').blur(function() {
        var inputnum4 = $('#input4').val();

        if ($('#input3').val() != $('#input4').val() || inputnum4.length < 6) {
            $('#input4').addClass("failclass")
            $('#input4').removeClass("successclass")
            $('.here7').removeClass("rotan")
             $('.here8').addClass("rotan")
            
        } else {
            $('#input4').removeClass("failclass") &&
                $('#input4').addClass("successclass")&&
                $('.here7').addClass("rotan")
                 $('.here8').removeClass("rotan")

        }

    })




    $('#heandClick').click(function() {
        var inputfor1 = $('#input1').val();
        var inputfor2 = $('#input2').val();
        var inputfor3 = $('#input3').val();
        var inputfor4 = $('#input4').val();
        if ($('#input1').hasClass("failclass") || $('#input2').hasClass("failclass") || $('#input3').hasClass("failclass") || $('#input4').hasClass("failclass") || inputfor1.length <3 || inputfor2.length<6 || inputfor3.length<6 || inputfor4.length<6) {
            $('.form1')[0].reset()
            $('#input4').removeClass("successclass")
            $('#input3').removeClass("successclass")
            $('#input2').removeClass("successclass")
            $('#input1').removeClass("successclass")
            $('#input1').addClass("failclass")
            $('#input2').addClass("failclass")
            $('#input3').addClass("failclass")
            $('#input4').addClass("failclass")
            $('.here3').removeClass("rotan")
            $('.here1').removeClass("rotan")
            $('.here5').removeClass("rotan")
            $('.here7').removeClass("rotan")
            $('.here4').addClass("rotan")
            $('.here2').addClass("rotan")
            $('.here8').addClass("rotan")
            $('.here6').addClass("rotan")


        } else
             $('.form1').css('z-index','none') && $('#vhodilka2').css('display','none')&&
   $('.form2').css('z-index','1') && $('#traif').css('display','block') &&
            Registrate()
    })


})

function Registrate() {
    $.ajax({
        method: "POST",
        url: '/registr',
        cache: false,
        data: $('.form1').serialize(),
        statusCode: {
            418: function() {
                console.log("fail")
            }
        },
        success: function(datas) {
            console.log("Normalin")
        }
    })


}
$('.modalbuttonnum0n1').click(function(){
      $.ajax({
        method: "POST",
        url: '/sendemail',
        cache: false,
        data: $('.ffirsamqwe1123').serialize(),
        statusCode: {
            418: function() {
                console.log("fail")
            }
        },
        success: function(datas) {
            console.log("Normalin")
        }
    })
    
})
$(document).ready(function(){
    $('.linknum0ne').on("click","a", function(event){
            event.preventDefault();
            var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);

    });
});
$(document).ready(function(){
    $('.hello').on("click","a", function(event){
            event.preventDefault();
            var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);

    });
});

$(document).ready(function(){
    $('.menunavigation').on("click","a", function(event){
            event.preventDefault();
            var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);

    });
});
$('#heandClick123').click(function(){
     Registrate1()
})
function Registrate1(){
        $.ajax({
        method: "POST",
        url: '/login',
        cache: false,
        data: $('.form2').serialize(),
        statusCode: {
            418: function() {
                console.log("fail")
            }
        },
        success: function(datas) {
            if (datas.message=="ok"){
                location.reload()
            }
        }
    })
}

function getUser(){
     $.ajax({
        method: "POST",
        url: '/user',
        cache: false,
        statusCode: {
            418: function() {
                console.log("fail")
            }
        },
        success: function(datas) {
            console.log(datas)
            if(datas.message){
            var pereme = document.getElementById('login01');
            pereme.innerHTML="";   
            var button = document.createElement("button");
            var p = document.createElement("p");
            var div = document.createElement("div")
            $(div).addClass("divloginout");
            $(button).addClass("buttonlogout");
            $(p).addClass("textlogin");
            button.setAttribute("id","buttonoutlog");
            $(button).on("click",function(){
                      $.ajax({
        method: "GET",
        url: '/logout',
        cache: false,
        statusCode: {
            418: function() {
                console.log("fail")
            }
        },
        success: function(datas) {
            if (datas.message=="ok"){
                location.reload()
            }
        }
    })
            });
            p.innerHTML=datas.message;
            button.innerHTML="Выйти"
            div.appendChild(p);
            div.appendChild(button);
            document.getElementById('login01').appendChild(div);
            }
        }
    })
}
$(document).ready(function(){
    getUser()
 $('#heandClick12').click(function(){
   $('.form1').css('z-index','0') && $('#vhodilka2').css('display','none')&&
   $('.form2').css('z-index','1') && $('#traif').css('display','block')


 })
  $('#heandClick321').click(function(){
   $('.form2').css('z-index','0') && $('#traif').css('display','none')&&
   $('.form1').css('z-index','1') && $('#vhodilka2').css('display','block')


 })
})


$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/computers',
        cache: false,
        success: function(datas) {
        for (i=0; i<datas.length; i++){
            var div = document.createElement("div");
            var center = document.createElement("center");
            var img = document.createElement("img");
            var p = document.createElement("p");
            var p1 = document.createElement("p");
            var div1 = document.createElement("div");
            var button = document.createElement("button");
            var button1 = document.createElement("button");
            var a=document.createElement("a");
            $(div).addClass("intodiv");
            $(center).addClass("imgdiv");
            $(p).addClass("text22");
            $(p1).addClass("text23");
            $(img).addClass("imgimgimg3");
            $(div1).addClass("groupbutt");
            $(button).addClass("bittion1");
            $(button1).addClass("bittion2");
            img.setAttribute("width","200px");
            img.setAttribute("height","220px");
            a.setAttribute("href","#workd1");
            button1.setAttribute("name",datas[i].name);
            img.src = datas[i].img;
            p.innerHTML = datas[i].name;
            p1.innerHTML ="Цена"+" "+ datas[i].cost;
            button.innerHTML = "Купить";
            button1.innerHTML = "Конфигуратор";
            a.appendChild(button1)
            div1.appendChild(button)
            div1.appendChild(a);
            center.appendChild(img);
            div.appendChild(center);
            div.appendChild(p);
            div.appendChild(p1);
            div.appendChild(div1);
            var parent = document.getElementById("divintro");
            parent.appendChild(div);





            button.onclick = function(event){
                $('.cartopened').css("display","block");
                var all_cart_div = document.createElement("div");
                var img_cart_div = document.createElement("div");
                var text_cart_div1 = document.createElement("div");
                var text_cart_div2 = document.createElement("div");
                var svg_cart_div = document.createElement("div");
                var img_cart = document.createElement("img");
                var p1_cart = document.createElement("p");
                var p2_cart = document.createElement("p");
                const svg_cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                path_cart = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
                $(all_cart_div).addClass("cartelemntone1");
                $(p1_cart).addClass("textppp1");
                $(p2_cart).addClass("textppp2");
                $(svg_cart).addClass("svgcarttt");
                svg_cart.setAttribute("width","24");
                svg_cart.setAttribute("height","24");
                svg_cart.setAttribute("viewBox","0 0 24 24");
                img_cart.setAttribute("width","60px");
                img_cart.setAttribute("height","auto");
                path_cart.setAttribute("d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z")
                p1_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text22").text();
                p2_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text23").text();
                img_cart.src = $(event.target.parentNode.parentNode).find("img").attr("src");
                svg_cart.appendChild(path_cart);
                img_cart_div.appendChild(img_cart);
                text_cart_div1.appendChild(p1_cart);
                text_cart_div2.appendChild(p2_cart);
                svg_cart_div.appendChild(svg_cart);
                all_cart_div.appendChild(img_cart_div);
                all_cart_div.appendChild(text_cart_div1);
                all_cart_div.appendChild(text_cart_div2);
                all_cart_div.appendChild(svg_cart_div);
                 var id_cart = document.getElementById("cartdivmainidf1");
                 id_cart.appendChild(all_cart_div);


               svg_cart.onclick = function(event){
                    all_cart_div.remove();
                    removeatrue();
               }  

atrue();

            }















                a.onclick = function(event){ 
            var id = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
            $.ajax({
        method: "POST",
        url: '/proverka123',
        data:{data:event.target.name},
        cache: false,
        success: function(datas) {
       
        
         document.getElementById(datas[0].videocarta).click();
         document.getElementById(datas[0].processor).click();
         document.getElementById(datas[0].materinskayaplata).click();
         document.getElementById(datas[0].opetativnayapamat).click();
         document.getElementById(datas[0].zvookovaia).click();
         document.getElementById(datas[0].harddisk).click();
         document.getElementById(datas[0].blockpit).click();
         document.getElementById("roomkavoki").click(); 
         document.getElementById("roomkavoki1").click();
         document.getElementById("roomkavoki2").click();
         document.getElementById("roomkavoki3").click();
         document.getElementById("roomkavoki8").click();  
         document.getElementById("roomkavoki9").click(); 
         document.getElementById("roomkavoki10").click();     
         document.getElementById("linkoneroofler").click(); 
         document.getElementById("linkoneroofler1").click(); 
         document.getElementById("linkoneroofler2").click();
         document.getElementById("linkoneroofler3").click();
         document.getElementById("linkoneroofler8").click();
         document.getElementById("linkoneroofler9").click();
         document.getElementById("linkoneroofler10").click();
        }

            })


        }
        }
        }
        })
        })

$('.bittion2').click(function(){
    $.ajax({
        method:"POST",
        url:'/res',
        cache:false,
        data: $('.text22').serialize(),
        success: function(datas) {
            console.log("Normalin")
        }
    })
})

$(".rotofatos").click(function(){
    $(".rotofatos").css('display','none')&& $(".rotofatos1").css('display','block')
})
$(".rotofatos1").click(function(){
    $(".rotofatos1").css('display','none')&& $(".rotofatos").css('display','block')
})

$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/computerforbuy',
        cache: false,
        success: function(datas) {
          
        for (i=0; i<datas.length; i++){
            var div3 = document.createElement("div");
            var center2 = document.createElement("center");
            var img1 = document.createElement("img");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            var div4 = document.createElement("div");
            var button2 = document.createElement("button");
            $(div3).addClass("intodiv");
            $(center2).addClass("imgdiv");
            $(p2).addClass("text22");
            $(p3).addClass("text23");
            $(img1).addClass("imgimgimg3");
            $(div4).addClass("groupbutt");
            $(button2).addClass("bittion1");
            img1.setAttribute("width","200px");
            img1.setAttribute("height","220px");
            img1.src = datas[i].img;
            p2.innerHTML = datas[i].name;
            p3.innerHTML ="Цена"+" "+ datas[i].cost;
            button2.innerHTML = "Купить";
            div4.appendChild(button2)
            center2.appendChild(img1);
            div3.appendChild(center2);
            div3.appendChild(p2);
            div3.appendChild(p3);
            div3.appendChild(div4);
            var parent23 = document.getElementById("dasdsa112");
            parent23.appendChild(div3);





            button2.onclick = function(event){
                $('.cartopened').css("display","block");
                var all_cart_div = document.createElement("div");
                var img_cart_div = document.createElement("div");
                var text_cart_div1 = document.createElement("div");
                var text_cart_div2 = document.createElement("div");
                var svg_cart_div = document.createElement("div");
                var img_cart = document.createElement("img");
                var p1_cart = document.createElement("p");
                var p2_cart = document.createElement("p");
                const svg_cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                path_cart = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
                $(all_cart_div).addClass("cartelemntone1");
                $(p1_cart).addClass("textppp1");
                $(p2_cart).addClass("textppp2");
                $(svg_cart).addClass("svgcarttt");
                svg_cart.setAttribute("width","24");
                svg_cart.setAttribute("height","24");
                svg_cart.setAttribute("viewBox","0 0 24 24");
                img_cart.setAttribute("width","60px");
                img_cart.setAttribute("height","auto");
                path_cart.setAttribute("d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z")
                p1_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text22").text();
                p2_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text23").text();
                img_cart.src = $(event.target.parentNode.parentNode).find("img").attr("src");
                svg_cart.appendChild(path_cart);
                img_cart_div.appendChild(img_cart);
                text_cart_div1.appendChild(p1_cart);
                text_cart_div2.appendChild(p2_cart);
                svg_cart_div.appendChild(svg_cart);
                all_cart_div.appendChild(img_cart_div);
                all_cart_div.appendChild(text_cart_div1);
                all_cart_div.appendChild(text_cart_div2);
                all_cart_div.appendChild(svg_cart_div);
                 var id_cart = document.getElementById("cartdivmainidf1");
                 id_cart.appendChild(all_cart_div);


               svg_cart.onclick = function(event){
                    all_cart_div.remove();
                    removeatrue();
               }  
atrue();


            }
        }
        }
        })
        })
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/monitori',
        cache: false,
        success: function(datas) {
          
        for (i=0; i<datas.length; i++){
            var div5 = document.createElement("div");
            var center3 = document.createElement("center");
            var img2 = document.createElement("img");
            var p4 = document.createElement("p");
            var p5 = document.createElement("p");
            var div6 = document.createElement("div");
            var button8 = document.createElement("button");
            $(div5).addClass("intodiv");
            $(center3).addClass("imgdiv");
            $(p4).addClass("text22");
            $(p5).addClass("text23");
            $(img2).addClass("imgimgimg3");
            $(div6).addClass("groupbutt");
            $(button8).addClass("bittion1");
            img2.setAttribute("width","250px");
            img2.setAttribute("height","220px");
            img2.src = datas[i].img;
            p4.innerHTML = datas[i].name;
            p5.innerHTML ="Цена"+" "+ datas[i].cost;
            button8.innerHTML = "Купить";
            div6.appendChild(button8)
            center3.appendChild(img2);
            div5.appendChild(center3);
            div5.appendChild(p4);
            div5.appendChild(p5);
            div5.appendChild(div6);
            var parent234 = document.getElementById("divintro228mon");
            parent234.appendChild(div5);

                        button8.onclick = function(event){
                $('.cartopened').css("display","block");
                var all_cart_div = document.createElement("div");
                var img_cart_div = document.createElement("div");
                var text_cart_div1 = document.createElement("div");
                var text_cart_div2 = document.createElement("div");
                var svg_cart_div = document.createElement("div");
                var img_cart = document.createElement("img");
                var p1_cart = document.createElement("p");
                var p2_cart = document.createElement("p");
                const svg_cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                path_cart = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
                $(all_cart_div).addClass("cartelemntone1");
                $(p1_cart).addClass("textppp1");
                $(p2_cart).addClass("textppp2");
                $(svg_cart).addClass("svgcarttt");
                svg_cart.setAttribute("width","24");
                svg_cart.setAttribute("height","24");
                svg_cart.setAttribute("viewBox","0 0 24 24");
                img_cart.setAttribute("width","60px");
                img_cart.setAttribute("height","auto");
                path_cart.setAttribute("d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z")
                p1_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text22").text();
                p2_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text23").text();
                img_cart.src = $(event.target.parentNode.parentNode).find("img").attr("src");
                svg_cart.appendChild(path_cart);
                img_cart_div.appendChild(img_cart);
                text_cart_div1.appendChild(p1_cart);
                text_cart_div2.appendChild(p2_cart);
                svg_cart_div.appendChild(svg_cart);
                all_cart_div.appendChild(img_cart_div);
                all_cart_div.appendChild(text_cart_div1);
                all_cart_div.appendChild(text_cart_div2);
                all_cart_div.appendChild(svg_cart_div);
                 var id_cart = document.getElementById("cartdivmainidf1");
                 id_cart.appendChild(all_cart_div);


               svg_cart.onclick = function(event){
                    all_cart_div.remove();
                    removeatrue();
               }  


 atrue()
            }

        }
        }
        })
        })
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/klaviaturimishki',
        cache: false,
        success: function(datas) {
          
        for (i=0; i<datas.length; i++){
            var div7 = document.createElement("div");
            var center4 = document.createElement("center");
            var img3 = document.createElement("img");
            var p6 = document.createElement("p");
            var p7 = document.createElement("p");
            var div8 = document.createElement("div");
            var button9= document.createElement("button");
            $(div7).addClass("intodiv1");
            $(center4).addClass("imgdiv");
            $(p6).addClass("text22");
            $(p7).addClass("text23");
            $(img3).addClass("imgimgimg3");
            $(div8).addClass("groupbutt");
            $(button9).addClass("bittion1121");
            img3.setAttribute("width","260px");
            img3.setAttribute("height","220px");
            img3.src = datas[i].img;
            p6.innerHTML = datas[i].name;
            p7.innerHTML ="Цена"+" "+ datas[i].cost;
            button9.innerHTML = "Купить";
            div8.appendChild(button9)
            center4.appendChild(img3);
            div7.appendChild(center4);
            div7.appendChild(p6);
            div7.appendChild(p7);
            div7.appendChild(div8);
            var parent2345 = document.getElementById("divintro228mon1");
            parent2345.appendChild(div7);

                        button9.onclick = function(event){
                $('.cartopened').css("display","block");
                var all_cart_div = document.createElement("div");
                var img_cart_div = document.createElement("div");
                var text_cart_div1 = document.createElement("div");
                var text_cart_div2 = document.createElement("div");
                var svg_cart_div = document.createElement("div");
                var img_cart = document.createElement("img");
                var p1_cart = document.createElement("p");
                var p2_cart = document.createElement("p");
                const svg_cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                path_cart = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
                $(all_cart_div).addClass("cartelemntone1");
                $(p1_cart).addClass("textppp1");
                $(p2_cart).addClass("textppp2");
                $(svg_cart).addClass("svgcarttt");
                svg_cart.setAttribute("width","24");
                svg_cart.setAttribute("height","24");
                svg_cart.setAttribute("viewBox","0 0 24 24");
                img_cart.setAttribute("width","60px");
                img_cart.setAttribute("height","auto");
                path_cart.setAttribute("d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z")
                p1_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text22").text();
                p2_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text23").text();
                img_cart.src = $(event.target.parentNode.parentNode).find("img").attr("src");
                svg_cart.appendChild(path_cart);
                img_cart_div.appendChild(img_cart);
                text_cart_div1.appendChild(p1_cart);
                text_cart_div2.appendChild(p2_cart);
                svg_cart_div.appendChild(svg_cart);
                all_cart_div.appendChild(img_cart_div);
                all_cart_div.appendChild(text_cart_div1);
                all_cart_div.appendChild(text_cart_div2);
                all_cart_div.appendChild(svg_cart_div);
                 var id_cart = document.getElementById("cartdivmainidf1");
                 id_cart.appendChild(all_cart_div);


               svg_cart.onclick = function(event){
                    all_cart_div.remove();
                    removeatrue();
               }  

atrue();

            }
        }
        }
        })
        })
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/naushniki',
        cache: false,
        success: function(datas) {
          
        for (i=0; i<datas.length; i++){
            var div9 = document.createElement("div");
            var center5 = document.createElement("center");
            var img4 = document.createElement("img");
            var p8 = document.createElement("p");
            var p9 = document.createElement("p");
            var div10 = document.createElement("div");
            var button10 = document.createElement("button");
            $(div9).addClass("intodiv");
            $(center5).addClass("imgdiv");
            $(p8).addClass("text22");
            $(p9).addClass("text23");
            $(img4).addClass("imgimgimg3");
            $(div10).addClass("groupbutt");
            $(button10).addClass("bittion1");
            img4.setAttribute("width","200px");
            img4.setAttribute("height","220px");
            img4.src = datas[i].img;
            p8.innerHTML = datas[i].name;
            p9.innerHTML ="Цена"+" "+ datas[i].cost;
            button10.innerHTML = "Купить";
            div10.appendChild(button10)
            center5.appendChild(img4);
            div9.appendChild(center5);
            div9.appendChild(p8);
            div9.appendChild(p9);
            div9.appendChild(div10);
            var parent23456 = document.getElementById("divintro228mon2");
            parent23456.appendChild(div9);




                        button10.onclick = function(event){
                $('.cartopened').css("display","block");
                var all_cart_div = document.createElement("div");
                var img_cart_div = document.createElement("div");
                var text_cart_div1 = document.createElement("div");
                var text_cart_div2 = document.createElement("div");
                var svg_cart_div = document.createElement("div");
                var img_cart = document.createElement("img");
                var p1_cart = document.createElement("p");
                var p2_cart = document.createElement("p");
                const svg_cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                path_cart = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
                $(all_cart_div).addClass("cartelemntone1");
                $(p1_cart).addClass("textppp1");
                $(p2_cart).addClass("textppp2");
                $(svg_cart).addClass("svgcarttt");
                svg_cart.setAttribute("width","24");
                svg_cart.setAttribute("height","24");
                svg_cart.setAttribute("viewBox","0 0 24 24");
                img_cart.setAttribute("width","60px");
                img_cart.setAttribute("height","60px");
                path_cart.setAttribute("d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z")
                p1_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text22").text();
                p2_cart.innerHTML = $(event.target.parentNode.parentNode).find(".text23").text();
                img_cart.src = $(event.target.parentNode.parentNode).find("img").attr("src");
                svg_cart.appendChild(path_cart);
                img_cart_div.appendChild(img_cart);
                text_cart_div1.appendChild(p1_cart);
                text_cart_div2.appendChild(p2_cart);
                svg_cart_div.appendChild(svg_cart);
                all_cart_div.appendChild(img_cart_div);
                all_cart_div.appendChild(text_cart_div1);
                all_cart_div.appendChild(text_cart_div2);
                all_cart_div.appendChild(svg_cart_div);
                 var id_cart = document.getElementById("cartdivmainidf1");
                 id_cart.appendChild(all_cart_div);


               svg_cart.onclick = function(event){
                    all_cart_div.remove();
                    removeatrue();
               }  

atrue();

            }
        }
        }
        })
        })
$(document).ready(function(){
    $(".svgofuparrow").click(function(){
        $('body,html').animate({scrollTop: 0}, 1500);

    })


})
$(document).ready(function(){
  $('.lessobonimg svg').click(function(event){
    $('.lessobonimg svg').css('fill','red').css('opacity','1').not(this).css('fill','white').css('opacity','0.3')
  })
})
$(".rlinkscg").click(function(){
    $(".rlinkscg").css('display','none')&& $(".rotofatos3").css('display','block')
})
$(".rotofatos3").click(function(){
    $(".rotofatos3").css('display','none')&& $(".rlinkscg").css('display','block')
})

$(".rlinkscg1").click(function(){
    $(".rlinkscg1").css('display','none')&& $(".rotofatos4").css('display','block')
})
$(".rotofatos4").click(function(){
    $(".rotofatos4").css('display','none')&& $(".rlinkscg1").css('display','block')
})
$(".rlinkscgvideo").click(function(){
    $(".rlinkscgvideo").css('display','none')&& $(".rotofatosvideo").css('display','block')
})
$(".rotofatosvideo").click(function(){
    $(".rotofatosvideo").css('display','none')&& $(".rlinkscgvideo").css('display','block')
})
$(".rlinkscgprossesor").click(function(){
    $(".rlinkscgprossesor").css('display','none')&& $(".rotofatosprossesor").css('display','block')
})
$(".rotofatosprossesor").click(function(){
    $(".rotofatosprossesor").css('display','none')&& $(".rlinkscgprossesor").css('display','block')
})
$(".rlinkscgmaterinka").click(function(){
    $(".rlinkscgmaterinka").css('display','none')&& $(".rotofatosmaterinka").css('display','block')
})
$(".rotofatosmaterinka").click(function(){
    $(".rotofatosmaterinka").css('display','none')&& $(".rlinkscgmaterinka").css('display','block')
})
$(".rlinkscgoperativka").click(function(){
    $(".rlinkscgoperativka").css('display','none')&& $(".rotofatosoperativka").css('display','block')
})
$(".rotofatosoperativka").click(function(){
    $(".rotofatosoperativka").css('display','none')&& $(".rlinkscgoperativka").css('display','block')
})
$(".rlinkscgzvook").click(function(){
    $(".rlinkscgzvook").css('display','none')&& $(".rotofatoszvook").css('display','block')
})
$(".rotofatoszvook").click(function(){
    $(".rotofatoszvook").css('display','none')&& $(".rlinkscgzvook").css('display','block')
})
$(".rlinkscghard").click(function(){
    $(".rlinkscghard").css('display','none')&& $(".rotofatoshard").css('display','block')
})
$(".rotofatoshard").click(function(){
    $(".rotofatoshard").css('display','none')&& $(".rlinkscghard").css('display','block')
})
$(".rlinkscgblock").click(function(){
    $(".rlinkscgblock").css('display','none')&& $(".rotofatosblock").css('display','block')
})
$(".rotofatosblock").click(function(){
    $(".rotofatosblock").css('display','none')&& $(".rlinkscgblock").css('display','block')
})
$(".rlinkscgmoniki28").click(function(){
    $(".rlinkscgmoniki28").css('display','none')&& $(".rotofatosmoniki28").css('display','block')
})
$(".rotofatosmoniki28").click(function(){
    $(".rotofatosmoniki28").css('display','none')&& $(".rlinkscgmoniki28").css('display','block')
})
$(".rlinkscgkovriki229").click(function(){
    $(".rlinkscgkovriki229").css('display','none')&& $(".rotofatoskovriki229").css('display','block')
})
$(".rotofatoskovriki229").click(function(){
    $(".rotofatoskovriki229").css('display','none')&& $(".rlinkscgkovriki229").css('display','block')
})
$(".rlinkscgmouse1231").click(function(){
    $(".rlinkscgmouse1231").css('display','none')&& $(".rotofatosmouse1231").css('display','block')
})
$(".rotofatosmouse1231").click(function(){
    $(".rotofatosmouse1231").css('display','none')&& $(".rlinkscgmouse1231").css('display','block')
})
$(".rlinkscgnaushniku3221").click(function(){
    $(".rlinkscgnaushniku3221").css('display','none')&& $(".rotofatosnaushniku3221").css('display','block')
})
$(".rotofatosnaushniku3221").click(function(){
    $(".rotofatosnaushniku3221").css('display','none')&& $(".rlinkscgnaushniku3221").css('display','block')
})
$(".rlinkscgkoversamolet").click(function(){
    $(".rlinkscgkoversamolet").css('display','none')&& $(".rotofatoskoversamolet").css('display','block')
})
$(".rotofatoskoversamolet").click(function(){
    $(".rotofatoskoversamolet").css('display','none')&& $(".rlinkscgkoversamolet").css('display','block')
})


$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/videocard',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_video = document.createElement("div");
         input_video = document.createElement("input");
         label_video = document.createElement("label");
        const svg_video = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_video = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_video.setAttribute("type","radio");
         input_video.setAttribute("name",datas[i].id);
         input_video.setAttribute("id",datas[i].name);
         label_video.setAttribute("for",datas[i].name);
         label_video.innerHTML = datas[i].name;
         svg_video.setAttribute("width","20");
         svg_video.setAttribute("height","20");
         svg_video.setAttribute("viewBox","0 0 24 24");
         path_video.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_video.appendChild(path_video);
         div_video.appendChild(input_video);
         div_video.appendChild(label_video);
         div_video.appendChild(svg_video);
         document.getElementById("videokartib").appendChild(div_video);

        input_video.onclick = function(event){
           
            $.ajax({
        method: "POST",
        url: '/videocard123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik').empty();
            var img_video = document.createElement("img");
            var div_for_video = document.createElement("div");
            var p_for_video = document.createElement("p");
            p_for_video.innerHTML=datas[0].information;
            div_for_video.appendChild(p_for_video);
            document.getElementById("rofloturik").appendChild(div_for_video);


            img_video.setAttribute("width","280px");
            img_video.setAttribute("height","250px");
            img_video.src=datas[0].img;
            var pedessa = document.createElement("p");
            $(pedessa).addClass("cenaewq");
            pedessa.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa.setAttribute("id","cena_video")
            document.getElementById("fotkaicena").innerHTML="";
           
            document.getElementById("fotkaicena").appendChild(img_video);
             document.getElementById("fotkaicena").appendChild(pedessa);
             finalcost();
        }

            })


        }
        }
       
        }
        })
        })
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/prossesor',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_prosessor = document.createElement("div");
         input_prosessor = document.createElement("input");
         label_prosessor = document.createElement("label");
        const svg_prosessor = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_prosessor = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_prosessor.setAttribute("type","radio");
         input_prosessor.setAttribute("name",datas[i].id);
         input_prosessor.setAttribute("id",datas[i].name);
         label_prosessor.setAttribute("for",datas[i].name);
         label_prosessor.innerHTML = datas[i].name;
         svg_prosessor.setAttribute("width","20");
         svg_prosessor.setAttribute("height","20");
         svg_prosessor.setAttribute("viewBox","0 0 24 24");
         path_prosessor.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_prosessor.appendChild(path_prosessor);
         div_prosessor.appendChild(input_prosessor);
         div_prosessor.appendChild(label_prosessor);
         div_prosessor.appendChild(svg_prosessor);
         document.getElementById("prosessorib").appendChild(div_prosessor);

        input_prosessor.onclick = function(event){
           
            $.ajax({
        method: "POST",
        url: '/prosessor123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik1').empty();
            var img_prosessor = document.createElement("img");
            var div_for_prossesor = document.createElement("div");
            var p_for_prossesor = document.createElement("p");
            p_for_prossesor.innerHTML=datas[0].information;
            div_for_prossesor.appendChild(p_for_prossesor);
            document.getElementById("rofloturik1").appendChild(div_for_prossesor);

            img_prosessor.setAttribute("width","280px");
            img_prosessor.setAttribute("height","250px");
            img_prosessor.src=datas[0].img;
            var pedessa1 = document.createElement("p");
            $(pedessa1).addClass("cenaewq");
            pedessa1.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa1.setAttribute("id","cena_proccesor")
            document.getElementById("fotkaicena1").innerHTML="";
            document.getElementById("fotkaicena1").appendChild(img_prosessor);
             document.getElementById("fotkaicena1").appendChild(pedessa1);
             finalcost();
        }

            })


        }
        }
       
        }
        })
        })
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/materinskiepl',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_mater = document.createElement("div");
         input_mater = document.createElement("input");
         label_mater = document.createElement("label");
        const svg_mater = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_mater = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_mater.setAttribute("type","radio");
         input_mater.setAttribute("name",datas[i].id);
         input_mater.setAttribute("id",datas[i].name);
         label_mater.setAttribute("for",datas[i].name);
         label_mater.innerHTML = datas[i].name;
         svg_mater.setAttribute("width","20");
         svg_mater.setAttribute("height","20");
         svg_mater.setAttribute("viewBox","0 0 24 24");
         path_mater.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_mater.appendChild(path_mater);
         div_mater.appendChild(input_mater);
         div_mater.appendChild(label_mater);
         div_mater.appendChild(svg_mater);
         document.getElementById("materinkaid").appendChild(div_mater);

        input_mater.onclick = function(event){
           
            $.ajax({
        method: "POST",
        url: '/materinskiepl123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
             $('#rofloturik2').empty();
            var img_mater = document.createElement("img");
            var div_for_materinkaia = document.createElement("div");
            var p_for_materinkaia = document.createElement("p");
            p_for_materinkaia.innerHTML=datas[0].information;
            div_for_materinkaia.appendChild(p_for_materinkaia);
            document.getElementById("rofloturik2").appendChild(div_for_materinkaia);

            img_mater.setAttribute("width","280px");
            img_mater.setAttribute("height","250px");
            img_mater.src=datas[0].img;
            var pedessa2 = document.createElement("p");
            $(pedessa2).addClass("cenaewq");
            pedessa2.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa2.setAttribute("id","cena_matery")
            document.getElementById("fotkaicena2").innerHTML="";
            document.getElementById("fotkaicena2").appendChild(img_mater);
             document.getElementById("fotkaicena2").appendChild(pedessa2);
            finalcost();
        }

            })


        }
        }
       
        }
        })
        })

$(document).ready(function(){
    $('.menunavigation a').click(function(event){
        $('.menunavigation a').css('color','red').css('transition','all .5s ease').not(this).css('color','#e8e8e8');
       
    
    })

})

function finalcost(){
   var cenakovrydluamusiey=$('#cena_kovrydluamusiey').text().substring(5);
   var cenanaushnikiconf=$('#cena_naushnikiconf').text().substring(5);
   var cenamouseconfigir=$('#cena_mouseconfigir').text().substring(5);
   var cenaklavaconfigyy =$('#cena_klavaconfig').text().substring(5);
   var cenamonikiconfigy =$('#cena_monikiconfig').text().substring(5);
   var cenaoperativka = $('#cena_operativka').text().substring(5);
   var cenavideokarty = $('#cena_video').text().substring(5);
   var cenaproccesory = $('#cena_proccesor').text().substring(5);
   var cenamaterinkyy = $('#cena_matery').text().substring(5);
   var cenazvookyyyyy = $('#cena_zvook').text().substring(5);
   var cenahardyyyyyy = $('#cena_hard').text().substring(5);
   var cenablockyyyyy = $('#cena_block').text().substring(5);
   cenakovrydluamusiey = cenakovrydluamusiey.slice(0, -3);
   cenakovrydluamusiey = parseInt(cenakovrydluamusiey);
   cenanaushnikiconf = cenanaushnikiconf.slice(0, -3);
   cenanaushnikiconf = parseInt(cenanaushnikiconf);
   cenamouseconfigir = cenamouseconfigir.slice(0, -3);
   cenamouseconfigir = parseInt(cenamouseconfigir);
   cenamonikiconfigy = cenamonikiconfigy.slice(0, -3);
   cenamonikiconfigy = parseInt(cenamonikiconfigy);
   cenaklavaconfigyy = cenaklavaconfigyy.slice(0, -3);
   cenaklavaconfigyy = parseInt(cenaklavaconfigyy);
   cenavideokarty = cenavideokarty.slice(0, -3);
   cenavideokarty = parseInt(cenavideokarty);
   cenaproccesory = cenaproccesory.slice(0, -3);
   cenaproccesory = parseInt(cenaproccesory);
   cenamaterinkyy = cenamaterinkyy.slice(0, -3);
   cenamaterinkyy = parseInt(cenamaterinkyy);
   cenaoperativka = cenaoperativka.slice(0, -3);
   cenaoperativka = parseInt(cenaoperativka);
   cenazvookyyyyy = cenazvookyyyyy.slice(0, -3);
   cenazvookyyyyy = parseInt(cenazvookyyyyy);
   cenahardyyyyyy = cenahardyyyyyy.slice(0, -3);
   cenahardyyyyyy = parseInt(cenahardyyyyyy);
   cenablockyyyyy = cenablockyyyyy.slice(0, -3);
   cenablockyyyyy = parseInt(cenablockyyyyy);
   var summa;
    if (!cenaklavaconfigyy){
        cenaklavaconfigyy=0;

   }
   if (!cenakovrydluamusiey){
        cenakovrydluamusiey=0;

   }
    if (!cenanaushnikiconf){
        cenanaushnikiconf=0;

   }
    if (!cenamouseconfigir){
        cenamouseconfigir=0;

   }
   if (!cenamonikiconfigy){
        cenamonikiconfigy=0;

   }
   if (!cenavideokarty){
        cenavideokarty=0;

   }
   if (!cenaoperativka){
        cenaoperativka=0;

   }
     if (!cenaproccesory){
        cenaproccesory=0;
        
   }
    if (!cenamaterinkyy){
        cenamaterinkyy=0;
        
   }
    if (!cenazvookyyyyy){
        cenazvookyyyyy=0;

   }
    if (!cenahardyyyyyy){
        cenahardyyyyyy=0;

   }
   if (!cenablockyyyyy){
        cenablockyyyyy=0;

   }
   summa=cenavideokarty+cenamaterinkyy+cenaproccesory+cenaoperativka+cenazvookyyyyy+cenahardyyyyyy+cenablockyyyyy+cenamonikiconfigy+cenaklavaconfigyy+cenamouseconfigir+cenanaushnikiconf+cenakovrydluamusiey;

   document.getElementById("obshayacena").innerHTML = "Общая цена:"+summa+" "+"тг";
}


$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/operativka',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_operativka = document.createElement("div");
         input_operativka = document.createElement("input");
         label_operativka = document.createElement("label");
        const svg_operativka = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_operativka = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_operativka.setAttribute("type","radio");
         input_operativka.setAttribute("name",datas[i].id);
         input_operativka.setAttribute("id",datas[i].name);
         label_operativka.setAttribute("for",datas[i].name);
         label_operativka.innerHTML = datas[i].name;
         svg_operativka.setAttribute("width","20");
         svg_operativka.setAttribute("height","20");
         svg_operativka.setAttribute("viewBox","0 0 24 24");
         path_operativka.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_operativka.appendChild(path_operativka);
         div_operativka.appendChild(input_operativka);
         div_operativka.appendChild(label_operativka);
         div_operativka.appendChild(svg_operativka);
         document.getElementById("operativnayapamat").appendChild(div_operativka);

        input_operativka.onclick = function(event){
           
            $.ajax({
        method: "POST",
        url: '/operativka123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik3').empty();
            var div_for_opiracionka = document.createElement("div");
            var p_for_opiracionka = document.createElement("p");
            p_for_opiracionka.innerHTML=datas[0].information;
            div_for_opiracionka.appendChild(p_for_opiracionka);
            document.getElementById("rofloturik3").appendChild(div_for_opiracionka);

            var img_operativka = document.createElement("img");
            img_operativka.setAttribute("width","280px");
            img_operativka.setAttribute("height","250px");
            img_operativka.src=datas[0].img;
            var pedessa5 = document.createElement("p");
            $(pedessa5).addClass("cenaewq");
            pedessa5.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa5.setAttribute("id","cena_operativka")
            document.getElementById("fotkaicena9").innerHTML="";
           
            document.getElementById("fotkaicena9").appendChild(img_operativka);
             document.getElementById("fotkaicena9").appendChild(pedessa5);
             finalcost();
        }

            })


        }
        }
       
        }
        })
        })

$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/zvookoviekarty',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_zvook = document.createElement("div");
         input_zvook = document.createElement("input");
         label_zvook = document.createElement("label");
        const svg_zvook = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_zvook = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_zvook.setAttribute("type","radio");
         input_zvook.setAttribute("name",datas[i].id);
         input_zvook.setAttribute("id",datas[i].name);
         label_zvook.setAttribute("for",datas[i].name);
         label_zvook.innerHTML = datas[i].name;
         svg_zvook.setAttribute("width","20");
         svg_zvook.setAttribute("height","20");
         svg_zvook.setAttribute("viewBox","0 0 24 24");
         path_zvook.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_zvook.appendChild(path_zvook);
         div_zvook.appendChild(input_zvook);
         div_zvook.appendChild(label_zvook);
         div_zvook.appendChild(svg_zvook);
         document.getElementById("zvokovkartachka").appendChild(div_zvook);
        input_zvook.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/zvookoviekarty123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik4').empty();
            var div_for_zvookcard = document.createElement("div");
            var p_for_zvookcard = document.createElement("p");
            p_for_zvookcard.innerHTML=datas[0].information;
            div_for_zvookcard.appendChild(p_for_zvookcard);
            document.getElementById("rofloturik4").appendChild(div_for_zvookcard);

            var img_zvook = document.createElement("img");
            img_zvook.setAttribute("width","280px");
            img_zvook.setAttribute("height","250px");
            img_zvook.src=datas[0].img;
            var pedessa8 = document.createElement("p");
            $(pedessa8).addClass("cenaewq");
            pedessa8.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa8.setAttribute("id","cena_zvook")
            document.getElementById("fotkaicena21").innerHTML="";
            document.getElementById("fotkaicena21").appendChild(img_zvook);
             document.getElementById("fotkaicena21").appendChild(pedessa8);
             finalcost();
        }
            })
        }
        }
        }
        })
        })

// жесткие диски
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/harddisk',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_hard = document.createElement("div");
         input_hard = document.createElement("input");
         label_hard = document.createElement("label");
        const svg_hard = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_hard = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_hard.setAttribute("type","radio");
         input_hard.setAttribute("name",datas[i].id);
         input_hard.setAttribute("id",datas[i].name);
         label_hard.setAttribute("for",datas[i].name);
         label_hard.innerHTML = datas[i].name;
         svg_hard.setAttribute("width","20");
         svg_hard.setAttribute("height","20");
         svg_hard.setAttribute("viewBox","0 0 24 24");
         path_hard.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_hard.appendChild(path_hard);
         div_hard.appendChild(input_hard);
         div_hard.appendChild(label_hard);
         div_hard.appendChild(svg_hard);
         document.getElementById("harddiskettiki").appendChild(div_hard);
        input_hard.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/harddisk123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik5').empty();
            var div_for_harddiskettas = document.createElement("div");
            var p_for_harddiskettas = document.createElement("p");
            p_for_harddiskettas.innerHTML=datas[0].information;
            div_for_harddiskettas.appendChild(p_for_harddiskettas);
            document.getElementById("rofloturik5").appendChild(div_for_harddiskettas);

            var img_hard = document.createElement("img");
            img_hard.setAttribute("width","280px");
            img_hard.setAttribute("height","250px");
            img_hard.src=datas[0].img;
            var pedessa9 = document.createElement("p");
            $(pedessa9).addClass("cenaewq");
            pedessa9.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa9.setAttribute("id","cena_hard")
            document.getElementById("fotkaicena22").innerHTML="";
            document.getElementById("fotkaicena22").appendChild(img_hard);
             document.getElementById("fotkaicena22").appendChild(pedessa9);
             finalcost();
        }
            })
        }
        }
        }
        })
        })

// блоки питания

$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/blockpit',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_block = document.createElement("div");
         input_block = document.createElement("input");
         label_block = document.createElement("label");
        const svg_block = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_block = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_block.setAttribute("type","radio");
         input_block.setAttribute("name",datas[i].id);
         input_block.setAttribute("id",datas[i].name);
         label_block.setAttribute("for",datas[i].name);
         label_block.innerHTML = datas[i].name;
         svg_block.setAttribute("width","20");
         svg_block.setAttribute("height","20");
         svg_block.setAttribute("viewBox","0 0 24 24");
         path_block.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_block.appendChild(path_block);
         div_block.appendChild(input_block);
         div_block.appendChild(label_block);
         div_block.appendChild(svg_block);
         document.getElementById("blockipitti").appendChild(div_block);
        input_block.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/blockpit123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
             $('#rofloturik6').empty();
            var div_for_blockpittasssw = document.createElement("div");
            var p_for_blockpittasssw = document.createElement("p");
            p_for_blockpittasssw.innerHTML=datas[0].information;
            div_for_blockpittasssw.appendChild(p_for_blockpittasssw);
            document.getElementById("rofloturik6").appendChild(div_for_blockpittasssw);

            var img_block = document.createElement("img");
            img_block.setAttribute("width","280px");
            img_block.setAttribute("height","250px");
            img_block.src=datas[0].img;
            var pedessa20 = document.createElement("p");
            $(pedessa20).addClass("cenaewq");
            pedessa20.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa20.setAttribute("id","cena_block")
            document.getElementById("fotkaicena23").innerHTML="";
            document.getElementById("fotkaicena23").appendChild(img_block);
             document.getElementById("fotkaicena23").appendChild(pedessa20);
             finalcost();
        }
            })
        }
        }
        }
        })
        })

// МОНИТОРЫ
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/monikiconf',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_monikiconfig = document.createElement("div");
         input_monikiconfig = document.createElement("input");
         label_monikiconfig = document.createElement("label");
        const svg_monikiconfig = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_monikiconfig = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_monikiconfig.setAttribute("type","radio");
         input_monikiconfig.setAttribute("name",datas[i].id);
         input_monikiconfig.setAttribute("id",datas[i].name);
         label_monikiconfig.setAttribute("for",datas[i].name);
         label_monikiconfig.innerHTML = datas[i].name;
         svg_monikiconfig.setAttribute("width","20");
         svg_monikiconfig.setAttribute("height","20");
         svg_monikiconfig.setAttribute("viewBox","0 0 24 24");
         path_monikiconfig.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_monikiconfig.appendChild(path_monikiconfig);
         div_monikiconfig.appendChild(input_monikiconfig);
         div_monikiconfig.appendChild(label_monikiconfig);
         div_monikiconfig.appendChild(svg_monikiconfig);
         document.getElementById("monitory12123").appendChild(div_monikiconfig);
        input_monikiconfig.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/monikiconf123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik7').empty();
            var div_for_monitor = document.createElement("div");
            var p_for_monitor = document.createElement("p");
            p_for_monitor.innerHTML=datas[0].information;
            div_for_monitor.appendChild(p_for_monitor);
            document.getElementById("rofloturik7").appendChild(div_for_monitor);




            var img_monikiconfig = document.createElement("img");
            img_monikiconfig.setAttribute("width","280px");
            img_monikiconfig.setAttribute("height","250px");
            img_monikiconfig.src=datas[0].img;
            var pedessa28 = document.createElement("p");
            $(pedessa28).addClass("cenaewq");
            pedessa28.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa28.setAttribute("id","cena_monikiconfig")
            document.getElementById("fotkaicena233").innerHTML="";
            document.getElementById("fotkaicena233").appendChild(img_monikiconfig);
             document.getElementById("fotkaicena233").appendChild(pedessa28);
             finalcost();
        }
            })
        }
        }
        }
        })
        })

// КЛАВИАТУРЫ
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/klaviaturyconf',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_klavaconfig = document.createElement("div");
         input_klavaconfig = document.createElement("input");
         label_klavaconfig = document.createElement("label");
        const svg_klavaconfig = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_klavaconfig = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_klavaconfig.setAttribute("type","radio");
         input_klavaconfig.setAttribute("name",datas[i].id);
         input_klavaconfig.setAttribute("id",datas[i].name);
         label_klavaconfig.setAttribute("for",datas[i].name);
         label_klavaconfig.innerHTML = datas[i].name;
         svg_klavaconfig.setAttribute("width","20");
         svg_klavaconfig.setAttribute("height","20");
         svg_klavaconfig.setAttribute("viewBox","0 0 24 24");
         path_klavaconfig.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_klavaconfig.appendChild(path_klavaconfig);
         div_klavaconfig.appendChild(input_klavaconfig);
         div_klavaconfig.appendChild(label_klavaconfig);
         div_klavaconfig.appendChild(svg_klavaconfig);
         document.getElementById("klaviatura228322").appendChild(div_klavaconfig);
        input_klavaconfig.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/klaviaturyconf123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik8').empty();
            var div_for_klaviat = document.createElement("div");
            var p_for_klaviat = document.createElement("p");
            p_for_klaviat.innerHTML=datas[0].information;
            div_for_klaviat.appendChild(p_for_klaviat);
            document.getElementById("rofloturik8").appendChild(div_for_klaviat);

            var img_klavaconfig = document.createElement("img");
            img_klavaconfig.setAttribute("width","280px");
            img_klavaconfig.setAttribute("height","250px");
            img_klavaconfig.src=datas[0].img;
            var pedessa29 = document.createElement("p");
            $(pedessa29).addClass("cenaewq");
            pedessa29.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa29.setAttribute("id","cena_klavaconfig")
            document.getElementById("fotkaicena2333").innerHTML="";
            document.getElementById("fotkaicena2333").appendChild(img_klavaconfig);
             document.getElementById("fotkaicena2333").appendChild(pedessa29);
             finalcost();
        }
            })
        }
        }
        }
        })
        })

// МЫШКИ
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/mouseconf',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_mouseconfigir = document.createElement("div");
         input_mouseconfigir = document.createElement("input");
         label_mouseconfigir = document.createElement("label");
        const svg_mouseconfigir = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_mouseconfigir = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_mouseconfigir.setAttribute("type","radio");
         input_mouseconfigir.setAttribute("name",datas[i].id);
         input_mouseconfigir.setAttribute("id",datas[i].name);
         label_mouseconfigir.setAttribute("for",datas[i].name);
         label_mouseconfigir.innerHTML = datas[i].name;
         svg_mouseconfigir.setAttribute("width","20");
         svg_mouseconfigir.setAttribute("height","20");
         svg_mouseconfigir.setAttribute("viewBox","0 0 24 24");
         path_mouseconfigir.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_mouseconfigir.appendChild(path_mouseconfigir);
         div_mouseconfigir.appendChild(input_mouseconfigir);
         div_mouseconfigir.appendChild(label_mouseconfigir);
         div_mouseconfigir.appendChild(svg_mouseconfigir);
         document.getElementById("mouseforhtml").appendChild(div_mouseconfigir);
        input_mouseconfigir.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/mouseconf123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik9').empty();
            var div_for_mousses = document.createElement("div");
            var p_for_mousses = document.createElement("p");
            p_for_mousses.innerHTML=datas[0].information;
            div_for_mousses.appendChild(p_for_mousses);
            document.getElementById("rofloturik9").appendChild(div_for_mousses);

            var img_mouseconfigir = document.createElement("img");
            img_mouseconfigir.setAttribute("width","280px");
            img_mouseconfigir.setAttribute("height","250px");
            img_mouseconfigir.src=datas[0].img;
            var pedessa30 = document.createElement("p");
            $(pedessa30).addClass("cenaewq");
            pedessa30.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa30.setAttribute("id","cena_mouseconfigir")
            document.getElementById("fotkaicena888").innerHTML="";
            document.getElementById("fotkaicena888").appendChild(img_mouseconfigir);
             document.getElementById("fotkaicena888").appendChild(pedessa30);
             finalcost();
        }
            })
        }
        }
        }
        })
        })

// НАУШНИКИ
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/naushnikiconf',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_naushnikiconf = document.createElement("div");
         input_naushnikiconf = document.createElement("input");
         label_naushnikiconf = document.createElement("label");
        const svg_naushnikiconf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_naushnikiconf = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_naushnikiconf.setAttribute("type","radio");
         input_naushnikiconf.setAttribute("name",datas[i].id);
         input_naushnikiconf.setAttribute("id",datas[i].name);
         label_naushnikiconf.setAttribute("for",datas[i].name);
         label_naushnikiconf.innerHTML = datas[i].name;
         svg_naushnikiconf.setAttribute("width","20");
         svg_naushnikiconf.setAttribute("height","20");
         svg_naushnikiconf.setAttribute("viewBox","0 0 24 24");
         path_naushnikiconf.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_naushnikiconf.appendChild(path_naushnikiconf);
         div_naushnikiconf.appendChild(input_naushnikiconf);
         div_naushnikiconf.appendChild(label_naushnikiconf);
         div_naushnikiconf.appendChild(svg_naushnikiconf);
         document.getElementById("naushnukkk12123").appendChild(div_naushnikiconf);
        input_naushnikiconf.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/naushnikiconf123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik10').empty();
            var div_for_naushniki = document.createElement("div");
            var p_for_naushniki = document.createElement("p");
            p_for_naushniki.innerHTML=datas[0].information;
            div_for_naushniki.appendChild(p_for_naushniki);
            document.getElementById("rofloturik10").appendChild(div_for_naushniki);

            var img_naushnikiconf = document.createElement("img");
            img_naushnikiconf.setAttribute("width","280px");
            img_naushnikiconf.setAttribute("height","250px");
            img_naushnikiconf.src=datas[0].img;
            var pedessa31 = document.createElement("p");
            $(pedessa31).addClass("cenaewq");
            pedessa31.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa31.setAttribute("id","cena_naushnikiconf")
            document.getElementById("fotkaicena233228332").innerHTML="";
            document.getElementById("fotkaicena233228332").appendChild(img_naushnikiconf);
             document.getElementById("fotkaicena233228332").appendChild(pedessa31);
             finalcost();
        }
            })
        }
        }
        }
        })
        })


// КОВРИКИ ДЛЯ МЫШКИ
$(document).ready(function(){
        $.ajax({
        method: "GET",
        url: '/kovrikydliaconf',
        cache: false,
        success: function(datas) {
         var a = datas;
        for (i=0; i<datas.length; i++){
         div_kovrydluamusiey = document.createElement("div");
         input_kovrydluamusiey = document.createElement("input");
         label_kovrydluamusiey = document.createElement("label");
        const svg_kovrydluamusiey = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path_kovrydluamusiey = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
         input_kovrydluamusiey.setAttribute("type","radio");
         input_kovrydluamusiey.setAttribute("name",datas[i].id);
         input_kovrydluamusiey.setAttribute("id",datas[i].name);
         label_kovrydluamusiey.setAttribute("for",datas[i].name);
         label_kovrydluamusiey.innerHTML = datas[i].name;
         svg_kovrydluamusiey.setAttribute("width","20");
         svg_kovrydluamusiey.setAttribute("height","20");
         svg_kovrydluamusiey.setAttribute("viewBox","0 0 24 24");
         path_kovrydluamusiey.setAttribute("d","M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z")
         svg_kovrydluamusiey.appendChild(path_kovrydluamusiey);
         div_kovrydluamusiey.appendChild(input_kovrydluamusiey);
         div_kovrydluamusiey.appendChild(label_kovrydluamusiey);
         div_kovrydluamusiey.appendChild(svg_kovrydluamusiey);
         document.getElementById("koverishhhher123321").appendChild(div_kovrydluamusiey);
        input_kovrydluamusiey.onclick = function(event){ 
            $.ajax({
        method: "POST",
        url: '/kovrikydliaconf123',
        data:{data:event.target.id},
        cache: false,
        success: function(datas) {
            $('#rofloturik11').empty();
            var div_for_kovrid = document.createElement("div");
            var p_for_kovrid = document.createElement("p");
            p_for_kovrid.innerHTML=datas[0].information;
            div_for_kovrid.appendChild(p_for_kovrid);
            document.getElementById("rofloturik11").appendChild(div_for_kovrid);

            var img_kovrydluamusiey = document.createElement("img");
            img_kovrydluamusiey.setAttribute("width","280px");
            img_kovrydluamusiey.setAttribute("height","250px");
            img_kovrydluamusiey.src=datas[0].img;
            var pedessa32 = document.createElement("p");
            $(pedessa32).addClass("cenaewq");
            pedessa32.innerHTML="цена:"+datas[0].cost+" "+"тг";
            pedessa32.setAttribute("id","cena_kovrydluamusiey")
            document.getElementById("koverishhhher").innerHTML="";
            document.getElementById("koverishhhher").appendChild(img_kovrydluamusiey);
             document.getElementById("koverishhhher").appendChild(pedessa32);
             finalcost();
        }
            })
        }
        }
        }
        })
        })

$(document).ready(function(){
    $('.svgonelovercart').click(function(){
        $('.cartopened').css('display','none')
    })
})
$(document).ready(function(){
    $('.iconlogin1').click(function(){
        $('.cartopened').css('display','block')
    })
})

$(".marrrtop").click(function(){
    $('.cartelemntone123').remove();
    var first = ["#videokartib","#prosessorib","#materinkaid","#operativnayapamat","#zvokovkartachka","#harddiskettiki","#blockipitti","#monitory12123","#klaviatura228322","#mouseforhtml","#naushnukkk12123","#koverishhhher123321"];
    var seconnd = ["#fotkaicena","#fotkaicena1","#fotkaicena2","#fotkaicena9","#fotkaicena21","#fotkaicena22","#fotkaicena23","#fotkaicena233","#fotkaicena2333","#fotkaicena888","#fotkaicena233228332","#koverishhhher"];
    for(var i=0; i<first.length; i++){
        var k = $(first[i]).find("input[name='undefined']:checked").attr("id");
        var s = $(seconnd[i]).find("img").attr("src");
        var r = $(seconnd[i]).find("p").text();
        if(k){
                 $('.cartopened').css("display","block");
                var all_cart_div = document.createElement("div");
                var img_cart_div = document.createElement("div");
                var text_cart_div1 = document.createElement("div");
                var text_cart_div2 = document.createElement("div");
                var svg_cart_div = document.createElement("div");
                var img_cart = document.createElement("img");
                var p1_cart = document.createElement("p");
                var p2_cart = document.createElement("p");
                const svg_cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                path_cart = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
                $(all_cart_div).addClass("cartelemntone1");
                 $(all_cart_div).addClass("cartelemntone123");
                $(p1_cart).addClass("textppp1");
                $(p2_cart).addClass("textppp2");
                $(svg_cart).addClass("svgcarttt");
                svg_cart.setAttribute("width","24");
                svg_cart.setAttribute("height","24");
                svg_cart.setAttribute("viewBox","0 0 24 24");
                img_cart.setAttribute("width","60px");
                img_cart.setAttribute("height","auto");
                path_cart.setAttribute("d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z")
                p1_cart.innerHTML = k;
                p2_cart.innerHTML = r;
                img_cart.src = s;
                svg_cart.appendChild(path_cart);
                img_cart_div.appendChild(img_cart);
                text_cart_div1.appendChild(p1_cart);
                text_cart_div2.appendChild(p2_cart);
                svg_cart_div.appendChild(svg_cart);
                all_cart_div.appendChild(img_cart_div);
                all_cart_div.appendChild(text_cart_div1);
                all_cart_div.appendChild(text_cart_div2);
                all_cart_div.appendChild(svg_cart_div);
                 var id_cart = document.getElementById("cartdivmainidf1");
                 id_cart.appendChild(all_cart_div);


               svg_cart.onclick = function(event){
                   ($(event.target).closest(".cartelemntone1")).remove();
                    removeatrue();
               }  
atrue();
        }
    }
      })

$('.button_oformittw').click(function(){
        var summmma=0;

       $('.cartelemntone1').each(function(index){
        var elementar =$(this).find(".textppp2").text().substring(5);
        elementar = parseInt(elementar);
       
        if(elementar){summmma =summmma+elementar}
        

       })
       $('#obshayacffffjd').text("Общая цена закупки:"+" "+summmma+" "+"тг");
})



$('.modalbuttonnum0n1211').click(function(){
    var result ={data:$('#cartdivmainidf1').text(), name_ofc:$('#q1').val(), tel:$('#q2').val(),mail:$('#q3').val(),address:$('#q4').val(),obshce1:$('#obshayacffffjd').text()};
    console.log(result);
          $.ajax({
        method: "POST",
        url: '/sendemail02',
        cache: false,
        data:result,
        statusCode: {
            418: function() {
                console.log("fail")
            }
        },
        success: function(datas) {
            console.log("Normalin")
        }
    })

})

function atrue(){
    if($('.cartopened').height()>300){
        $('.cartopened').addClass("hellowadaptive")
    }
}
function removeatrue(){
     if($('.redlinecartone').height()<300){
        $('.cartopened').removeClass("hellowadaptive")
    }
}