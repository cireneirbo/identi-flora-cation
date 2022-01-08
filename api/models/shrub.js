const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShrubSchema = new Schema(

    {
        
        common_name: {type: String, required: true, maxLength: 100},
        latin_name: {type: String, required: true, maxLength: 100},
        brief_description: {type: String, required: true, maxLength: 1000},

        plant_type: {type: Array, required: true, maxLength: 10},
        plant_shape: {type: Array, required: true, maxLength: 10},
        bloom_time: {type: String, required: true, maxLength: 100},

        dimensions: {type: Array, required: true, maxLength: 2},
        flower_bool: {type: Boolean, required: true, maxLength: 1},
        flower_color: {type: Array, required: true, maxLength: 10},

        flower_dimensions: {type: String, required: true, maxLength: 100},
        fruit_bool: {type: Boolean, required: true, maxLength: 1},
        fruit_color: {type: Array, required: true, maxLength: 10},

        leaf_color: {type: Array, required: true, maxLength: 10},
        leaf_dimensions: {type: Array, required: true, maxLength: 10},
        leaves_type: {type: Array, required: true, maxLength: 10},

        bark_color: {type: Array, required: true, maxLength: 10},
        stem_color: {type: Array, required: true, maxLength: 10},
        sun_exposure: {type: String, required: true, maxLength: 100},

        soil: {type: String, required: true, maxLength: 100},
        water_requirements: {type: String, required: true, maxLength: 100},
        hardiness_zone: {type: Array, required: true, maxLength: 20},

        poisonous_bool: {type: Boolean, required: true, maxLength: 1},
        edible_bool: {type: Boolean, required: true, maxLength: 1},
        skin_irritant_bool: {type: Boolean, required: true, maxLength: 1},

        isDangerous: {type: Boolean, required: true, maxLength: 1},
        dangerous_description: {type: String, required: true, maxLength: 1000},
        images: {type: Array, required: true, maxLength: 1000},

    }

);

// Virtual for shrub's URL
ShrubSchema
    .virtual('url')
    .get(function () {
        return '/shrub/' + this._id;
    }
);

//Export model
module.exports = mongoose.model('Shrub', ShrubSchema);