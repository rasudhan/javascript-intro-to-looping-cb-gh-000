function forLoop(array) {
  for(let i=0;i<25;i++) {
    if (i==1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

funcion whileLoop(num) {
  while(num>0){
    console.log(--num)
  }
  return 'done'
}
function doWhileLoop() {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
  }

  do {
		console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable();
	} while (array.length > 0 && i < 5);

	return array;
}
