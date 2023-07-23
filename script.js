document.getElementById('sinpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var education = parseInt(document.getElementById('education').value);
    var experience = parseInt(document.getElementById('experience').value);
    var language = parseInt(document.getElementById('language').value);
    var age = parseInt(document.getElementById('age').value);
    var connection = parseInt(document.getElementById('connection').value);

    var totalPoints = education + experience + language + age + connection;
    var eligibility = totalPoints >= 60 ? 'Eligible' : 'Not Eligible';

    document.getElementById('result').innerHTML = 'Total Points: ' + totalPoints + ', Eligibility: ' + eligibility;
});
