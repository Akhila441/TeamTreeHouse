// 1. Create a multidimensional array to hold quiz questions and answers

const qa= [
          ['In arrays index starts with?' , '0'],
          ['What is used to style a webpage?', 'css'],
          ['how many sides are there is a heptagon?', '7'],
          ['what is used for structuring a webpage?', 'html'],
          ['what adds interactivity to a webpage?', 'js']
  
];

const cq=[];
const wq=[]; 
let q1= '';
let q2= '';
// 2. Store the number of questions answered correctly
let score=0;
let main= document.querySelector('main');

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i=0; i< qa.length ; i++){
  let q= qa[i][0];  
  let response= prompt(qa[i][0]);
  if(response.toLowerCase() === qa[i][1])
  {
    score++;
    cq.push(q);
  }
  else{
    wq.push(q);
  }
}

for(let j=0; j < cq.length ; j++) {
 
q1 += `<li>${cq[j]}</li>`;

} 

for(let k=0; k < wq.length ; k++) {

q2 += `<li>${wq[k]}</li>`;

} 
// 4. Display the number of correct answers to the user
main.innerHTML= `<h1>your score is ${score}!</h1>
                 <h2> here are the questions that you answered correct</h2>
                 <ol> ${q1}  </ol>
                 <h2> here are the questions that you answered wrong</h2>
                 <ol> ${q2}  </ol>`;

