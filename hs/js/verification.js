$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "王敏" && pwd == "0404") {
        $('#h').text("🥰");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "bc.html";
        }, 4000);
    } else {
        alert("用户名或密码不正确！");
    }
});
