var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
var src , preview ;

connection.on("RecieveMessage", function (fromUser, message, img) {

    var msg = fromUser + ": " + message ;

    var li = document.createElement("li");
    li.textContent = msg;

    //$("#list").prepend(img);



    $("#list").prepend(li);
    
   



});

connection.start();

$("#btnSend").on("click", function () {

    var fromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();

    
    var img = $("#imgInp").val();

    connection.invoke("SendMessage", fromUser, message, img);
    $('#txtUser').val('');
    $('#txtMessage').val('');

});

function showPreview(event) {
    const [file] = imgInp.files
    if (file) {

        src = URL.createObjectURL(file);
        preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
    }
}