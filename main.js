var categoryBtns = document.getElementsByClassName('category');
var categoryDiv = document.getElementById('categories');
var optionsDiv = document.getElementsByClassName('options')[0];
var optionBtns = document.getElementsByClassName('option');
var startBtn = document.getElementById('start');
var footer = document.getElementById('footer_main');
var heading = document.getElementsByTagName('h2')[0];
var footerHeading = document.getElementById('footer_heading');
var results = document.getElementsByClassName('results')[0];
optionsDiv.style.display = "none";
footer.style.display = "none";
footerHeading.style.display = "none";

for (var i = 0; i < categoryBtns.length; i++) {
  categoryBtns[i].addEventListener('click', categoryChose);
}
function categoryChose(e) {
  quiz.checkCategory(this.id);
  // console.log(this.id);
  console.log(quiz.getCurrentQuestion().category);
  categoryDiv.style.display = "none";
  footer.style.display = "block";
  startBtn.style.display = "inline-block";
  heading.innerHTML = 'Kliknite na "Pocni kviz" dugme.';
  startBtn.addEventListener('click', startQuiz);
}
function startQuiz(e) {
  if (quiz.endQuiz()) {
    quizReset();
  }else{
    startBtn.removeEventListener('click', startQuiz);
    categoryDiv.style.display = "none";
    results.style.display = "none";
    startBtn.style.display = "none";
    heading.innerHTML = quiz.getCurrentQuestion().question;
    footerHeading.innerHTML = 'Pitanje: ' + (quiz.currentIndex + 1) + ' od ' + quiz.questions.length;
    footerHeading.style.display = "inline-block";
    var testArr = [];
    var optionBtnsCopy = testArr.concat(quiz.getCurrentQuestion().options);
    for (var i = 0; i < optionBtns.length; i++) {
      var rand = Math.floor(Math.random() * optionBtnsCopy.length);
      optionBtns[i].innerHTML = optionBtnsCopy[rand];
      optionBtnsCopy.splice(rand,1);
      optionBtns[i].addEventListener('click', userAnswer);
    }
    optionsDiv.style.display = "block";
  }
}
function userAnswer(e) {
  quiz.checkAnswer(this.innerHTML);
  startQuiz();
}
function quizReset() {
  startBtn.addEventListener('click', startQuiz);
  categoryDiv.style.display = "block";
  heading.innerHTML = 'Izaberite odredjenu kategoriju.';
  optionsDiv.style.display = "none";
  results.innerHTML = "<h2>Ukupno poena: " + quiz.score + "</h2>";
  results.style.display = "block";
  footerHeading.style.display = "none";
  quiz.reset();
}