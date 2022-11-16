module.exports = function (req, res, next) {
    if (req.originalMethod == 'GET'){
        res.status(404);
        res.send('404: Página no encontrada baby')
    } else {
        res.status(418);
        res.send('418: Creo que soy una tetera')
    }
}