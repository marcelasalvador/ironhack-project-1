function check() {
    let c=0;
    let q1=document.quiz_choices.question1.value;
    let q2=document.quiz_choices.question2.value;
    let q3=document.quiz_choices.question3.value;
    let q4=document.quiz_choices.question4.value;
    let q5=document.quiz_choices.question5.value;
    let q6=document.quiz_choices.question6.value;
    let q7=document.quiz_choices.question7.value;
    let q8=document.quiz_choices.question8.value;
    if (q1==="choice1"){c++}
    if (q2==="choice1"){c++}
    if (q3==="choice1"){c++}
    if (q4==="choice1"){c++}
    if (q5==="choice1"){c++}
    if (q6==="choice1"){c++}
    if (q7==="choice1"){c++}
    if (q8==="choice1"){c++}
        
        document.write(c);
    
        
}

function checkQuestion1() {
    let q1Div = document.querySelector("#question1");
    q1Div.style.visibility = "hidden";
    q1Div.style.height = "0px";

    let q2Div = document.querySelector("#question2");
    q2Div.style.visibility = "visible";
    q2Div.style.height = "40vh";

    let counterSpan = document.querySelector("#counter span");
    counterSpan.innerHTML = "2";

}
