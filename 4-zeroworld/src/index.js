import $ from "jquery";
//import {"bootstrap.min.css"} from "bootstrap";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function printLine(username, password, id) {
    return `
    <tr>
        <td>${username}</td>
        <td>${password}</td>
        <td>${id}</td>
    </tr>
    `;
}

$(document).ready(function () {
    //bindings
    $("#myBtn").click(function () {
        const numItems = $("#range").val();
        let textHtml = "";
        for (let i = 0; i < numItems; i++) {
            textHtml += printLine("pepito" + i, "palotes" + i, i);
        }
        $("#myBody").html(textHtml);
    });
});
