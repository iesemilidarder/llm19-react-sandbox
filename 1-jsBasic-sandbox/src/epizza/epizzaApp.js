function epizzaApp() {
    fetch("./data/epizza-ingredients.json").then(data => data.json()).then(data => {
        renderMenu(data);
    });
}
function printGroup(group, label) {
    let rtn = "";
    if (group) {
        rtn += "<h4>" + label + "</h4>";
        group.map(item => {
            rtn += `<div><input type="checkbox">${item.label} ${item.price}</div>`;
        });
    }
    return rtn;
}
function renderMenu(ingredients) {
    let insideContent = "";
    if (ingredients !== null && ingredients.base) {
        insideContent += printGroup(ingredients.base, "Base");
    }
    if (ingredients !== null && ingredients.sizing) {
        insideContent += printGroup(ingredients.sizing, "Size");
    }
    if (ingredients !== null && ingredients.topping) {
        insideContent += printGroup(ingredients.topping, "Topping");
    }
    const container = document.getElementById("menuBox");
    container.innerHTML = insideContent;
}

function renderPizza(selection) {

}