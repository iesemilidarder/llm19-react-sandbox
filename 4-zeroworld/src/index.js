import $ from "jquery";

function printLine(id, username, password) {
    return `
    <tr>
        <td>${id}</td>
        <td>${username}</td>
        <td>${password}</td>        
    </tr>
    `;
}

$(document).ready(function () {
    //bindings
    $("#myBtn").click(function () {
        const numItems = $("#range").val();
        let textHtml = "";
        for (let i = 0; i < numItems; i++) {
            //var textHtml = "";
            textHtml += printLine(i
                , $("#username").val() + i
                , $("#password").val() + i);
        }
        $("#myBody").html(textHtml);
    });
});
