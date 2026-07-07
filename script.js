// =================================
// THE SECOND ARK
// ARG BEHAVIOR SCRIPT
// =================================



// -------------------------------
// ENTER BUTTON
// -------------------------------


function scrollToSelection(){

    document
    .getElementById("selection")
    .scrollIntoView({
        behavior:"smooth"
    });

}







// -------------------------------
// SELECTION
// -------------------------------


let currentQuestion = 0;


const questions = [

"Did you really want to know the truth?",

"If humanity could be changed, would you allow it?",

"Is ignorance mercy?"

];



function startTest(){

    currentQuestion = 0;

    showQuestion();

}





function showQuestion(){


let area =
document.getElementById("test-area");



if(currentQuestion >= questions.length){


area.innerHTML = `


<p class="question">
RESULT
</p>


<p>
Your answers have been recorded.
</p>


<p>
Compatibility:
<br>
<span class="quote">
⨥⨥⨥
</span>
</p>


<p>
You may proceed.
</p>


`;

return;


}



area.innerHTML = `


<p class="question">

${questions[currentQuestion]}

</p>


<button class="button"
onclick="answerQuestion()">

YES

</button>


<button class="button"
onclick="answerQuestion()">

NO

</button>


`;

}



function answerQuestion(){

currentQuestion++;

showQuestion();

}










// -------------------------------
// SHEPHERD
// -------------------------------


function showTestimony(){


let text =
document.getElementById("testimony");



let message = `

I entered searching for answers.

⨥⨥⨥

The place did not show me the future.

⨥⨥⨥

It showed me everything that already existed.

⨥⨥⨥

I understood why humans were protected from truth.

⨥⨥⨥

Because some knowledge cannot be carried.

`;



text.innerHTML="";


let i=0;



function write(){


if(i < message.length){


text.innerHTML += message[i];


i++;


setTimeout(write,45);


}


}



write();


}









// -------------------------------
// FINAL
// -------------------------------



function enterArk(){


document.body.style.transition="2s";

document.body.style.opacity="0";



setTimeout(()=>{


document.body.innerHTML=`


<div style="

height:100vh;

background:black;

color:#777;

display:flex;

align-items:center;

justify-content:center;

text-align:center;

font-family:Courier New;

font-size:25px;

padding:30px;

">


<p>

ACCESS GRANTED

<br><br>

...

<br><br>

WELCOME BACK.

</p>


</div>


`;



document.body.style.opacity="1";


},2000);


}









// =================================
// ARG EFFECTS
// =================================



// after some time site reacts



setTimeout(()=>{


let messages=[


"Someone was here before you.",


"The Shepherd is still waiting.",


"Do not answer quickly.",


"Truth requires sacrifice."



];


let random =

messages[
Math.floor(
Math.random()*messages.length
)
];



console.log(random);



},20000);









// title glitch



setTimeout(()=>{


document.title =
"SECOND ARK // ACCESS";


},30000);









// secret clicks


let clicks=0;



document.addEventListener(
"click",
()=>{


clicks++;



if(clicks===13){


console.log(

"13 attempts detected."

);


}



if(clicks===27){


console.log(

"He knows your questions."

);


}



});








// mouse leaving page



document.addEventListener(
"mouseleave",
()=>{


console.log(

"Leaving already?"

);


});
