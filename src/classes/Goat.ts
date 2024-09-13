import Animal from "./Animal";

class Goat extends Animal{
    noOfEyes: Number=2
    noOfTails: Number=2
    
    constructor(){
      super();
    }
    animalBehaviour(): void {
        console.log("Eat and Sleep");
    }
}export default Goat