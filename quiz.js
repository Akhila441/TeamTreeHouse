/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let struct = "HTML";
let disp = "css" ;
let interactivity = "javascript";
let multiline= "/*";
let comment = "//";

// 2. Store the rank of a player
let rank = 0;
let title;
// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let struct1 = prompt ("which is a language that uses tags to structure content on the webpage ? ");
let disp1 = prompt ("for styling the content on the webpage ? ");
let interactivity1 = prompt ("what can be used to add interactivity to a web page? ");
let multiline1 = prompt ("multiline comments in JS begins with? ");
let comment1= prompt ("inline comments in JS begins with?");


if(struct.toUpperCase() === struct1.toUpperCase() )
{
  rank+= 1;
}
if(disp.toUpperCase() === disp1.toUpperCase() )
{
  rank+= 1;
}

if(interactivity.toUpperCase() === interactivity1.toUpperCase() )
{
  rank+= 1;
}
if(multiline === multiline1 )
{
  rank+= 1;
}
if(comment === comment1 )
{
  rank+= 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if(rank == 5)
{
  title = "Gold"; 
}
else if (rank >= 3 && rank <= 4)
{
  title = "Silver";
}
else if (rank >= 1 && rank <= 2)
{
  title = "Bronze" ;
}
else{
  title = "No Crown" ;
  
}

// 6. Output results to the <main> element

const shout = `<h2> you scored ${rank} points and the title you won is ${title} </h2>`;
document.querySelector('main').innerHTML = shout;
