    /*
        ! Render slogans in Banner
    */ 

const slogans = [
    'Chiến thuật đỉnh cao, nhân vật định hình chiến thắng',
    'Chiến đấu cùng đồng đội, chiến thắng bằng chiến thuật'
];
const elementSlogan = document.querySelector('#slogan');
var i = 0;
var j = 0;
var deleting = false;

function type() {
    const currentSlogan = slogans[i];
    elementSlogan.textContent = currentSlogan.slice(0, j);

    if (!deleting && j < currentSlogan.length) { 
        /* 
            TODO: Nếu trong trạng thái gõ (!deleting) thì j tăng
        */
        j++;
        setTimeout(type, 70);
    }
    else if (!deleting && j === currentSlogan.length) {
        /* 
            TODO: Nếu gõ xong, đợi 5s chuyển sang xóa
        */
        setTimeout(() => {
            deleting = true;
            type();
        }, 5000);
    }
    else if (deleting && j > 0) {
        /* 
            TODO: Nếu trong trạng thái xóa (deleting) thì j giảm
        */
        j--;
        setTimeout(type, 70);
    }
    else if (deleting && j === 0) {
        /*
            TODO: Nếu xóa xong, đợi 0.7s chuyển sang trạng thái gõ
        */
        setTimeout(() => {
            deleting = false;

            /*
                TODO: i + 1 có nghĩa là chọn từ tiếp theo.
                TODO: % slogans.length có nghĩa là khi mà i tăng vượt qua slogans.length nó sẽ tự về 0
            */

            i = (i + 1) % slogans.length;
            type();
          }, 700);
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