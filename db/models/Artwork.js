const mongoose = require('../connection')

const ArtworkSchema = mongoose.Schema({
	art: String,
	paths:[],
	updated: { type: Date, default: Date.now },

	
})

let artwork = mongoose.model('Artwork', ArtworkSchema)

module.exports = artwork