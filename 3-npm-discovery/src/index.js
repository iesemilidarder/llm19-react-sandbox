import $ from "jquery";
/*
function printCard(name, salary) {
    //employee_salary
    return ("<div class='col-sm-3'>" + name + ":" + salary + "</div>");
}
function getEmployees(){
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
}*/
function show(container){
  console.log("yuhu");
  $(container).toggleClass("invisible");
}
$(document).ready(function () {
    console.log("yuu");
    //window.mainContent = $("#myContent").html();
    $("#btn1").click(function (e) {
        show("#section1");
         e.preventDefault();
    });
    $("#btn2").click(function (e) {
        show("#section2");
         e.preventDefault();
    });
    $("#btn3").click(function (e) {        
        show("#section3");
         e.preventDefault();
    });
});
