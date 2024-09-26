    /*
        ! Data of Website
    */

var data = {
    english: {
        headerTopOfferStart: 'Exclusive Black Friday ! Offer ',
        headerTopOfferEnd: 'Days',
        headerTopFollow: 'Follow us on :',
        headerNav: ['Home', 'Game info', 'Live', 'Shop', 'Blog', 'Contact'],
        headerGlobe: ['English', 'Vietnamese', 'Korean', 'Japanese'],
        sliderSlogan: [
            'The ultimate strategy, the character that shapes victory',
            'Fight alongside teammates, win through strategy'
        ],
        sliderDonwload: 'Download',
    },

    vietnamese: {
        headerTopOfferStart: 'Ưu đãi Độc Quyền Black Friday ! Kéo Dài ',
        headerTopOfferEnd: 'Ngày',
        headerTopFollow: 'Theo dõi chúng tôi :',
        headerNav: ['Thông tin trò chơi', 'Live', 'Tiện ích', 'Sản phẩm', 'Bài viết', 'Liên hệ'],
        sliderSlogan: [
            'Chiến thuật đỉnh cao, nhân vật định hình chiến thắng',
            'Chiến đấu cùng đồng đội, chiến thắng bằng chiến thuật'
        ],
        sliderDonwload: 'Tải về',
    },

    korean: {

    },

    japanese: {
        
    }
};

    /*
        ! Variable of Typing slogan in Banner
    */
export {slogans, pauseTimeToDeleting, pauseTimeToTyping, speed};

const slogans = data['english'].sliderSlogan;

var pauseTimeToDeleting = 2000,
    pauseTimeToTyping = 500,
    speed = 60;

    /**
     *  ! Variable of play Video in Live
     */
export {imgOfVideo, video};

var imgOfVideo = document.querySelector('.live__thumbnail'),
    video = document.querySelector('.live__frame');

    /**
     * ! Variable of section Blog
     */

export {blogItem, leftBtn, rightBtn};

const blogItem = document.querySelectorAll('.blog__item');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn')