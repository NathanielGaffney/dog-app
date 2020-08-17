import $ from 'jquery';
import './index.css';

function formListen(){
    $('.random-dog-input').submit(event => {
        event.preventDefault();
        randomImage($('#random').val());
    });
    $('.breed-input').submit(event => {
        event.preventDefault();
        breedImage($('#breed').val());
    });
}

function breedImage(x) {
    if (x === ''){
        fetch ('https://dog.ceo/api/breed/hound/images/random')
        .then(response => response.json())
        .then(responseJson => render(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    } else {
        fetch (`https://dog.ceo/api/breed/${x}/images/random`)
        .then(response => response.json())
        .then(responseJson => render(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    }
}

function randomImage(x) {
    if (x === ''){
        fetch ('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson => render(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    } else {
        fetch (`https://dog.ceo/api/breeds/image/random/${x}`)
        .then(response => response.json())
        .then(responseJson => render(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    }
}

function render(responseJson){
    if (!Array.isArray(responseJson.message)){
        $('.dog-pictures').html(`<img src="${responseJson.message}">`);
    } else {
        let dogArr = [];
        responseJson.message.forEach(a => dogArr.push(`<img src="${a}">`));
        $('.dog-pictures').html(dogArr);
    }

}

$(formListen());