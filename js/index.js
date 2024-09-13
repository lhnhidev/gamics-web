const sloganTextOne = 'Chiến thuật đỉnh cao, nhân vật định hình chiến thắng.';
const sloganTextTwo = 'Chiến đấu cùng đồng đội, chiến thắng bằng chiến thuật.';

var index = 0;

function renderSlogan() {
    if (index < sloganTextOne.length) {
        document.querySelector('#slogan').innerHTML += sloganTextOne[index];
        index++;
        setTimeout(renderSlogan, 50);
    }
}

renderSlogan();