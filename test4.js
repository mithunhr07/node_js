goToLog(makeRegister);
goToLog(textMe);
function makeRegister(){
    console.log("You already register");
}
function textMe(){
    console.log("You must login");
}
function goToLog(doNext){
    doNext();
}

