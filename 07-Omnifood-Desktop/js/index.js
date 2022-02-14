
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

// smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(function(link) {
  link.addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    // scroll back to top
    if(href === '#') window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // scroll to id selector
    if(href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({behavior: 'smooth'});
    }

    // close mobile navigation
    if(link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

//////////////////////////////////////////////////
// sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');


const observer = new IntersectionObserver(function(entries) {
  const entry = entries[0];
  console.log(entry);

  // (entry.isIntersecting === false) can rewrite (!entry.isIntersecting)
  if(entry.isIntersecting === false) {
    document.body.classList.add('sticky');
  }

  // (entry.isIntersecting === true) can rewrite (entry.isIntersecting)
  if(entry.isIntersecting === true) {
    document.body.classList.remove('sticky');
  }
}, {
  // in the viewport, null means viewport
  root: null,
  // event happens as soon as 0% of the .section-hero is inside of the viewport
  threshold: 0,
  // threshold: 1 means the .section-hero is inside of the viewport on 100%
  rootMargin: '-80px',
  // '-80px' === 8rem the height of sticky header
});
observer.observe(sectionHeroEl);