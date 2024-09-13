abstract class Animal{
    constructor(){
       console.log("Inside the Animal Comnstructor ");
    }
    calculateResult=(a:number,b:number)=>{
        let add=a+b
        console.log(add);
    }
   abstract noOfEyes:Number;
   abstract noOfTails:Number;
   abstract animalBehaviour():void;
     
   
    
}export default Animal