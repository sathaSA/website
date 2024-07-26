$(document).ready(function(){
$('#testbutton').click(function()
 { 
   // (alert('hello guys'))
   $('.box').fadeToggle(1000);
})
$('.box').mouseenter(function(){
    $(this).css({"background-color": "red"});
})

$('.box').mouseleave(function(){
    $(this).css({"background-color": "aqua"});
})

$('input').blur(function()
{
   var userinput=$(this).val();

   if(userinput.length <4){
    $('.error').show()
   }
}) 


});