const task3Element = document.getElementById('task-3');


function noName(){
  alert(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus rem culpa fuga sit numquam dolore, est officia. Non necessitatibus culpa, nostrum officia architecto quas aliquam error aperiam ducimus quaerat blanditiis!`);
}

function alertName(name){
  alert(name);
}

// noName();
// alertName('Rafael');

task3Element.addEventListener('click', noName);

function unify(p1, p2, p3){
  const result = (`${p1} ` + `${p2} ` + `${p3}`);
  alert(result);
}

unify('Rafael', 'Tomkowski', '1');

