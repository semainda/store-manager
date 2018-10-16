// Javascript code that redirect users to spaecific dashboad based on their roles.

var login_btn = document.getElementById("btn-login");
var user_role = document.getElementById("user-roles");

login_btn.onclick = function(){
    if(user_role[user_role.selectedIndex].value == "store-owner"){
        document.location.href="UI/owner/dashboard.html";
    }
    else if(user_role[user_role.selectedIndex].value == "store-attendant"){
        document.location.href="UI/attendant/dashboard.html";
    }
};