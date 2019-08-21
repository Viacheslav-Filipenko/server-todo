module.exports = {
    authenticate: (req, res, next) => {
        const user = req.user;
        
        if (user.is_admin === true) {
            next();
        } else {
            res.status(403).end();
        }
    }
}