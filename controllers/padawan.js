var padawan = {
    show: function (req, res) {
        res.render('padawan.ejs', {
            title: 'Padawan'
        });
    }
};

module.exports = padawan;