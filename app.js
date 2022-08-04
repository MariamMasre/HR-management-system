
var x = 999;
function Employee_ID(){
    return x++;
}

function salary(max,min){
   
     let a = Math.floor(Math.random() * (max - min + 1)) + min;
    var s = a- (7.5*a/100) 
    return s;
}
const allEmployee = [];
function Employee(full_Name ,department ,level,salary){
   this.employee_ID = Employee_ID();
   this.full_Name = full_Name;
   this.department = department;
   this.level = level;
   this.salary=salary;


     allEmployee.push(this);
}


const Ghazi =new Employee("Ghazi Samer","Administration","Senior",salary(2000,1500));

const Lana =new Employee("Lana Ali","Finance","Senior",salary(2000,1500));

const Tamara =new Employee("Tamara Ayoub","Marketing","Senior",salary(2000,1500));

const Safi =new Employee("Safi Walid","Administration","Mid-Senior",salary(1500,1000));

const Omar =new Employee("Omar Zaid","Development","Senior",salary(2000,1500));

const Rana =new Employee("Rana Saleh","Development","Junior",salary(1000,500));

const Hadi =new Employee("Hadi Ahmad","Finance","Mid-Senior",salary(1500,1000));



console.log(allEmployee);
console.log(document);
console.dir(document);

document.write('<hl>Employee</hl>');
Employee.prototype.printEmp = function(){
document.write(`<p> full Name: ${this.full_Name}  </p>`);
document.write(`<p>department:  ${this.department} </p>`);
document.write(`<p>salary: ${this.salary}</p>`);

}
Ghazi.printEmp();
Lana.printEmp();
Tamara.printEmp();
Safi.printEmp();
Omar.printEmp();
Rana.printEmp();
Hadi.printEmp();



/*

console.log ("Employee name: " +employee1.Full_Name);
console.log ("Employee salary: "+employee1.Salary );
console.log ("");

console.log ("Employee name: " +employee2.Full_Name);
console.log ("Employee salary: "+employee2.Salary );
console.log ("");

console.log ("Employee name: " +employee3.Full_Name);
console.log ("Employee salary: "+employee3.Salary );
console.log ("");

console.log ("Employee name: " +employee4.Full_Name);
console.log ("Employee salary: "+employee4.Salary );
console.log ("");

console.log ("Employee name: " +employee5.Full_Name);
console.log ("Employee salary: "+employee5.Salary );
console.log ("");

console.log ("Employee name: " +employee6.Full_Name);
console.log ("Employee salary: "+employee6.Salary );
console.log ("");

console.log ("Employee name: " +employee7.Full_Name);
console.log ("Employee salary: "+employee7.Salary);
console.log ("");*/ 