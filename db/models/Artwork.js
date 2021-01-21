const mongoose = require('../connection')

const ArtworkSchema = mongoose.Schema({
	art: String,
	
})

let artwork = mongoose.model('Artwork', ArtworkSchema)

module.exports = artwork