/*                                         DAY1                */



let n=20;// declarartion of variable

let value=true;                            //booloean variable
let notdefined;                           //here variable is not defined just declared because its let variable
const z=4;                                //const variable
var d=25;                                 //var variable

let a="vishwas";
a=7;                                     //dynamic typing 
console.log(a);



//here we are seeing various operators in action
 
if(undefined){
    console.log('true');
}else{
    console.log("false");
}  

 first_name='vishwas';
 last_name='parashar';
 console.log(first_name+" "+last_name);

 let avg=(25+35+44+77)/4;
 let falseAvg=25+35+44+77;         //thsis shows the precedence of operator to get proper average
 console.log(avg,falseAvg);



 /************************************************************************************************************************************/



//***************************Day 2******************************* */

//string using normal inverted comma
let first_name='vishwas';
let age=21;
//multi line string using escape sequence
let intro="helloo i am "+ first_name +"\n\
and i am "+age+" old ";

//string using template literals and backticks 
let intro2=`hello I am ${first_name} 
and i am ${age} old`; 


//if and else statement
if(true){
    console.log('truth');
}else{
    console.log('not a truth');
}
// note : declare a variable out side the conditional statement 

//type conversion and type coercion
let a=promt('enter a number');
sum=Number(a)+5;               // here we need to change the type of variable a because input given in the prompt will always be a string and the addition operation cant be performed on a string but can be used to cancatinate them

let num1='25'
let add=num1 +5;// here 5 will get converted to string implicitly
let sub=num1-5;//here 5 num1 will get converted to Number implicitly

 

//comparision between == and ===
// equals
let abc='25';
if(abc==25){
    console.log(true);
}else{
    console.log(false)
}                            //here op is true

 if(abc===25){
    console.log(true);
}else{
    console.log(false)
}                            //here op is false


 if(abc!==25){
    console.log(true);
}else{
    console.log(false)
}                           //here op is true


 if(abc!=25){
    console.log(true);
}else{
    console.log(false)
}                          //here op is false

//***************************Day 3********************************/
'use  strict';                                                //activates strict mode 

// switch statement 

let marks=90;
switch (true) {
    case(marks>80) :
          console.log("A")
          break;
    case(marks>50&&marks<80):
            console.log('B')
           break;
     default:
         console.log('fail');
};

//ternary operator this can be used inside template literals
let cost=200;
let tip=cost>50 &&cost<300?15/100*cost:20/100*cost;
 console.log(tip);

//experimented
 let cost =1000;
if(50<cost<300){            //this results in true because value of true will be one

    console.log('15%');

}else{
console.log('20%')
}


//***************************Day 4********************************/
// functions:

function cook(item1,item2){                   //using function declaration
    let cooked=`${item1},${item2} is ready`;
    return(cooked);                           //return keyword returning value 

};

const waiteress=function(order_1,order_2){    //using function expression
    let deliver= `${order_1} and ${order_2} is ready`;
    console.log(deliver);

};
customers();                                  //invoking function
const  customers=()=>{                        //using arrow function
     let order_1=prompt("enter your starter");
     let order_2=prompt("enter your your main course");
     waiteress(order_1,order_2);
 };
s

