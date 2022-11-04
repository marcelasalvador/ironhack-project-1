// let next = document.querySelector("#next")
// next.addEventListener('click', function (event) {
//     event.preventDefault()
//     let q1Div = document.querySelector("#question1-1");
//     q1Div.style.visibility = "hidden";
//     q1Div.style.height = "0px";

//     let q2Div = document.querySelector("#question2-2");
//     q2Div.style.visibility = "visible";
//     q2Div.style.height = "40vh";

//     let counterSpan = document.querySelector("#counter span");
//     counterSpan.innerHTML = "2";
// })


// function checkQuestion2() {
// // let next2 = document.querySelector("#next")
// // next.addEventListener('click', function (event) {
// //     event.preventDefault()
//     let q2Div = document.querySelector("#question2-2");
//     q2Div.style.visibility = "hidden";
//     q2Div.style.height = "0px";

//     let q3Div = document.querySelector("#question3-3");
//     q3Div.style.visibility = "visible";
//     q3Div.style.height = "40vh";

//     let counterSpan = document.querySelector("#counter span");
//     counterSpan.innerHTML = "3";
// }


// let previous = document.querySelector("#previous")
// next.addEventListener('click', function (event) {
//     event.preventDefault()
//     let q1Div = document.querySelector("#question2-2");
//     q1Div.style.visibility = "hidden";
//     q1Div.style.height = "0px";

//     let q2Div = document.querySelector("#question1-1");
//     q2Div.style.visibility = "visible";
//     q2Div.style.height = "40vh";

//     let counterSpan = document.querySelector("#counter span");
//     counterSpan.innerHTML = "1";
// })



// function checkQuestion1(e) {
//     e.preventDefault()
//     let q1Div = document.querySelector("#question1-1");
//     q1Div.style.visibility = "hidden";
//     q1Div.style.height = "0px";

//     let q2Div = document.querySelector("#question2-2");
//     q2Div.style.visibility = "visible";
//     q2Div.style.height = "40vh";

//     let counterSpan = document.querySelector("#counter span");
//     counterSpan.innerHTML = "2";

// }




// // question 2 -next
// f

//     let q2Div = document.querySelector("#question2-2");
//     q2Div.style.visibility = "hidden";
//     q2Div.style.height = "0px";

//     let q3Div = document.querySelector("#question3-3");
//     q3Div.style.visibility = "visible";
//     q3Div.style.height = "40vh";

//     let counterSpan = document.querySelector("#counter span");
//     counterSpan.innerHTML = "3";

// }
// // question 2 -previous
// function previousQuestion2() {
//     let q2Div = document.querySelector("#question2-2");
//     q2Div.style.visibility = "hidden";
//     q2Div.style.height = "0px";

//     let q1Div = document.querySelector("#question1-1");
//     q1Div.style.visibility = "visible";
//     q1Div.style.height = "40vh";

//     let counterSpan = document.querySelector("#counter span");
//     counterSpan.innerHTML = "1";
// }

// submit button - results
let c = 0

function check() {
    // let c=0;
   
    let q1=document.quiz_choices.question1.value;
    let q2=document.quiz_choices.question2.value;
    let q3=document.quiz_choices.question3.value;
    // let q1=document.querySelector("#question1").value;
    // let q2=document.querySelector("#question2").value;
    // let q3=document.querySelector("#question3").value;
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
// document.write[c]
let percentage = ((c/8) * 100)
    console.log(percentage, c, q1, q2, q3, "test");
    // document.write(c); 
    // should this be something like unshift in percentage div?


    // return percentage

        
     // check score + reveal pass or fail page + activate progress bar + percentage
   
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

    // document.write(c); //should this be something like unshift in percentage div?
    //return passContainer?

    } else {
            
            quizContainer.style.visibility = "hidden";
            quizContainer.style.height = "0px";

         
          quizContainerIntro.style.visibility = "hidden";
          quizContainerIntro.style.height = "0px";

            let failContainer = document.querySelector("#fail");
           failContainer.style.visibility = "visible";
            failContainer.style.height = "80vh";

            let percentageSpan = document.querySelector("#percentage")
            percentageSpan.innerHTML = `${percentage}`
            // document.write(c); //should this be something like unshift in percentage div?
    //return failContainer?
        }
    }




// // progress bar function

// // let scoreCircle = document.querySelector(".scoreCircle");
// // let percentageContainer = document.querySelector(".percentageContainer");

// // let scoreValue = 0
// // let scoreValueEnd = (check()) //?
// // let speed = 50;

// // let score = setInterval(() => {
// //     scoreValue++;
// //    percentageContainer.textContent = `${scoreValue}%`;
// //     scoreCircle.style.background = `conic-gradient(
// //         #6667ab ${scoreValue * 3.6}deg,
// //         ##A09E9E ${scoreValue * 3.6}deg
// //         )`;
// // if (scoreValue == scoreValueEnd) {
// //             clearInterval(score);
// //           }
// // }, speed);

