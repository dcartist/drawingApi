const mongoose = require('../connection')

const ArtworkSchema = mongoose.Schema({
	// name: String,
	art: String,
	// png: String,
	
})

let artwork = mongoose.model('Artwork', ArtworkSchema)

module.exports = artwork