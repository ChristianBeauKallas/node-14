function Developer (name, tech){
    this.name = name;
    this.tech = tech;
    this.introduction = function(){
        console.log (`Hi, my name is ${this.name} and the ${this.tech} is still out on my tech of choice`)
    };
}
const Beau = new Developer('Beau', 'Verdict');
Beau.introduction();

// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
