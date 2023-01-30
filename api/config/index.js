module.exports = {
    auth: {
        tokenSecret: "ed_app_secret_key",
        tokenExpiresIn: '1d'
    },
    db: {
        intro: {
            whitlist: ['home', 'about', 'courses', 'contact']
        },
        etc: {
            whitlist: ['navLinks']
        }
    }
};
