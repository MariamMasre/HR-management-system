
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
function Employee(full_Name ,department ,level,image){
   this.employee_ID = Employee_ID();
   this.full_Name = full_Name;
   this.department = department;
   this.level = level;
   this.image=image;
   if(this.level=="Mid-Senior"){
    this.salary= salary(2000,1500);
     }else if(this.level=="Senior"){
       this.salary=  salary(2000,1500);
     }else if(this.level=="Junior"){
       this.salary=  salary(1000,500);
     }


     allEmployee.push(this);
}



let Ghazi =new Employee("Ghazi Samer","Administration","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wRXU4CQedaIh-xkyDQVCQDCj53qBtLotwg&usqp=CAU");

let Lana =new Employee("Lana Ali","Finance","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyhoK29O6ftEm3FgW8UuDsMp93Q-kt7g2_A&usqp=CAU");

let Tamara =new Employee("Tamara Ayoub","Marketing","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBb4Y3dyqiS4TjnxRNW4tPJp1HOalQmmGLA&usqp=CAU");

let Safi =new Employee("Safi Walid","Administration","Mid-Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5994v90BESIr3GLUqPJOLPJdzuLuBrflBlQ&usqp=CAU");

let Omar =new Employee("Omar Zaid","Development","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1vLskmLNHsXq_-K6sWZAbY6SCstnv3HSzg&usqp=CAU");

let Rana =new Employee("Rana Saleh","Development","Junior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcd_E2ZH8x7VdlwTJSMuv4bU1PmHRRT9o9ZQ&usqp=CAU");

let Hadi =new Employee("Hadi Ahmad","Finance","Mid-Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuhaOEcikpG4bvYVAudPfodo1gvnSexlURA&usqp=CAU");



/*
console.log(document);
console.dir(document);*/



document.write('<hl>Employee</hl>');
Employee.prototype.render = function(){
document.write(`<p > full Name: ${this.full_Name}  </p>`);
document.write(`<p >department:  ${this.department} </p>`);
document.write(`<p  >salary: ${this.salary}</p>`);

}
Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();
console.log(allEmployee);


