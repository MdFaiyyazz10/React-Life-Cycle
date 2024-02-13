
//  # OOPS (Object Oriented Programming)


// # Constructor
// 1 -> Constructor is a special function
// 2 -> isko hum ek hi baar call kar sakte hai this is non callable function 
//  3 -> constructor object banne ke baad call hota hai
//  4 -> It cannot Create Object
//  5 -> 


// class MyCar {
//     getSpeed(){
//         return "230 km/hr"
//     }
// }

// const ferrari = new MyCar()

// console.log(ferrari.getSpeed())


// class Car{
//     getspeed(){
//         return "230km/hr"
//     }
// }

// const obj = new Car()
// console.log(obj.getspeed());


// class Car{
//     constructor(speed){
//         this.velocity = speed;

//     }

// getspeed(){
//     return this.velocity;
// }
// }
// const car1 = new Car(240);
// const car2 = new Car(340);
// console.log(car1.getspeed());
// console.log(car2.getspeed());

// class Car {
//     constructor (speed){
//         this.velocity = speed
//     }

//     getSpeed(){
//         return this.velocity
//     }
// }

// const BMW = new Car(240)
// const Toyota = new Car(350)

// console.log(BMW.getSpeed())
// console.log(Toyota.getSpeed())



// class Calculator{
//     constructor (a , b){
//         this.num1 = a;
//         this.num2 = b;
//     }

//     addtion(){
//         return this.num1 + this.num2;
//     }
//     subtraction(){
//         return this.num1 - this.num2;
//     }
//     multiplication(){
//         return this.num1 * this.num2;
//     }
//     division(){
//         return this.num1 / this.num2;
//     }
// }

// var add = new Calculator(8,12);

// console.log(add.addtion());
// console.log(add.subtraction());
// console.log(add.multiplication());
// console.log(add.division());


//  # INHERITENCE 

// class MyClass {
//     adddtion(a,b){
//         return a + b;
//     }
// }

// class Child extends MyClass {

// }

// const obj1 = new MyClass();
// const obj2 = new Child();

// console.log(obj1.adddtion(4,5));
// console.log(obj2.adddtion(4,5));