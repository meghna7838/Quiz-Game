const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

    //Destructuring of the obj as we will be needing it repeatedly
    const {
      correctAnswer,
      options,
      question
    } = questionObj
    
    //Getting element from html and filling data here
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");

    questionEl.innerHTML = question;
    //We can also use text content here instead of html.

