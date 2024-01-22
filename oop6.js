const newObject = {
    name: "Pedro",
    surName: "Montana",
    address: {
        city: "Barcelona",
        street: "Pamplona",
        number: 122,
        display(){
            console.log(this);
        }
    },

    displaySomething(){
        console.log(this); // this is refered to the object
    }


}

newObject.address.display()
/* 
function displayThis(){
    console.log(this); // we are refering to NODE 
}

displayThis(); */