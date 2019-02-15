const Person = function(fullName) {
    const name = fullName.split(" ");

    this.getFirstName = () => name[0];

    this.getLastName = () => name[1];
    
    this.getFullName = () => name.join(" ");
    
    this.setFirstName = chooseName => {
        name[0] = chooseName;
    };

    this.setLastName = chooseName => {
        name[1] = chooseName;
    }

    this.setFUllName = chooseName => {
        name = chooseName.split(" ");
    }
}