

$(document).ready(function(){

    $('.show').on('click', function(){
        // alert("asffaafs")
       
       console.log($(".password").attr('type'));
       if($(".password").attr('type')==='password')
         {
            $(".password").attr('type','text');
       }else{
        $(".password").attr('type','password');
       }
   })


   $('.email').focus(function(){
    // alert("a")
    $('.emailLabel').css('color',"#F33232")
   })

   $('.email').blur(function(){
    // alert("a")
    $('.emailLabel').css('color',"black")
   })

   $('.password').focus(function(){
    // alert("a")
    $('.passwordLabel').css('color',"#F33232")
   })

   $('.password').blur(function(){
    // alert("a")
    $('.passwordLabel').css('color',"black")
   })

  })


  $('#loginIcon').click(function(){
    // alert($('#loginForm').attr("class"))

    if($('#loginForm').attr("class")==="d-none"){
        $('#loginForm').attr("class","d-block")
        $('.bodycover').css("height","100%")
        $('.bodycover').css("width","100%")
    
    }
  })

  $('.fa-xmark').click(function(){
    // alert("asddas")
$('#loginForm').attr("class","d-none")
$('.bodycover').css("height","0%")
$('.bodycover').css("width","0%")
})

 
  const swiper = new Swiper('.swiper', {
    speed: 400,
    // spaceBetween: 100,
    // height:,
    autoHeight:true,

    effect:'fade',

    autoplay:true,
    // effect:fade,


  });


 
    