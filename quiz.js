
let c = 0

function check() {
    
   
    let q1=document.quiz_choices.question1.value;
    let q2=document.quiz_choices.question2.value;
    let q3=document.quiz_choices.question3.value;
    let q4=document.quiz_choices.question4.value;
    let q5=document.quiz_choices.question5.value;
    let q6=document.quiz_choices.question6.value;
    let q7=document.quiz_choices.question7.value;
    let q8=document.quiz_choices.question8.value;
    if (q1==="choice1"){c++}
    if (q2==="choice2"){c++}
    if (q3==="choice3"){c++}
    if (q4==="choice1"){c++}
    if (q5==="choice1"){c++}
    if (q6==="choice1"){c++}
    if (q7==="choice1"){c++}
    if (q8==="choice1"){c++}

let percentage = ((c/8) * 100)
    console.log(percentage, c, q1, q2, q3, "test");
   
   
     let quizContainer = document.querySelector(".quiz_container")
     let quizContainerIntro = document.querySelector(".quiz_intro")

    if (c >= 4) {
    
    quizContainer.style.visibility = "hidden";
    quizContainer.style.height = "0px";

    
    quizContainerIntro.style.visibility = "hidden";
    quizContainerIntro.style.height = "0px";

    let passContainer = document.querySelector("#pass");
    passContainer.style.visibility = "visible";
    passContainer.style.height = "80vh";

    let percentageSpan = document.querySelector("#percentage")
    percentageSpan.innerHTML = `${percentage}`

   
    
    } else {
            
        quizContainer.style.visibility = "hidden";
        quizContainer.style.height = "0px";

         
        quizContainerIntro.style.visibility = "hidden";
        quizContainerIntro.style.height = "0px";

        let failContainer = document.querySelector("#fail");
        failContainer.style.visibility = "visible";
        failContainer.style.height = "80vh";

        let percentageSpan2 = document.querySelector("#percentage2")
        percentageSpan2.innerHTML = `${percentage}`
          
        }
    }


