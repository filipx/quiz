function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.currentIndex = 0;
  this.cat = [];
}
Quiz.prototype.checkCategory = function (category) {
  for (var i = 0; i < this.questions.length; i++) {
    if (category === this.questions[i].category) {
      this.cat.push(this.questions[i]);
    }else if (category === "all") {
      this.cat.push(this.questions[i]);
    }
  }
};
Quiz.prototype.getCurrentQuestion = function () {
  return this.cat[this.currentIndex];
};
Quiz.prototype.checkAnswer = function (answer) {
  if (answer === this.getCurrentQuestion().answer) {
    this.score += this.getCurrentQuestion().points;
  }
  this.currentIndex++;
};
Quiz.prototype.endQuiz = function () {
  if (this.currentIndex === this.cat.length) {
    return true;
  }else {
    return false;
  }
};
Quiz.prototype.reset = function () {
  if (this.endQuiz()) {
    this.score = 0;
    this.currentIndex = 0;
    this.cat = [];
  }
};
var quiz = new Quiz(questions);
