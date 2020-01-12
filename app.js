const date_obj = new Date();
let name, isWorking, income, expenses, isDriver, numDrinksPerWeek, numEatingOutPerWeek, numSchoolPerWeek, numErrandsPerWeek, balance;
console.log(date_obj);
// const user_id;
var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
    // user_id = Math.random() * 10;
});

app.get('/pages/game.html', function (req, res) {
    game();
    res.sendFile(path.join(__dirname + '/pages/game.html'));

});

app.listen(8080);

function myVariables() {
    return name, balance;
}

function game() {
    var request = require("request");

    var options = {
        method: 'GET',
        url: `https://api.typeform.com/forms/lHSJDm/responses?since=2020-01-12T03:09:51Z`,
        qs: {
            since: '2020-01-12T03:09:51Z'
        },
        headers: {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            Cookie: 'device_view=full',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'api.typeform.com',
            'Postman-Token': '55af18b5-4e7a-42ce-ae4a-6f33358717f2,c70b0986-1d50-4cbe-8671-44033e40ab1a',
            'Cache-Control': 'no-cache',
            'User-Agent': 'PostmanRuntime/7.18.0',
            Authorization: 'Bearer 2Ucqsixx7vyrxCFYPA6aAvKghyKFhAiPRLFGY2Zni4Q5',
            Accept: 'application/json',
            'Content-Type': 'text/plain'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(JSON.parse(body));
        name = JSON.parse(body).items[0].answers[0].text;
        isWorking = JSON.parse(body).items[0].answers[1].choice.label;
        income = JSON.parse(body).items[0].answers[2].text;
        expenses = JSON.parse(body).items[0].answers[3].text;
        isDriver = JSON.parse(body).items[0].answers[4].choice.label;
        numDrinksPerWeek = JSON.parse(body).items[0].answers[5].choice.label;
        numEatingOutPerWeek = JSON.parse(body).items[0].answers[6].choice.label;
        numSchoolPerWeek = JSON.parse(body).items[0].answers[7].choice.label;
        numErrandsPerWeek = JSON.parse(body).items[0].answers[8].choice.label;
        balance = income - expenses;
        console.log(name, isWorking, income, expenses, isDriver, numDrinksPerWeek, numEatingOutPerWeek, numSchoolPerWeek, numErrandsPerWeek);
    });
}