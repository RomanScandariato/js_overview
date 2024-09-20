const userData = {
    name: 'JD',
    age: 44,
    phone: '777-777-7777',
    adress: '555 coding str',
    height: '6 4',
    info: {
        location: 'Atlanta area',
        hobbies: ['pickleball', 'fishing']
    },
    printAge: function() {
        console.log(this.age);
    },
    haveBirthday: function() {
        this.age++;
        console.log('Happy Birthday!');
    },
    addHobby: function(hobby) {

        this.info.hobbies.push(hobby);
    },
    printHobbies: function() {
        console.log(this.info.hobbies);
        

        for (let i = 0; i < this.info.hobbies.length; i++) {
            console.log(this.info.hobbies[i]);
        }

        for (let hobby of this.info.hobbies ) {
            console.log(hobby);
        }
    }
};

userData.addHobby('hiking');
userData.addHobby('coding');
userData.addHobby('golf');
userData.addHobby('bingo');

userData.printHobbies();
