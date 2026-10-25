var counter = 0;

function clicked() {
    counter++;
    var elem = document.createElement("p");
    elem.textContent = counter;
    if(counter>=1){
    document.body.replace(p,elem);
    }
    else{
    document.body.append(elem);
    }
}