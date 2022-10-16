
// if(userAge == answer){
    //   console.log("You are right!");
    //   score += 1;
    // }  
    // else{
    //   console.log("You are wrong!");
    // }
    
    // console.log("Your final score is: ", score);
    
    // function addTwoNumbers( num1 , num2 ){
    //   return num1 + num2;
    // }
    
    // console.log(addTwoNumbers(4,9));
    
    // var score = 0;
    
    // function qna(question, answer){
    //   var userAnswer =  readlinesync.question(question);
    //   if(userAnswer == answer){
    //     console.log("You are right!!");
    //     score += 1;
    //   }
    //   else{
    //     console.log("You are wrong!!");
    //     score -= 1;
    //   }
    // }
    
    // var questionOne = "What is your name? ";
    // var answerOne = "Krishna Bathwal";
    // qna(questionOne, answerOne);
    
    // var questionTwo = "What is your age? ";
    // var answerTwo = "24 yrs";
    // qna(questionTwo, answerTwo);
    
    // console.log("Your final score is : ", score);
    
    // var star = "";
    
    // for(var i=5 ; i>0 ; i--){
    //   var star = "";
    //   for(var j=0; j<i ; j++){
    //     star += "*";
    //   }
    //   console.log(star);
    //   // star += '\n';
    // }
    
    
    // var person1 = {
    //   name: "Krishna",
    //   age: 24,
    //   gender: "Female"
    // };
    
    // var person2 = {
    //   name: "Vrinda",
    //   age: 22,
    //   gender: "Female"
    // };
    
    // var persons = [person1, person2];
    
    // function printFunc(name, age, gender){
    //   console.log(name);
    //   console.log(age);
    //   console.log(gender);
    //   console.log("-----------------");
    // }
    
    // for(var i = 0; i<persons.length ; i++){
    //   var currentPerson =  persons[i];
    //   printFunc(currentPerson.name, currentPerson.age, currentPerson.gender);
    // }

    var readlineSync = require("readline-sync");
    
    var questions = [
      {
        question : "What is your name? ",
        answer: "Krishna Bathwal"
      },
      {
        question : "What is your age? ",
        answer: 24
      },
      {
        question : "Are you an employee? ",
        answer : "Yes"
      }
    ]
    var score = 0;
    
    function quiz(question, answer){
      var currentQuestion = question;
      console.log(currentQuestion);
      var userAnswer = readlinesync.question("Enter your answer: ");
      if(answer==userAnswer){
        console.log("YAY! You scored");
        score += 1;
      }
      else{
        console.log("OOPS! Better luck next time.");
      }
    }
    
    for(var i=0 ; i < questions.length ; i++){
      quiz(questions[i].question,questions[i].answer);
    }
    
    console.log("Your final score is: ", score);