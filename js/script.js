/* Author:
Joseph Chiocchi
*/
//
//
$("#emailme").slideUp();
$("#emailme").hide();

$("#name").click(function(){
    //$("#emailme").show();
    $("#emailme").slideDown();
});

$(".closeme").click(function(){
    $("#emailme").slideUp();
});

setInterval(function(){

    $(".rndcolor").css(
    {
        color: "rgba(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ", 1.0)"
    });
}, 100);
    
//$('.button1[title]').tooltip(
//        {effect: 'fade', opacity: '0.8'});
//$('.button2[title]').tooltip(
//        {effect: 'fade', opacity: '0.8'});
//$('.button3[title]').tooltip(
//        {effect: 'fade', opacity: '0.8'});
//$('.button4[title]').tooltip(
//        {effect: 'fade', opacity: '0.8'});
//$('.button5[title]').tooltip(
//        {effect: 'fade', opacity: '0.8'});
