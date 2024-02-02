let span1=document.createElement('span')
span1.innerText='Happy'
span1.style.color='cyan'

let span2=document.createElement('span')
span2.innerText=' BirthDay'
span2.style.color='blue'
let h1=document.createElement('h1')
h1.appendChild(span1)
h1.appendChild(span2)

let div=document.createElement('div')
div.appendChild(h1)
console.log(div);

document.body.appendChild(div)