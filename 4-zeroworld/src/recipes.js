const isJqueryEnabled = window.jQuery;

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

/**
 * how can I write html in an dom element?
 * @param element the dom element (with same than getElementById)
 * @param content (the html content)
 */
function writeElement(element = window.document.body, content = "") {
    if (isJqueryEnabled) {
        $(element).html(content);
    } else {
        element.innerHTML = content;
    }
}

/**
 *
 * @param url
 * @param whatToDoWichElement
 */
function getData(url = "http://dummy.restapiexample.com/api/v1/employees", whatToDoWichElement) {
    try {
        fetch(url)
            .then(data => data.json())
            .then(response => {
                //check the url response. it has data values
                response.data.map(item => {
                    whatToDoWichElement(item);
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
function printTemplate(name,age,salary) {
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
    getData(function (i) {
        console.log(i);
        printTemplate(i.employee_name,);
    })
}
