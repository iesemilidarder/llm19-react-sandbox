function shakeMe() {
    alert("shake me baby!");
}

function setText(elem, headerText) {
    document.getElementById(elem).innerText = headerText;
}

function createList(id, numItems) {
    let txt = "";
    for (let i = 0; i < numItems; i++) {
        txt += "elem " + i + "-";
    }
    setText(id, txt);
}