var user = {
    show: function (req, res) {
        res.render('index.ejs', {
            title: 'Welcome'
        });
    }
};

module.exports = user;
