function printThis() {
    console.log(this.address);
}

const office = {
    address: 'C. Pamplona 96',
    color: 'gray',
    
};

const school = {
    address: '120 SW 8th St',
    color: 'white',
};

printThis(); // --> Window

printThis.call(office)
printThis.apply(school)

