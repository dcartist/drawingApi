const mongoose = require('../connection')

const ArtworkSchema = mongoose.Schema({
	updated: { type: Date, default: Date.now },
	art: String,
	paths:[],

	
})

let artwork = mongoose.model('Artwork', ArtworkSchema)

module.exports = artwork