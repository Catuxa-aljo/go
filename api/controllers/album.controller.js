const Album = require('../models/album.model')

module.exports.create = (req, res, next) => {
    const data = {
        title: req.body.title || req.travel.title
    }
    Album.create ({...data, travel: req.params.id, pictures: req?.file?.path})
        .then(album => res.json(album))

}

module.exports.detail = (req, res, next) => {
    res.json(req.album)
}

module.exports.delete = (req, res, next) => {
    Album.findOneAndDelete({_id: req.album.id})
        .then(() => res.status(204).end())
        .catch(next)
}