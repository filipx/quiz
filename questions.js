var questions = [];
var url = 'https://danilovesovic.github.io/allInOne/pitanja.json';

// slanje upita i preuzimanje JSON fajla sa podacima
window.addEventListener('load', loadQuestions);
function loadQuestions(e) {
  var json = new XMLHttpRequest();
  json.addEventListener('readystatechange', function () {
    if (json.status === 200 && json.readyState === 4) {
      getData(json);
    }
  });
  json.open('GET',url);
  json.send();
}
function getData(json) {
  var data = json.responseText;
  var root = JSON.parse(data);
  makeQuestions(root);
  uniqueCats(root);
}

// prosledjivanje PITANJA za quiz i kreiranje karakteristika
function Question(text, options, answer, points, category) {
  this.text = text;
  this.options = options;
  this.answer = answer;
  this.points = points;
  this.category = category;
}

// kreiranje PITANJA dinamicki na osnovu eksternog json fajla
function makeQuestions(root) {
  for (var i = 0; i < root.length; i++) {
    questions.push(new Question(root[i].text, root[i].options, root[i].answer, root[i].points, root[i].category));
  }
}

// kreiranje KATEGORIJA dinamicki na osnovu eksternog json fajla
function uniqueCats(root) {
  var text = "";
  var uniqueCategories = [];
  // kreiranje array-a sa jedinstvenim vrednostima bez ponavljanja
  for (var i = 0; i < root.length; i++) {
    var x = 0;
    // dodavanje prvog value-a u array
    if (uniqueCategories.length === 0) {
      uniqueCategories.push(root[i].category);
    }
    // pomocna varijabla x za uporedjivanje elemenata array-a
    for (var j = 0; j < uniqueCategories.length; j++) {
      if (root[i].category !== uniqueCategories[j]) {
        x++;
      }
    }
    // dodavanje ostalih jedinstvenih vrednosti (kategorija) u array
    for (var l = 0; l < uniqueCategories.length; l++) {
      if (x === uniqueCategories.length) {
        uniqueCategories.push(root[i].category);
      }
    }
  }
  // kreiranje DOM elemenata na osnovu dobijenog array-a sa jedinstvenim vrednostima
  text = `
    <option value="-1" selected="true" disabled>-- Izaberi kategoriju --</option>
    <option value="all">Sve kategorije</option>
  `;
  for (var i = 0; i < uniqueCategories.length; i++) {
    text += `<option value="${uniqueCategories[i]}">${uniqueCategories[i].replace(/\b\w/g, l => l.toUpperCase())}</option>`
  }
  makeCategories(text);
}
