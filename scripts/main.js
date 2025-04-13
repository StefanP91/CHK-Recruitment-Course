// navbar color change on scroll
const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled'); 
  }

  else {
    navbar.classList.remove('scrolled'); 
  }
});

// NAVBAR NUMBER INCREMENT ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const applicationsNumberElement = document.querySelector(".applications-number");

  if (applicationsNumberElement) {
      animateCounter(applicationsNumberElement, 0, 2703, 2000); 
  }
});

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();

  function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); 
      const currentValue = Math.floor(progress * (end - start) + start);

      element.textContent = currentValue;

      if (progress < 1) {
          requestAnimationFrame(updateCounter);
      }
  }

  requestAnimationFrame(updateCounter);
}

// navigation appear on scroll
document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.getElementById("navigation");
    const visibilityThreshold = 990; 
    let isVisible = false; 
  
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > visibilityThreshold && !isVisible) {
       
        navigation.classList.remove("hidden");
        navigation.classList.add("visible");
        isVisible = true; 
      } else if (currentScrollY <= visibilityThreshold && isVisible) {
        
        navigation.classList.remove("visible");
        navigation.classList.add("hidden");
        isVisible = false; 
      }
    });
  });


// Scroll into section
function scrollInto (id){
  const section = document.getElementById(id)

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}


// Slider hero slider

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const slides = Array.from(slider.querySelectorAll(".slide"));

        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            slider.appendChild(clone);
        });

        let scrollAmount = 0; 
        const slideWidth = slides[0].offsetWidth; 
        const totalWidth = slides.length * slideWidth;

        const isMiddleSlider = slider.classList.contains("slider-middle");
        const direction = isMiddleSlider ? -1 : 1;

        const speed = 0.5; // Adjust this value to change speed (higher = faster)

        function slide() {
            scrollAmount += direction * speed; // Use the speed multiplier

            if (direction === 1 && scrollAmount >= totalWidth) {
                scrollAmount = 0; 
            } else if (direction === -1 && scrollAmount <= 0) {
                scrollAmount = totalWidth; 
            }

            slider.style.transform = `translateX(-${scrollAmount}px)`;

            requestAnimationFrame(slide);
        }

        requestAnimationFrame(slide);
    });
});

// Calculator
const calculatorPrice = document.getElementById('calculator-monthly-price');
const calculatorPriceBox = document.getElementById('calculator-price-box');

const calculator = {
  type: 699,
  installments: 3,
};

const updatePriceBoxVisibility = () => {
  calculatorPriceBox.style.visibility =
    calculator.installments && calculator.type > 0 ? 'visible' : 'hidden';
};

const calculatePrice = () => {
  const price = calculator.installments === 0 
    ? calculator.type 
    : Math.round(calculator.type / calculator.installments);
  calculatorPrice.textContent = `${price} €`;
};


const handleCalculatorChange = (key, value) => {
  calculator[key] = parseInt(value, 10);
  updatePriceBoxVisibility();
  calculatePrice();
};

document.querySelectorAll('[name="calculator-installments"]').forEach((element) =>
  element.addEventListener('change', (e) => handleCalculatorChange('installments', e.target.value))
);

document.querySelectorAll('[name="option-price"]').forEach((element) =>
  element.addEventListener('change', (e) => handleCalculatorChange('type', e.target.value))
);

const toggleActiveClass = (buttons, activeClass = 'active') => {
  buttons.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      buttons.forEach((btn) => btn.classList.remove(activeClass));
      e.currentTarget.classList.add(activeClass);
    })
  );
};

toggleActiveClass(document.querySelectorAll('.label-option'));
toggleActiveClass(document.querySelectorAll('.label-installments'));


// Carousel indicator slider mobile

document.addEventListener("DOMContentLoaded", function () {
  const indicatorsContainer = document.querySelector('#modulesCarousel .carousel-indicators');
  function scrollActiveIndicatorIntoView() {
    const activeButton = indicatorsContainer.querySelector('.active');
    if (activeButton) {

      const containerWidth = indicatorsContainer.offsetWidth;
      const buttonOffset = activeButton.offsetLeft + activeButton.offsetWidth / 2;
      const scrollPosition = buttonOffset - containerWidth / 2;

      indicatorsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }


  const carousel = document.querySelector('#modulesCarousel');
  if (carousel) {
    carousel.addEventListener('slid.bs.carousel', scrollActiveIndicatorIntoView);
  }


  scrollActiveIndicatorIntoView();
});



// Waiting list form



