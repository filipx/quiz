var questions = [
  new Question('Sta je od ponudjenog event?',['onMouseUp', 'RightClick', 'mouseout', 'move'], 'mouseout', 10, 'programming'),
  new Question('OOP jezik je?',['JavaScript','CSS','AJAX','C'], 'JavaScript', 10, 'programming'),
  new Question('Koji programski jezik se bavi serverskom stranom?',['PHP', 'HTML', 'JavaScript', 'XML'], 'PHP', 10, 'programming'),
  new Question('Question 4',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'programming'),
  new Question('Question 5',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'programming'),
  new Question('Koliko je 3 na kvadrat',['12', '9', '6', '24'], '9', 10, 'math'),
  new Question('Question 2',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'math'),
  new Question('Question 3',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'math'),
  new Question('Question 4',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'math'),
  new Question('Question 5',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'math'),
  new Question('Kada je bombardovan Beograd od strane NATO?',['2000', '2001', '2002', '1999'], '1999', 10, 'hystory'),
  new Question('Question 2',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'hystory'),
  new Question('Question 3',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'hystory'),
  new Question('Question 4',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'hystory'),
  new Question('Question 5',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'hystory'),
  new Question('Koji je glavni grad Srbije',['Beograd', 'Budva', 'Budimpesta', 'Novi Sad'], 'Beograd', 10, 'geography'),
  new Question('Question 2',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'geography'),
  new Question('Question 3',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'geography'),
  new Question('Question 4',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'geography'),
  new Question('Question 5',['Option 1', 'Option 2', 'Option 3', 'Option 4'], 'Option 1', 10, 'geography'),
];

function Question(question, options, answer, points, category) {
  this.question = question;
  this.options = options;
  this.answer = answer;
  this.points = points;
  this.category = category;
}
