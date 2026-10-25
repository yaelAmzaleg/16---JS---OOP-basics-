//exe1
function Phone(brand,model)
{
    this.brand=brand;
    this.model=model;
}
Phone.prototype.details=function()
{
    console.log("Phone:"+this.brand+" Model:"+this.model)
}
const f1=new Phone("galaxy","s22");
f1.details();
//exe2
function Rectangle(width,height)
{
    this.width=width;
    this.height=height;
}
Rectangle.prototype.area=function()
{
    return this.width*this.height
}
const rectangle1=new Rectangle(4,4);
console.log(rectangle1.area())
//exe3
function BankAccount(owner,balance)
{
    this.owner=owner;
    this.balance=balance;
}
BankAccount.prototype.deposit=function(amount)
{
    this.balance+=amount
}
BankAccount.prototype.withdraw=function(amount)
{
    if(this.balance>=amount)
        this.balance-=amount;
    else
        console.log("היתרה בחשבונך לא מספיקה")
}
BankAccount.prototype.checkbalance=function()
{
   console.log(this.owner+" the balance is:"+this.balance)
}
const BankAccount1=new BankAccount("yael",500);
BankAccount1.checkbalance();
BankAccount1.deposit(400);
BankAccount1.withdraw(300);
//exe4
function Animal(name)
{
    this.name=name
    this.speak=function()
    {
        console.log("the "+this.name+" makes a sound")
    }
}
function Dog(name)
{
    Animal.call(this,name)
    this.bark=function()
    {
        console.log("A barking "+this.name+" ")
    }
}
Object.setPrototypeOf(Dog.prototype,Animal.prototype)
const d1=new Dog("Rocky");
d1.speak();
//exe5
function Vehicle(type)
{
    this.type=type
    this.describe=function()
    {
        console.log("This is a "+this.type)
    }
}
function Car(brand)
{
Vehicle.call(this,"car")
this.brand=brand;
this.info=function()
{
    console.log(`this is a brand: ${this.brand} type: ${this.type}`)
}
}
Object.setPrototypeOf(Car.prototype,Vehicle.prototype)
const car1=new Car("bmw")
car1.info();
car1.describe();
//exe6
function Shape()
{
    this.area=function()
    {
        return 0;
    }
}
function Circle(radius)
{
    this.radius=radius
    this.area=function()
    {
        return this.radius*this.radius*Math.PI;
    }
}
function Square(side)
{
    this.side=side;
     this.area=function()
    {
        return this.side*this.side;
    }
}
console.log(new Square(4).area())
console.log(new Circle(3).area())
//exe7
class Book
{
constructor(tytle,author)
{
this.tytle=tytle;
this.author=author;
}
info()
{
console.log(`${this.tytle} by ${this.author}`)
}
}
const b1=new Book("The Hobbit","Tolkien")
b1.info()
//exe8
class Person
{
    constructor(name)
    {
        this.name=name;
    }
    great()
    {
        console.log(`Hello I'm ${this.name}`)
    }
}
class Student extends Person
{
constructor(name,school)
{
    super(name)
    this.school=school
}
study()
{
    console.log(`${this.name} is studing at ${this.school}`)
}
}
const s1=new Student("Alice","Oxford");
s1.study();
s1.great();
//exe9
class Employee
{
    #salary;
    constructor(salary)
    {
      this.#salary=salary;
    }
    getSalary()
    {
        return this.#salary;
    }
    work()
    {
        console.log("Employee is working")
    }
}
class Manager extends Employee
{
    constructor(salary)
    {
        super(salary);
    }
    work()
    {
console.log("Manager is managing")
    }
}
const e1=new Employee(4000);
const m1=new Manager(5000)
e1.work()
m1.work()
console.log(m1.getSalary())