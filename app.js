


 function add(){
 let number1 = new Number(document.getElementById("number01").value);
 let number2 = new Number(document.getElementById("number02").value);
 let lblOutput = document.getElementById("output");

 let lblOutput1 = document.getElementById("output1");
 lblOutput1.innerText=document.getElementById("number01").value +"+"+document.getElementById("number02").value;

lblOutput.innerHTML=(number1+number2);

}
 function sub(){
     let number1 = new Number(document.getElementById("number01").value);
     let number2 = new Number(document.getElementById("number02").value);
     let lblOutput = document.getElementById("output");
    
     let lblOutput1 = document.getElementById("output1");
     lblOutput1.innerText=document.getElementById("number01").value +"-"+document.getElementById("number02").value;

     lblOutput.innerHTML=(number1-number2);
    
     }
 function mul(){
         let number1 = new Number(document.getElementById("number01").value);
         let number2 = new Number(document.getElementById("number02").value);
         let lblOutput = document.getElementById("output");
        
         let lblOutput1 = document.getElementById("output1");
         lblOutput1.innerText=document.getElementById("number01").value +"*"+document.getElementById("number02").value;
         
         lblOutput.innerHTML=(number1*number2);
        
         }
 function dvd(){
            let number1 = new Number(document.getElementById("number01").value);
            let number2 = new Number(document.getElementById("number02").value);
            let lblOutput = document.getElementById("output");
            
            let lblOutput1 = document.getElementById("output1");
            lblOutput1.innerText=document.getElementById("number01").value +"/"+document.getElementById("number02").value;

           lblOutput.innerHTML=(number1/number2);
            
        }

// function sample(){
//     console.log("hello");
// }
// let sample = function(){
//     console.log("hello");
// }
// let sample = ()=>{
//     console.log("hello");
// }
// let sample = ()=>console.log("hello");


// let numbers =[12,50,67,85,11,25,56,33,98];
// console.log(numbers.sort());
// console.log(numbers.push(255));
// console.log(numbers.length());
// console.log(numbers.pop());
// console.log(numbers.shift());
// console.log(numbers.toString());

// const customers =[
//     {
//         name:"saman",
//         age:12,
//         address:"gampaha"
//     },

//     {
//         name:"nimal",
//         age:15,
//         address:"gampola"
//     },

//     {
//         name:"sunil",
//         age:12,
//         address:"panadura"
//     },

//     {
//         name:"nimesha",
//         age:12,
//         address:"anuradapura"
//     },

//     {
//         name:"shehan",
//         age:12,
//         address:"kandy"
//     },

//     {
//         name:"shika",
//         age:12,
//         address:"trinco"
//     },
// ]

// function addCustomer(){

//     let name = document.getElementById("txtName").value;
//     let age = document.getElementById("txtAge").value;
//     let address = document.getElementById("txtAddress").value;

//     customers.push({
//         name,
//         age, 
//         address
//     })


//     console.log(customers);
//     showAllCustomers();
// }

// function showAllCustomers(){
//     let tblCustomers = document.getElementById("tblCustomers");

//     let tableBody = ` <tr>
//                       <th>Name</th>
//                       <th>Age</th>
//                       <th>Address</th>
//                       </tr>` ; 

//     customers.forEach(data =>{
//         tableBody += `<tr>
//                         <td>${data.name}</td>
//                         <td>${data.age}</td>
//                         <td>${data.address}</td>
//                       </tr>`
//         console.log(data);
//     })
     
//     tblCustomers.innerHtml=tblCustomers;

//     console.log(tableBody);
// }