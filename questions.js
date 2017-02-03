var questions = [];
var url = "https://danilovesovic.github.io/allInOne/pitanja.json";

window.addEventListener('load', loadQuestions);
function loadQuestions(e) {
  var json = new XMLHttpRequest();
  json.addEventListener('readystatechange', function () {
    if (json.status === 200 && json.readyState === 4) {
      getData(json);
    }
  });
  json.open('GET', url);
  json.send();
    // console.log(json);
}
function getData(json) {
  var data = json.responseText;
  var root = JSON.parse(data);
  for (var i = 0; i < root.length; i++) {
    questions.push(new Question(root[i].text, root[i].options, root[i].answer, root[i].points, root[i].category));
  }
  // console.log(questions);
}

function Question(text, options, answer, points, category) {
  this.text = text;
  this.options = options;
  this.answer = answer;
  this.points = points;
  this.category = category;
}
