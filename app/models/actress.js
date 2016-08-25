// Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Defines the superhero schema
var ActressSchema = new Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    qualities: {type: String, required: true},
    picture: {type: Schema.Types.Mixed, required: true},
    morePictures: Schema.Types.Mixed, // this is not required
    createdAt: {type: Date, default: Date.now},
});

// Sets the createdAt parameter equal to the current time
ActressSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

// Exports the SuperheroSchema for use elsewhere.
module.exports = mongoose.model('actress', ActressSchema);
