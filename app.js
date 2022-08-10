
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


let Ghazi =new Employee("Ghazi Samer","Administration","Senior","./img/1.jpg");

let Lana =new Employee("Lana Ali","Finance","Senior","./img/2.jpg");


let Tamara =new Employee("Tamara Ayoub","Marketing","Senior","./img/3.jpg");

let Omar =new Employee("Omar Zaid","Development","Senior","./img/5.jpg");

let Safi =new Employee("Safi Walid","Administration","Mid-Senior","./img/4.jpg");

let Hadi =new Employee("Hadi Ahmad","Finance","Mid-Senior","./img/8.jpg");

let Rana =new Employee("Rana Saleh","Development","Junior","./img/6.jpg");
/*
console.log(document);
console.dir(document);*/



document.getElementsByClassName("container");



    const card = document.getElementsByClassName("card");
    for (let i = 0; i <allEmployee.length; i++) {
        const imgEl = document.createElement("img");
        imgEl.src =allEmployee[i].image;
        imgEl.alt = allEmployee[i].full_Name;
        card[i].appendChild(imgEl);
         
    
    }
         
         
    
           const heEl = document.getElementsByTagName("h2");
           for (let i = 0; i <allEmployee.length; i++) {
            
            heEl[i].textContent = allEmployee[i].full_Name;

    
               }
               const pEl = document.getElementsByTagName("p");
               for (let i = 0; i <allEmployee.length; i++) {
                
                pEl[i].textContent =  allEmployee[i].salary;
    
                   }
               
     




