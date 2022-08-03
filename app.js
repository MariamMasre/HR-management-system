
var x = 999;
function Employee_ID(){
    return x++;
}

function salary(max,min){
   
     let a = Math.floor(Math.random() * (max - min + 1)) + min;
    var s = a- (7.5*a/100) 
    return s;
}

const employee1 ={
    Employee_ID:Employee_ID(),
    Full_Name:  "Ghazi Samer",
    Department:"Administration",
    Level:"Senior",
    Salary : salary(2000,1500),
}

const employee2 ={
    Employee_ID:Employee_ID(),
    Full_Name:  "Lana Ali",
    Department:"Finance",
    Level:"Senior",
    Salary : salary(2000,1500),
}

const employee3 ={
    Employee_ID:Employee_ID(),
    Full_Name: "Tamara Ayoub" ,
    Department:"Marketing",
    Level:"Senior",
    Salary : salary(2000,1500),
}

const employee4 ={
    Employee_ID:Employee_ID(),
    Full_Name:  "Safi Walid",
    Department:"Administration",
    Level:"Mid-Senior",
    Salary : salary(1500,1000),
}
const employee5 ={
    Employee_ID:Employee_ID(),
    Full_Name:"Omar Zaid"  ,
    Department:"Development",
    Level:"Senior",
    Salary : salary(2000,1500),
}
const employee6 ={
    Employee_ID:Employee_ID(),
    Full_Name:  "Rana Saleh",
    Department:"Development",
    Level:"Junior",
    Salary : salary(1000,500),
}

const employee7 ={
    Employee_ID:Employee_ID(),
    Full_Name:  "Hadi Ahmad",
    Department:"Finance",
    Level:"Mid-Senior",
    Salary :salary(1500,1000),
}




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
console.log ("");
