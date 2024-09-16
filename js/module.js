    /*
        ! Data of Website
    */

var data = {
    english: {
        headerTopOfferStart: 'Exclusive Black Friday ! Offer ',
        headerTopOfferEnd: 'Days',
        headerTopFollow: 'Follow us on :',
        headerNav: ['Home', 'Live', 'Features', 'Shop', 'Blog', 'Contact'],
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
        headerNav: ['Trang chủ', 'Live', 'Tiện ích', 'Sản phẩm', 'Bài viết', 'Liên hệ'],
        sliderSlogan: [
            'Chiến thuật đỉnh cao, nhân vật định hình chiến thắng',
            'Chiến đấu cùng đồng đội, chiến thắng bằng chiến thuật'
        ],
        sliderDonwload: 'Tải về',
    },
};

    /*
        ! Variable of Typing slogan in Banner
    */
export {slogans, pauseTimeToDeleting, pauseTimeToTyping, speed};

const slogans = data['english'].sliderSlogan;

var pauseTimeToDeleting = 2000,
    pauseTimeToTyping = 500,
    speed = 60;