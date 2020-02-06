import $ from "jquery";

function printCard(name, salary) {
    //employee_salary
    return ("<div class='col-sm-3'>" + name + ":" + salary + "</div>");
}

function getEmployees() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(data => data.json())
        .then(elem => {
            console.log(elem);
            let result = "";
            elem.data.map(item => {
                result += printCard(item.employee_name, item.employee_salary);
            });
            $("#myContent").html(result);
        });
}
$(document).ready(function () {
    window.mainContent = $("#myContent").html();
    $("#homeBtn").click(function () {
        $("#myContent").html(window.mainContent);
    });
    $("#listBtn").click(function () {
        getEmployees();
    });
});



