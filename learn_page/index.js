$(document).ready(function() {
    let played = 0;
    localStorage.setItem('animation', played);

    played += 1;

    let res = localStorage.getItem('animation');

    console.log(res);


});