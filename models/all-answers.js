var allAnswers = {
    answers: [
        {term: 'Функция'},
        {term: 'JavaScript', value: 'Язык программирования для Интернета'},
        {term: 'Идентификатор'}
    ],

    getAllAnswers: function () {
        return this.answers;
    },

    addAnswer: function (answer) {
        if ((answer.term !== undefined) && ('term' in answer)) {
            this.answers.push(answer);
            console.log(answer.term + ' was added');
        } else {
            console.log('Wrong term format')
        }
    }
};

module.exports = allAnswers;
