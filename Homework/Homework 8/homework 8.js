// Task 01
// Create an Employee class. Employee should have: id, firstName, lastName, position, salary, workingHours.
// It should have setters and getters for appropriate fields.
// It should have a method: getFullName().
// It should have a method: getAnnularSalary() which should be the total salary of the employee within a year.
// It should have a method: raiseSalary(percent), which increases the salary by the given percent and returns new salary.

class Employee {
    constructor( id, firstName, lastName, position, salary, workingHours) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._position = position;
        this._salary = salary;
        this._workingHours = workingHours;
    }
    set id (value){
        this._id= value;
    }
    get id() {
        return this._id;
    }
    set firstName (value){
        this._firstName= value;
    }
    get firstName() {
        return this._firstName;
    }

    set lastName (value) {
        this._lastName = value;
    }

    get lastName () {
        return this._lastName;
    }
    set position (value) {
        this._position = value;
    }

    get position () {
        return this._position;
    }

    set salary (value) {
        this._salary = value;
    }

    get salary () {
        return this._salary;
    }
    set workingHours (value) {
        this._workingHours = value;
    }

    get workingHours () {
        return this._workingHours;
    }

    getFullName () {
        return `${this._firstName} ${this._lastName}`
    }
    getAnnularSalary(){
        return this._salary * 12;
    }

    getRaiseSalary(percent) {
        return this._salary + this._salary * percent / 100;
    }


}

employee1 = new Employee(7,'Davit', 'Abovyan', 'Web Designer', 200, 8);
console.log(employee1.firstName);
console.log(employee1.getFullName());
console.log(employee1.getAnnularSalary());
console.log(employee1.id);





// TASK 02
// Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = 0;
    }
    set name  (value) {
        this._name = value;
    }

    set balance (value) {
        this._balance += value;
    }
    get id () {
        return this._id;
    }
    get id () {
        return this._name;
    }

    get balance () {
        return this._balance
    }

    credit (amount) {
        this._balance += amount;
        return this._balance;

    }
    debit(amount) {
        if(amount < this._balance) {
            this._balance = this._balance - amount;
            return this._balance;
        } return alert('Amount exceeded balance.')
    }
    transferTo(anotherAccount, amount) {
    if(amount < this._balance) {
        this._balance - amount;
        amount += anotherAccount;
        return this._balance
    } return alert('Amount exceeded balance.')


    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance) {
            return alert('they are the same')
        } return alert('they are several')


    }

    toString () {
        return this._name;

    }

}

account1 = new Account();

console.log(account1)

// TASK 03
// Write classes: Person, Student.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
//
// Student is inherited from Person. It should have program(array of { programName, grade }), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(programName, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.

class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;

    }

    set (value) {
        this._firstName = value;
    }

    get () {
        return this._firstName;
    }
    toString (){
        return `${this._gender ==="male" ? "His" : "Her"} name is ${this._firstName}`;
    }
}

class Student extends Person {
    constructor(programName, grade) {
        super();
        this._programName = programName;
        this._grade = grade;
    }
    passExam(programName, grade) {

    }

    toString(){
        return this._programName;

    }

}
console.log(new Student());

