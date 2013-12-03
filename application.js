$(document).ready(function () {
    var item;
    
    var verify = function(entry) {
        if (String(entry) === "")
        {
            $('ul').append('<li class="active error">Entry must contain text</li>');
            setTimeout(function () { $(".error").fadeOut(); }, 1000);
            return false;
        }
        else if (String(entry).length > 20)
            return String(entry).substring(0,20);
        else if (String(entry).match(/^[\s+]$/))
            return false;
        else
            return String(entry).trim();
    }

    $('ul').on('click', '.delete', function(){
        $(this).parent().fadeOut();
    });

    $('ul').on('click', '.check', function(){
        $(this).parent().toggleClass('inactive');
    });

    $('#input').keydown(function(event){
        if (event.keyCode == 13){
            event.preventDefault();
            //$('form').submit();
            item = verify($('#input').val());
            if (item) 
                 $('ul').append('<li class="active">'+ item +'<div class="delete"><span class = "icon">x</span></div><div class = "check"><span class = "icon">v/</span></div></li>');
            $('#input').val("");
        };
    });

//    $('form').submit(function(e){
//        e.preventDefault();
//    });
});


