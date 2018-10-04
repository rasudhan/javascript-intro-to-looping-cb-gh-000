function forLoop(array) {
  for(let i=0;i<25;i++) {

    i===1? array[i]="I am 1 strange loop." : array[i]="I am ${i} strange loops."
  }
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}
