function adduser()
{
    User_Name = document.getElementById("User_Name").valve;
    localStorage.setItem("User_Name", User_Name);
    window.location="kwitter_room.html";
}