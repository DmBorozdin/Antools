const slider = document.querySelector('.slider');
const sliderLine = slider.querySelector('.slider__line');
const sliderItems = slider.querySelectorAll('.slider__item');
const nextButton = document.querySelector('.slider__chevron-right');
const prevButton = document.querySelector('.slider__chevron-left');
const sliderIndicatorItems = document.querySelectorAll('.slider-indicators__items');
let count = 0;
let width;

const checkButtonAvailability = () => {
    if (count === 0) {
        prevButton.classList.remove('slider__chevron_active');
    } else {
        prevButton.classList.add('slider__chevron_active');
    }
    if (count === sliderItems.length - 1) {
        nextButton.classList.remove('slider__chevron_active');
    } else {
        nextButton.classList.add('slider__chevron_active');
    }
};

const enableActiveIndicator = () => {
    sliderIndicatorItems.forEach((indicator, index) => {
        if (index === count) {
            indicator.classList.add('slider-indicators__items-active');
        } else {
            indicator.classList.remove('slider-indicators__items-active');
        }
    })
}

const rollSlider = () => {
    sliderLine.style.transform = `translate(-${count*width}px)`;
    checkButtonAvailability();
    enableActiveIndicator();
};

const init = () => {
    width = slider.offsetWidth;
    sliderLine.style.width = width * sliderItems.length + 'px';
    sliderItems.forEach(item => {
        item.style.width = `${width}px`;
    });
    rollSlider();
};

init();

window.addEventListener('resize', init);

const roolSliderNext = () => {
    if (count < sliderItems.length - 1) {
        count++;
        rollSlider();
    }
};

const roolSliderPrev = () => {
    if (count > 0) {
        count--;
        rollSlider();
    }
};

nextButton.addEventListener('click', roolSliderNext);
prevButton.addEventListener('click',  roolSliderPrev);