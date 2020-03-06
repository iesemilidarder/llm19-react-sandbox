const isJqueryEnabled = window.jQuery;
/*
 * eldelbar things
 *
 *
 */
let text = "";
text += "hola";
const g = 9.813216;
//g = 124; PUM
let a = 123;
let b = "123";
if (a == b) {
    console.log("same value");
}
if (a === b) {
    console.log("same value & type");
}

//biconditionals

/**
 *  how can i get an element?
 * @param id
 * @returns {jQuery|HTMLElement|HTMLElement}
 */
function getElementById(id = "myId") {
    if (isJqueryEnabled) {
        return $("#" + id);
    } else {
        return document.getElementById(id);
    }
}

//let myvalue = getElementById("yuhu");
//getElementById("yuhu").innerHtml = "toma castaña"
/**
 * how can I write html in an dom element?
 * @param element the dom element (with same than getElementById)
 * @param content (the html content)
 */
function writeElement(element = window.document.body, content = "") {
    if (isJqueryEnabled) {
        $(element).html(content); // let value = $(element).html()
    } else {
        element.innerHTML = content;
    }
}

/**
 *
 * @param url
 * @param whatToDoWithElement
 */
function getData(url = "http://dummy.restapiexample.com/api/v1/employees", whatToDoWithElement) {
    try {
        fetch(url)
            .then(data => {
                console.log(data);
                return data.json();
            })
            .then(response => {
                console.log(response);
                //check the url response. it has data values
                response.data.map(item => {
                    whatToDoWithElement(item);
                });
            });
    } catch (e) {
        console.error("MEK!" + e);
    }
}

/**
 *
 * @param name
 * @param age
 * @param salary
 * @returns {string}
 */
function printTemplate(name, age, salary) {
    return `
    <div class="row">        
        <div><span style="min-width: 100px">Name:</span> ${name}</div>
        <div><span style="min-width: 100px">Age: </span>${age}</div>
        <div><span style="min-width: 100px">Salary: </span>${salary}</div>
    </div>
    `;
}

/**
 * throws previous fetch with templating!
 */
function howtoUseFetch() {
    window.content = "";
    getData(function (i) {
        console.log(i);
        window.content += printTemplate(i.employee_name, i.employee_age, i.employee_salary);
    });
    console.log(window.content);
}

//https://medium.com/webpack/webpack-bits-learn-and-debug-webpack-with-chrome-dev-tools-da1c5b19554
export {howtoUseFetch}