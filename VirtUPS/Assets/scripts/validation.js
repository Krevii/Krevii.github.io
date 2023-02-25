$("body").delegate("input[type = 'submit']","click", function (e) {
    
});

$("input[type = 'submit']").click(function (e) { 
    let tempalteEmail = /\w{1,}@\w{1,}\.\w{1,}/i;
    let tempalteInput = /.{1,}/i;
    let tempaltePass = /.{8,}/i;

    if (!tempalteInput.test($("input[name = 'first-name']").val())){
        verifyTextName("first name");
        e.preventDefault();
    }
    else if (!tempalteInput.test($("input[name = 'last-name']").val())){
        verifyTextName("fast name");
        e.preventDefault();
    }
    else if (!tempalteEmail.test($("#text-input").val())) {
        verifyTextName("E-mail");
        e.preventDefault();
    }
    else if (!tempaltePass.test($("input[name='password']").val())) {
        verifyTextName("password");
        e.preventDefault();
    }
    else{
        // $("input").css("border-bottom","1px solid var(--secondary-color)");
        $("#verify-lable").html("");
        alert("Вы зарегистрированы")
        e.preventDefault();
    }
});

function verifyTextName(name) {
    $("#verify-lable").addClass("verify-lable-active");
    $("#verify-lable").html(`Please verify your [${name}] and try again`);
    $("#verify-lable").on("animationend", function(){
        $("#verify-lable").removeClass("verify-lable-active");
    })
}