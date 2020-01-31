import $ from "jquery";

function printCard(name, salary) {
    //employee_salary
    return ("<div class='col-sm-3'>" + name + ":" + salary + "</div>");
}

$(document).ready(function () {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(data => data.json())
        .then(elem => {
            console.log(elem);
            let result = "";
            elem.data.map(item => {
                //result += printCard(item.employee_name, item.employee_salary);
                result = result + printCard(item.employee_name, item.employee_salary);
            });
            $("#main").append(result);
        });
    /*    $("button").click(function(){
            $("p").slideToggle();
        });*/
});



