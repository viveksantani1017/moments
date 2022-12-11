const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        messege: err.messege,
        statck: process.env.NODE_ENV === 'SocialMedia' ? null : err.stack
    })
}
module.exports = {
    errorHandler,
}