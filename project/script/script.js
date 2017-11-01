// $(".on-hover").hover(function(){
//     $(this).css('visibility', 'visible')
// });

$("body").mousemove(function(event){
    if(  event.pageX < 200){
            $(".on-hover").css('opacity', '1');
            $('#vertical-menu').css('visibility','hidden');
    }
    else{
        $(".on-hover").css('opacity', '0');
        $('#vertical-menu').css('visibility','visible');

    }
    // console.log(event.pageX);
});


