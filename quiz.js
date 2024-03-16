const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four ', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

    let score=0;
    
    //Destructuring of the obj as we will be needing it repeatedly
    const {
      correctAnswer,
      options,
      question
    } = questionObj;
    
    //Getting element from html and filling data here
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");

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
        questionEl.textContent = `Quiz completed!!!`;
        optionEl.textContent = "";
      });
    });
    
//Function for shuffling 
function shuffleOptions(options){
  for(let i=options.length-1;i>=0;i--)
  {
    j =Math.floor(Math.random()*i+1);

    [options[i],options[j]] = [options[j],options[i]];
  }
  return options;
}