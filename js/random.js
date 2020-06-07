/* generating a random number between 2 user entered numbers */

let n1 = prompt("enter no.1 ");
let n2 = prompt("enter no.2 ");
let rand;
let msg; 
let m1 = parseInt(n1);
let m2 = parseInt(n2);

if(m1 && m2) //validates if the entered responses are numbers
{
  
if( m1 > m2)
  
{
  rand = Math.floor(Math.random() * (m1-m2 + 1)) + m2;
  msg= `<h2> the random number between ${m2} and ${m1} is ${rand} </h2>`; 
  document.querySelector('main').innerHTML = msg; 
  
}

else
  
{
  rand = Math.floor(Math.random() * (m2-m1 + 1 )) + m1 ;
  msg= `<h2> the random number between ${m1} and ${m2} is ${rand} </h2>`; 
  document.querySelector('main').innerHTML = msg;
}
}

else {
  
  
 msg= `<h2> invalid re.. try again </h2>`; 
  document.querySelector('main').innerHTML = msg;
}

                 