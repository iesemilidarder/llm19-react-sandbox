//deprecated...smells bad
var name = "student";
console.log("hola " + name);
//nowadays... let, const
let realName = "Pepito palotes"; //var
const hiThere = "Aloha!"; //non var
console.log(hiThere + " " + realName);
/*
Multi line comment:
Now...let's try to change a const
hiThere = "Xao"; //I can't
console.log("llego");
 */
/*
Basic (old fashion) html functions
with valid program sentences
 */
/*for (let i = 0; i < 1; i++) { //for
    alert("molesto " + i); //old html function
}
if(confirm("¿molesto?")){ //if + old confirm !!!
    alert("lo se");       //annoying
}*/
/*
Webstorm shortcodes:
fori<tab>
 */
//Var types
let number = 1;
let string = "1";
let bool = true;
let o = {"id": 123, "name": "John"};
console.log("Person: " + o.id + " - " + o.name);
// Brain wash area
/*
Function way 1
 */
function sayHi() {
    console.log("Normal function!!!!");
}

sayHi();
/*
Function way 2
 */
let sayHiTwo = function () {
    console.log("Function as a var!!!")
};
sayHiTwo();
/**
 * Function real men way
 * @type {{name: string, saySomething: myFunction.saySomething}}
 */
let myFunction = {
    name: "Pepito",
    saySomething: function (what) {
        console.log("Say:" + what);
    }
};
myFunction.saySomething(myFunction.name);