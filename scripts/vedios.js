
    var outputJSON;
    var topicFlag = 0;
    var sourceFlag = 0;
    var i = 0;
    var current_username;

    //get user id passed from index page from the url
    var url = window.location.href.split('?');
    var current_user_id = url[url.length - 1];

    var users = JSON.parse(localStorage.getItem("vedio_app_users"));
    for (i = 0 ; i < users.length; i++) {
        if (users[i].user_id == current_user_id) {
            current_username = users[i].userName;
            $('#current_user').text("Hi " + users[i].userName + "...!!!");
        }
    }


$('#logout_btn').on('click', function (e) {
    window.location.href = "../index.html";
    alert("Click OK to Logout");
});











