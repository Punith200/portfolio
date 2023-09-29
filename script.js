
function blinkHeader() {
  const header = document.getElementById("header");
  header.style.color = "red";
  setInterval(function () {
    header.style.color = header.style.color === "red" ? "initial" : "red";
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  header.addEventListener("click", blinkHeader);
});

function handleSkillIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateSkills(entry.target);
    }
  });
}

function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach((bar) => {
    const skillLevel = parseFloat(bar.parentElement.getAttribute('data-percent'));
    const progress = bar.querySelector('.skill-progress');
    let width = 0;

    const animationInterval = setInterval(() => {
      if (width >= skillLevel) {
        clearInterval(animationInterval);
      } else {
        width++;
        progress.style.width = width + '%';
        progress.style.setProperty('--skill-percent', skillLevel + '%');
        
      }
    }, 20);
  });
}

const skillObserver = new IntersectionObserver(handleSkillIntersect, {
  root: null,
  threshold: 0.5,
});

const skillsSection = document.querySelector('#Skills');
skillObserver.observe(skillsSection);

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
}

const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', submitForm);

function animateWords() {
  const words = document.querySelectorAll('.word');
  
  words.forEach((word, index) => {
    setTimeout(() => {
      word.classList.add('active');
    }, index * 600); 
  });
}


window.addEventListener('load', animateWords);
