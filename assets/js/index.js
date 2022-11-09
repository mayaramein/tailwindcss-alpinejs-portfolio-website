
/*=============== Hmburger menu =============== */
const hamburgerMenu = document.querySelector("#hamburgerMenu")
const menu = document.querySelector("#mobileMenu")

hamburgerMenu.addEventListener("click", ()=> {
   menu.classList.toggle("hidden")
})


/*=============== Scroll Button show/hide =============== */
const scrollBtn = document.querySelector("#scroll-btn")
const customNavbr = document.querySelector("#nav-bar")

let lastKnownScrollPosition = 0;
let ticking = false;

function scrollNavbar(scrollPos) {
  if(scrollPos < 50){
    customNavbr.classList.remove("top-0");
  }else{
    customNavbr.classList.add("top-0");
  }
}

function scrollBtnFire(scrollPos) {
    if(scrollPos < 500){
        scrollBtn.classList.add("hidden");
    }else{
        scrollBtn.classList.remove("hidden");
    }
}

document.addEventListener('scroll', (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollBtnFire(lastKnownScrollPosition);
      scrollNavbar(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

/*=============== Type Writer Effect =============== */
const textDisplay = document.getElementById('text')
const phrases = ['Full Stack Developer.', '.NET Developer.', 'UI Developer.', 'Software Engineer.',  'Freelancer.', 'Graphic Designer.',]
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()


