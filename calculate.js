function calculate() {
    var education = parseInt(document.getElementById('education').value);
    console.log('Education points: ' + education);
    var experience = parseInt(document.getElementById('experience').value);
    var language = parseInt(document.getElementById('language').value);
    var age = parseInt(document.getElementById('age').value);
    var connection = parseInt(document.getElementById('connection').value);
    var total = education + experience + language + age + connection;
    var result = document.getElementById('result');
    if (total >= 60) {
        result.textContent = 'Congratulations! Your total points are ' + total + '. You are eligible for the SINP.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Your total points are ' + total + '. Unfortunately, you are not eligible for the SINP.';
        result.style.color = 'red';
    }
}