$(document).ready(function(){

    var top = $('.open');

    $('.open').click(function(){
        $(top).css('display', 'none');
    });
    $('.btn').click(function(){
        $(top).css('display', 'block');
    });


});


/*header */
function openNav(){
    var x = document.getElementById('myBar');

          x.style.height="30%";
          x.style.width="100%";
}

function closeNav(){
    var x = document.getElementById('myBar');

          x.style.height="0";
        //   x.style.width="0";
} 
