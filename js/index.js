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

let lazyLoadingFunction = function (lazy, notLazy, percengeElement) {

    const lazyElemnts = document.querySelectorAll(`.${lazy}`);

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(notLazy);
            }
            else if (entry.target.classList.contains(notLazy)) {
                entry.target.classList.remove(notLazy);
            }
        });
        
    }, {threshold: percengeElement} );
    
    lazyElemnts.forEach(ele => {
        observer.observe(ele);
    })

}

lazyLoadingFunction('lazy', 'not-lazy', 0.5);