module.exports = {
    home: (req, res) => res.render('pages/default/index'),
    notFound: (req, res) => res.render('pages/default/not-found'),
    exception: (req, res) => res.render('pages/default/exception'),
    
    dashboard: require('./dashboard')
};

module.exports = {
    auth: require('./auth')
}