$("input[type = 'submit']").first().attr('disabled','');

$("body").delegate("#text-input","keyup", function (e) {
    let tempalte = /\w{1,}@\w{1,}\.\w{1,}/i;
    
    $("input[type = 'submit']").first().attr('disabled','');
    
    if (!tempalte.test($("#text-input").val())) {
        $(this).css("border","1px solid red");
    }
    else{
        $(this).css("border","none");
        $("input[type = 'submit']").removeAttr('disabled');
    }
});
