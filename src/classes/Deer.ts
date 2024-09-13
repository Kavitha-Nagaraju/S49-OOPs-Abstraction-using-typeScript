import Animal from "./Animal";

class Deer extends Animal{

    noOfEyes: Number=2
    noOfTails: Number=1
    
    constructor(){
     super();
    }
    animalBehaviour(): void {
        console.log("Eat and sleep");
    }

}export default Deer