    /*
        ! Render slogan in Banner
    */ 

const sloganTextOne = 'Chiến thuật đỉnh cao, nhân vật định hình chiến thắng';
const sloganTextTwo = 'Chiến đấu cùng đồng đội, chiến thắng bằng chiến thuật';

var slogan = sloganTextOne;
var index = 0;

function renderSlogan() {
    if (index < slogan.length) {
        document.querySelector('#slogan').innerHTML += slogan[index];
        index++;
        setTimeout(renderSlogan, 50);
    }
}

renderSlogan();

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