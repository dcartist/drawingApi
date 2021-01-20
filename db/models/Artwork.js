const mongoose = require('../connection')

const ArtworkSchema = mongoose.Schema({
	name: String,
	art: String,
	
})

let user = mongoose.model('Artwork', ArtworkSchema)

module.exports = artwork