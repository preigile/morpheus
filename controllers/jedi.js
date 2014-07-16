var allAnswers = require('../models/all-answers');

var jedi = {
    show: function (req, res) {
        res.render('jedi.ejs', {
            title: 'Jedi',
            terms: allAnswers
        })
    },
    input: function (req, res) {
        var answer = req.body;
        allAnswers.addAnswer(answer);
        res.end('Answer ' + answer.term + ' successfully added!');
    }
};

module.exports = jedi;
