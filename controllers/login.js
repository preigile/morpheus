var allUsers = {
    show: function (req, res) {
        res.render('login.ejs', {
            title: 'Welcome'
        });
    }
};

module.exports = allUsers;