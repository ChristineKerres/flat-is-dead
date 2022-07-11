// image change 
//https://stackoverflow.com/questions/10439382/change-img-src-in-responsive-designs

function resizeImages() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    $("#mydiv img").each(function() {
        var oldSrc = $(this).attr('src');
        if (width >= 768) {
            var newSrc = oldSrc.replace('_normal.','_bigger.');
            var newWidth = 100;  var newHeight = 100;
        } else if ( width >= 480 ) {
            var newSrc = oldSrc.replace('_normal.','_big.');
            var newWidth = 50;  var newHeight = 50;
        }
        $(this).attr('src',newSrc);
        $(this).attr('width',newWidth);
        $(this).attr('height',newHeight);
    });
}

$(".antwort").hide();
$("#header .frage").on("click", function(){
    $(this).next().toggle();
})
.css ("cursor", "pointer");