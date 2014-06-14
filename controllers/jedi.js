var jedi = {
    show: function (req, res) {
        res.render('jedi.ejs', {
            title: 'Jedi'
        })
    }
};

module.exports = jedi;
