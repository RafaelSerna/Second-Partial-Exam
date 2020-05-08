const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );

/* Your code goes here */
const sportsSchema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	num_players: {
		type: Number,
		required: true
	}
})

const sportsCollection = mongoose.model('sports', sportsSchema);

const Sports = {
	deleteSport(deletedSport) {
		return sportsCollection
			.remove(deletedSport)
			.then(result => {
				return result;
			})
			.catch(err => {
				throw new Error(err);
			})
	}
}

module.exports = { Sports };