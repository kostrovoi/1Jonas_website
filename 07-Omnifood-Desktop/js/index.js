
for(let i = 'a'; i != 'aaaa'; i += 'a') {
  if(i === 'aaa') {
    continue;
  }
  console.log('Hello ');
}

let itr = 0;
let condition = true;

for(; condition;) {
  if(itr >= 10) {
    condition = false;
  } else {
    console.log('weird loop');
    itr++;
  }
}

