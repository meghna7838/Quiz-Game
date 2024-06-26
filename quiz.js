const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

    let score=0;
    //Variable to keep count of ques no.
    let currentQuestion = 0;
    
    //Getting element from html and filling data here
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");


    showQuestion();

    function showQuestion(){
    //Destructuring of the obj as we will be needing it repeatedly
    const {
      correctAnswer,
      options,
      question
    } = quesJSON[currentQuestion];
    questionEl.innerHTML = question;
    //We can also use text content here instead of html.

    const shuffledOption = shuffleOptions(options);
    
    shuffledOption.forEach((opt) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      optionEl.appendChild(btn);

      //Event handling on btn
      
      btn.addEventListener('click',()=>{
        if(opt===correctAnswer)
        {
          score++;
          //console.log("I am correct");
        }else{
          score = score-0.25;
        }
        //console.log(score);
        scoreEl.textContent = `Score: ${score}`;
        nextQuestion();
       
      });
    });

  }

  function nextQuestion()
  {
    currentQuestion++;
    optionEl.textContent = "";// To make the previous questions go away.
    console.log(currentQuestion);
    if(currentQuestion>=quesJSON.length)
    {
    questionEl.textContent = `Quiz completed!!!`;
    
    }else
    {
      showQuestion();
    }
  }
    
//Function for shuffling 
function shuffleOptions(options){
  for(let i=options.length-1;i>=0;i--)
  {
    j =Math.floor(Math.random()*i+1);

    [options[i],options[j]] = [options[j],options[i]];
  }
  return options;
}