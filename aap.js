// output from console

console.log("Hello");

// alert pop
alert('hello world');

// write function
//document.write('<h1 style="color:red;">kanchan</h1>');

// innerhtml function
document.getElementById("h1").innerHTML = '1:- Hello World';

// Variable js
var a = 10;
var b = 20;
var c = a + b;

console.log(c)

// data type
var rollnumber = 100;
var firstName = "paul";
var name = {firstName: "Mark", lastName: "smith" };
var a = 10 + "xebia"
console.log (a)

// data type
var a;
a = 100;
a = "Mark poul";

// primitive data type
typeof "Mark"
typeof 3.14
typeof true
typeof x

// compleas data type
typeof "Mark"
typeof 3.14
typeof true
typeof x

// javascript operatores

// airthmetic operators cemo
var  a = 10;
var  b = 20;
var sum = a + b;
var sub = a - b;
document.getElementById("result1").innerHTML = "Add = " +sum +"<br>" + "subtract = " + sub + "+mode"; 

// assignment operators                                                                         

var u = 10; u+=5; var v=u;
document.getElementById("result2").innerHTML= "New value of v : " + v + "<br>"
// comparison operatos
var x = 5;
document.getElementById("result4").innerHTML= "x = x is:" + (x=x)+"<br>" +  "x == 5 x is:" + (x=="5");

// logical operator
var x = 5; var t = 9;
document .getElementById("result3").innerHTML = x > 3 && t < 7 + "<br>";

// 
// javascript function simple
function message(){
    alert("hello! this is a message");
}
message();

// function arguments
function addNumber(number1, number2){
    console.log(number1+number2);
}
addNumber(20,20);

// Invoke 
 var employeeObject = {
     firstName:"Mark",
     lastName:"smith",
     fullName:function(){
         return this.firstName + this.lastName;
     }
 }
 document.getElementById("result5").innerHTML = employeeObject.fullName();

//  create a self invok function

(function(){
    var userName = "Mark";
    function display(name)
    {
        alert("hello"+name)
    }
    display(userName);
})

// Employee Details
var employee = {
    "firstName": "Mark",
    "lastName": "smith",
    "age": 25,
    "gender": "male",
    "salary": "50000"
};
document.getElementById("result6").innerHTML = employee.firstName + " " + employee.lastName +"and his age is"+ employee.age;

// / Employee Details using a new keyword
var employee = new Object() ;
    employee.firstName= "Mark";
    employee.lastName= "smith";
    employee.age= 25;
    employee.gender= "male";
    employee.salary= "50000";
    
    // document.write(employee);
    // document.write("<br><br>");
    document.getElementById("result7").innerHTML = (employee.firstName + " " +employee.lastName + "and his age is "+ employee.age);

    // javascript arrays
    // var students = ["Mark", "watson", "paul"];
    // document.write(students);

     // javascript arrays new arrays
    // var students = new Array("Mark", "watson", "paul");
    // document.writeln(students);

    // javascript array element of the array
    var fruits = ["Tomate","Banana","Apple"];
    document.getElementById("original").innerHTML = "original:" + fruits; fruits[3] = "Mango";
    document.getElementById("updated").innerHTML = "updated:" + fruits;

    // javascript array loop
    var Course,text;
    Course = ["HTML", "CSS", "javascript", "java"];
    console.log(typeof(Course))
    1
    text = "<ul>";
    Course.forEach(myfunction);
    text +="</ul>";
    document.getElementById("result8").innerHTML = text;
    function myfunction(value){
        text += "<li>" + value + "</li>";
    }

    // create javascript Array and push() and pop()
    var names = ["kevin", "jonh", "rajesh", "Akash"];
    document.getElementById("result9").innerHTML = names;
    function addName(){
        names.push("Mark");
        document.getElementById("result9").innerHTML = names;
    }
    function removeName(){
        names.pop();
        document.getElementById("result9").innerHTML = names;
    }

    // javascript arrays use shift() and unshift()
    var Courses = ["HTML", "CSS", "javascript", "java"];
    document.getElementById("result10")
    .innerHTML = "Original Course were: "
    + Courses + "<br>" + "Courses remained were: " +
    Courses.shift() + "<br>"
    + "Total number of courses after addition of some are: "
    + Courses.unshift("c", "c++") + "<br>" + "<br>" +
     "Current courses are: " + Courses;

    // create a javascript Array and use slice()
    var fruits = ["Apple", "Orange", "Mango", "Tomato", "Grapes"];
    document.getElementById("result11").innerHTML = "Original Array:<br>" + fruits;

    function myFunction() {
        var removed = fruits.splice(2,2, "Melon", "banana");
        document.getElementById("result12").innerHTML = "New Array : <br>"+fruits;
        document.getElementById("result13").innerHTML = "Removed Items:<br>" + removed;
    }

    // create javascript use concat() method
    var EngTopr = ["john", "Kevin"];
    var MathTopr = ["Akash", "Rajeev"];
    var SciTopr = ["rajesh", "Amir"];
    var allTopr = EngTopr.concat(MathTopr, SciTopr);
    document.getElementById("result14").innerHTML = "All the toppers of the class are: "+"<br>" + allTopr; 


// create javascript use sort() and reverse()
var students = ["Rajesh", "john", "kevin", "Albie", "George"];
document.getElementById("result15").innerHTML = students 


var sortstud = students.sort();
var sortstud = students.sort();
document.getElementById("result16").innerHTML = students;
var revsortstud = students.sort();
students.reverse()
document.getElementById("result17").innerHTML = revsortstud;

// create javascript array and use map()
var Intg1 = [1,2,3,4,5];
document.getElementById("result18").innerHTML = "Exisiting Array:" + Intg1;
var newArr = Intg1.map(myFunction);
document.getElementById("result19").innerHTML = "The New Array:" + newArr;
function myFunction(value, index, array){
    return value * 10 ;
}

// javascript arrays use literal pillwo 

// var students = ["Mark", "Wastson", "Paul"];
// document.writeln(students);

// create s javasctept class and object

class Person{
    constructor(name){
        this.name = name;
    }
}
person = new Person("Mark");
document.getElementById("result20").innerHTML = "Person : " + person.name;

// create s javasctept class and use method parameters
class Car {
    constructor(Brand, CarName){
        this.Brand = Brand;
        this.CarName = CarName;
    }
    getElementById(name){
        return name + "have" + this.Brand + " " + this.CarName;
    }
}
let mycar1 = new Car("Chevrolet", "camora");
document.getElementById(result21).innerHTML = mycar1.getDetails("jone");

let mycar2 = new Car("Ford", "Mustang");
document.getElementById("result22").innerHTML = mycar2.getDetails("Michael");

// javascript create a class to get destance b/w two points and use static method
 class Distance {
     constructor (a,b){
         this.a = a;
         this.b = b;
     }
     static location(x, y){
         const dx = x.a - y.a;
         const dy = x.b - y.b;
         return Math.hypot(dx, dy);
     }
 }
 var p1 = new Distance(10, 12);
 var p2 = new Distance(6, 8);
 console.log("The distance is: " + Distance.location(p1, p2));