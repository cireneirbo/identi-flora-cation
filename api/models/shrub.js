/*

*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShrubSchema = new Schema(
    {
        
        // names
        common_name: {type: String, required: true, maxLength: 100},
        latin_name: {type: String, required: true, maxLength: 100},
        pseudonyms: {type: String, required: true, maxLength: 100},

        // descriptions
        brief_description: {type: String, required: true, maxLength: 100},
        long_description: {type: String, required: true, maxLength: 1000},
        fruit_description: {type: String, required: true, maxLength: 100},
        flower_description: {type: String, required: true, maxLength: 100},
        leaves_description: {type: String, required: true, maxLength: 100},
        stem_description: {type: String, required: true, maxLength: 100},
        roots_description: {type: String, required: true, maxLength: 100},
        sap_description: {type: String, required: true, maxLength: 100},
        toxic_description: {type: String, required: true, maxLength: 100},
        poisonous_description: {type: String, required: true, maxLength: 100},

        // colors
        sap_color: {type: String, required: true, maxLength: 100},
        roots_color: {type: String, required: true, maxLength: 100},
        flower_color: {type: String, required: true, maxLength: 100},
        fruit_color: {type: String, required: true, maxLength: 100},
        leaves_color: {type: String, required: true, maxLength: 100},
        stem_color: {type: String, required: true, maxLength: 100},

        // booleans
        fruit_bool: {type: String, required: true, maxLength: 100},
        flower_bool: {type: String, required: true, maxLength: 100},
        poisonous_bool: {type: String, required: true, maxLength: 100},
        toxic_bool: {type: String, required: true, maxLength: 100},
        edible_bool: {type: Boolean, required: true},

        // types
        fruit_type: {type: String, required: true, maxLength: 100},
        leaves_type: {type: String, required: true, maxLength: 100},
        stem_type: {type: String, required: true, maxLength: 100},

        // stats
        shape: {type: String, required: true, maxLength: 100},
        height: {type: String, required: true, maxLength: 100},
        hardiness_zones: {type: String, required: true, maxLength: 100},
        flowering_times: {type: String, required: true, maxLength: 100},

        // images
        images: {type: String, required: true, maxLength: 100},
        
    }

);




// Virtual for author's URL
ShrubSchema
    .virtual('url')
    .get(function () {
        return '/shrub/' + this._id;
    }
);

//Export model
module.exports = mongoose.model('Shrub', ShrubSchema);