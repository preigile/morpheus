var mongo = require('../models/mongo');

var jedi = {
    show: function (req, res) {
        mongo.getAllAnswers(function (docs) {
            res.render('jedi.ejs', {
                title: 'Jedi',
                terms: docs
            });
        });
    },

    input: function (req, res) {
        var answer = req.body;
        mongo.addAnswer(answer);
        res.end('Answer ' + answer.term + ' successfully added!');
    },

    delete: function (req, res) {
        var answer = req.body;
        mongo.deleteAnswer(answer);
        res.end('Answer ' + answer + ' successfully deleted!');
    }
};

module.exports = jedi;
