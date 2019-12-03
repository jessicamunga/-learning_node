// this destructures through an array( use of square brackets)
// let carIds=[1,2,5];  
// let [car1, car2, car3]= carIds;   
// console.log(car1, car2, car3);

// While this destructures through an object( use of curly braces)
// let car={id:5000, style:'convertible'};
// let {id, style}= car;
// console.log(id, style);

// to create a class
// class Car {}

// let car=new Car();
// console.log(car);


// #adding a constructor
class Car{
    constructor(id){
        this.id=id;

    }
}

let car=new Car(123);
console.log(car.id);


// #methods
// class Car{
//     constructor(id){
//         this.id=id;
//     }

//     identify() {
//         return 'Car Id: ${this.id}';
//     }
// }
// let car=new Car(123);
// console.log(car.identify());