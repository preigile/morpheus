var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nio-db');

var Neuro = mongoose.model('neuros', {
    term: String,
    value: String,
    hasValue: Boolean
});


var mongo = {
    answers: [],

    getAllAnswers: function (callback) {
        Neuro.find({}, function (err, docs) {
            callback(docs);
        });
    },

    addAnswer: function (answer) {
        if ((answer.term !== undefined) && ('term' in answer)) {
            new Neuro(answer).save(function (err) {
                console.log(err);
            });
            console.log(answer.term + ' was added');
        } else {
            console.log('Wrong term format');
        }
    }
};

module.exports = mongo;
