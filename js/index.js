    /*
        ! Render slogans in Banner
    */ 

import { slogans, pauseTimeToDeleting, pauseTimeToTyping, speed } from './module.js';

let deleting = false;
let indexText = 0;
let indexChar = 0;
const elementSlogan = document.querySelector('#slogan');

function type() {
    const currentSlogan = slogans[indexText];
    elementSlogan.textContent = currentSlogan.slice(0, indexChar);

    if (!deleting && indexChar < currentSlogan.length) { 
        /* 
            TODO: Nếu trong trạng thái gõ (!deleting) thì indexChar tăng
        */
        indexChar++;
        setTimeout(type, speed);
    }
    else if (!deleting && indexChar === currentSlogan.length) {
        /* 
            TODO: Nếu gõ xong, đợi 5s chuyển sang xóa
        */
            setTimeout(() => {
                deleting = true;
                type();
            }, pauseTimeToDeleting);
    }
    else if (deleting && indexChar > 0) {
        /* 
            TODO: Nếu trong trạng thái xóa (deleting) thì indexChar giảm
        */
        indexChar--;
        setTimeout(type, speed);
    }
    else if (deleting && indexChar === 0) {
        /*
            TODO: Nếu xóa xong, đợi 0.7s chuyển sang trạng thái gõ
        */
            setTimeout(() => {
                deleting = false;
    
                /*
                    TODO: indexText + 1 có nghĩa là chọn từ tiếp theo.
                    TODO: % slogans.length có nghĩa là khi mà indexText tăng vượt qua slogans.length nó sẽ tự về 0
                */
    
                indexText = (indexText + 1) % slogans.length;
                type();
              }, pauseTimeToDeleting);
    }
}

type();

    /*
        ! Show and Hidden serach input when click search button in Header
    */

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', () => {
    document.querySelector('.find').classList.remove('hidden');
    document.querySelector('.find').style.animation = 'fadeIn ease-in-out .5s forwards';
});

const findBackground = document.querySelector('#findBackground');
findBackground.addEventListener('click', () => {
    document.querySelector('.find').style.animation = 'fadeOut ease-in-out .5s forwards';
    setTimeout(() => {
        document.querySelector('.find').classList.add('hidden');
    }, 500);
});

    /**
     *  ! Lazy loading Elements
     */

let lazyLoadingFunction = function (lazy, notLazy, percengeElement, count) {

    const lazyElemnts = document.querySelectorAll(`${lazy}`);

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(notLazy);
                if (count == true) {
                    observer.unobserve(entry.target);
                }
                // document.addEventListener('scroll', () => {
                //     observer.observe(entry.target);
                // });
            }
            else if (entry.target.classList.contains(notLazy)) {
                entry.target.classList.remove(notLazy);
            }
        });
        
    }, {threshold: percengeElement} );
    
    lazyElemnts.forEach(ele => {
        observer.observe(ele);
    });

}

    /**
     *  ! Slider Blog
     */

const blogList = document.querySelector('#blogList');
const blogItem = document.querySelectorAll('.blog__item');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn')

var distance = 0;
var maxClick = parseInt(blogItem.length / 3) - (blogItem.length % 3 ? 0 : 1);

function slide(distance) {
    blogItem.forEach(element => element.style.transform = `translateX(${parseInt(distance)}%)`);
}

function sliderToLeft() {
    if (distance == 0) {
        distance = -maxClick * 300;
    }
    else {
        distance += 300;
    }
    slide(distance);
}

function sliderToRight() {
    if (distance == -maxClick * 300) {
        distance = 0;
    }
    else {
        distance -= 300;
    }
    slide(distance);
}

var autoSlide = setInterval(sliderToRight, 3500);

leftBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    sliderToLeft();
    autoSlide = setInterval(sliderToRight, 3500);
});

rightBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    sliderToRight();
    autoSlide = setInterval(sliderToRight, 3500);
});


lazyLoadingFunction('.live__video', 'keyframe-fade-in-up');
lazyLoadingFunction('.banner__under', 'keyframe-blur-scale');
lazyLoadingFunction('.banner__img', 'keyframe-fade-in-down');
lazyLoadingFunction('.banner__button .animate__animated', 'animate__bounceIn');
lazyLoadingFunction('.match__under', 'keyframe-blur-scale');
lazyLoadingFunction('.match__name-box.animate__animated', 'animate__flash');
lazyLoadingFunction('.match__img-one.animate__animated', 'animate__fadeInRight');
lazyLoadingFunction('.match__img-two.animate__animated', 'animate__fadeInLeft');
lazyLoadingFunction('#matchTime', 'animate__flip');
lazyLoadingFunction('.match__schedule', 'animate__flipInX');
lazyLoadingFunction('.about__content', 'animate__fadeInLeft');
lazyLoadingFunction('.about__video', 'animate__fadeInRight');
lazyLoadingFunction('.agents__content', 'animate__fadeInLeft');
lazyLoadingFunction('.agents__background', 'animate__fadeInRight');
lazyLoadingFunction('.weapon__content', 'animate__fadeInLeft');
lazyLoadingFunction('.weapon__img', 'animate__fadeInRight');
lazyLoadingFunction('.maps__background', 'animate__fadeInRight');
lazyLoadingFunction('.maps__content', 'animate__fadeInLeft');
lazyLoadingFunction('.shop__product', 'animate__pulse');