
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

// set current year
const yearEl = document.querySelector('.currentYear');
const currentYear = new Date().getFullYear();
console.log(currentYear);

yearEl.textContent = currentYear;

// make mobile navigation work
const headerEl = document.querySelector('.header');
const mobileNavEl = document.querySelector('.btn-mobile-nav');
console.log(mobileNavEl);

mobileNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
})
