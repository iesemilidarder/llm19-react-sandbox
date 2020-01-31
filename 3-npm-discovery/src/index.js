import $ from "jquery";
//import 'bootstrap/dist/css/bootstrap.min.css';

/*
Traditional js, basic, no lib!
 *//*
console.log("yuhu");
let aux = document.createElement("div");
aux.innerHTML = "killing students!";
document.getElementById("main").appendChild(aux);*/
/*
 * Jquery way: 2005-2015
 *  $( document ).ready(function() {
          // Handler for .ready() called.
    });
 */
console.log("yuhu");
fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(data => data.json())
    .then(elem => {
        console.log(elem);
        elem.data.map(item => {
            $("#main").append("<div>" + item.employee_name + "</div>");
        });
    });

