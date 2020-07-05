/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pet= [
  
  { name:"berry", type:"dog", breed: "aussie", age: "1", photo: 'img/aussie.jpg'},
  { name:"pearl", type:"dog", breed: "dashund", age: "2", photo: 'img/dachshund.jpg' },
  { name:"hash", type:"dog", breed: "golden", age: "1", photo: 'img/golden' },
  { name:"puggy", type:"cat", breed: "persian", age: "3", photo: 'img/persian' },
  { name:"berry", type:"dog", breed: "aussie", age: "1", photo: 'img/pug'}];
let html= '';
for( let i =0 ;i < pet.length ; i++ ) {
 
 html+= `<h2>${pet[i]['name']}</h2>
         <h3>${ pet[i]['type']}|${ pet[i]['breed']}</h3>
         <p>Age:${ pet[i]['age']} </p>
         <img src="${ pet[i]['photo']}" alt"${ pet[i]['breed']}" >`; 
}
document.querySelector('main').innerHTML = html; 