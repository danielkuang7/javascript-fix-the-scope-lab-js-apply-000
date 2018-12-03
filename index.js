function myAnimal(){
  return 'dog';
}

function yourAnimal(){
  var animal = 'cat'
  return animal;
}

function add2(n){
  return n + 2;
}

function funkyFunction(){
  return function(){
  return 'FUNKY!'
  }
}

var theFunk = funkyFunction()();
