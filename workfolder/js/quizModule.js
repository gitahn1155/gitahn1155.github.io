window.onload = function () {
  
  var myQuestions = [{
    question: '<img src="img/honey9.jpg" width="100%" />',
    answers: {
      1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey10.jpg" width="100%"  />',
    answers: {
   1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey11.jpg" width="100%"  />',
    answers: {
   1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey12.jpg" width="100%"  />',
    answers: {
    1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey13.jpg" width="100%"  />',
    answers: {
    1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey14.jpg" width="100%"  />',
    answers: {
      1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey15.jpg" width="100%"  />',
    answers: {
   1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey16.jpg" width="100%"  />',
    answers: {
   1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey17.jpg" width="100%"  />',
    answers: {
   1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }, {
    question: '<img src="img/honey18.jpg" width="100%"  />',
    answers: {
       1: '<img src="img/letterO.jpg" width="150px"/>',
      2: '<img src="img/letterX.jpg" width="150px"/>'
    }
  }];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];
    // for each question...
    myQuestions.forEach(function (currentQuestion, questionNumber) {
      //Store the list of answer choices
      var answers = [];
      // and for each available answer...
      for (var letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push('<label style="display: inline-block; margin: 0 auto;"><input type="radio" name="question' + questionNumber + '" value="' + letter + '">' + currentQuestion.answers[letter] + '</label>');
      }
	
      // add this question and its answers to the output
      output.push('<div class="slideQ"><div class="question">' + currentQuestion.question + '</div><div class="answers">' + answers.join("") + '</div></div>');
    });
	  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var numAddition = 0;

    // Answer Type
    var answerType = ['<img src="img/honey19.jpg" />', '<img src="img/honey19.jpg" />', '<img src="img/honey19.jpg" />'];

    // AnswerResult
    var answerResult = 0;
    // for each question...
    myQuestions.forEach(function (currentQuestion, questionNumber) {
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = 'input[name=question' + questionNumber + ']:checked';
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer == undefined) {
        userAnswer = 0;
      }
      numAddition = numAddition + parseInt(userAnswer);
    });

    answerResult = numAddition;

    // show number of correct answers out of total
    resultsContainer.innerHTML = '<div class="resultBox"><p style="text-align: center !important;"><span style="color: white; font-size: 20px;">나의 점수는</span><br /><span style="color: #ff9c00; font-size: 40px; font-weight: bold;">' + answerResult + '</span></p><p><img src="img/honey19.jpg" width="120%" /></p></div>';
    window.scrollBy(0, 800);
  }

  function showSlide(n) {
    var activeSlide = "active-slideQ";
    if (slides[currentSlide].classList) {
      slides[currentSlide].classList.remove("active-slideQ");
    } else {
      slides[currentSlide].className.className = "slideQ";
    }

    if (slides[n].classList) {
      slides[n].classList.add("active-slideQ");
    } else {
   		slides[n].className += " " + activeSlide;
    }
	 
    currentSlide = n;

    if (currentSlide == 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide == slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  var quizContainer = document.getElementById("quiz");
  var submitButton = document.getElementById("submit");
  var resultsContainer = document.getElementById("results");

  // display quiz right away
  buildQuiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slideQ");
  var currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

 
};