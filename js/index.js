const sloganTextOne = 'Chiến thuật đỉnh cao, nhân vật định hình chiến thắng.';
const sloganTextTwo = 'Chiến đấu cùng đồng đội, chiến thắng bằng chiến thuật.';

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