$("body").delegate("input[type = 'submit']","click", function (e) {
    
});

$("input[type = 'submit']").click(function (e) { 
    let tempalteEmail = /\w{1,}@\w{1,}\.\w{1,}/i;
    let tempalteInput = /.{1,}/i;
    let tempaltePass = /.{8,}/i;

    if (!tempalteInput.test($("input[name = 'first-name']").val())){
        // $("input[name = 'first-name']").css("border-bottom","1px solid red");
        alert("verify first name");
        e.preventDefault()
    }
    else if (!tempalteInput.test($("input[name = 'last-name']").val())){
        // $("input[name = 'last-name']").css("border-bottom","1px solid red");
        alert("verify last name");
        e.preventDefault()
    }
    else if (!tempalteEmail.test($("#text-input").val())) {
        // $("#text-input").css("border-bottom","1px solid red");
        alert("verify E-mail");
        e.preventDefault()
    }
    else if (!tempaltePass.test($("input[name='password']").val())) {
        // $("input[name='password']").css("border-bottom","1px solid red");
        alert("verify password");
        e.preventDefault()
    }
    else{
        // $("input").css("border-bottom","1px solid var(--secondary-color)");
        alert("Вы зарегистрированы");
        e.preventDefault()
    }
});