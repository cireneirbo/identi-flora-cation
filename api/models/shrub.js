//const arboricola_drawing = require('../public/images/arboricola_drawing.jpg');

/*
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShrubSchema = new Schema(

    {
        
        common_name: {type: Array, required: true, maxLength: 100},
        latin_name: {type: String, required: true, maxLength: 100},
        brief_description: {type: String, required: true, maxLength: 1000},

        plant_type: {type: Array, required: true, maxLength: 10},
        plant_shape: {type: Array, required: true, maxLength: 10},
        bloom_time: {type: Array, required: true, maxLength: 100},

        dimensions: {type: Array, required: true, maxLength: 2},
        flower_bool: {type: Boolean, required: true, maxLength: 1},
        flower_color: {type: Array, required: true, maxLength: 10},

        flower_dimensions: {type: Array, required: true, maxLength: 100},
        fruit_bool: {type: Boolean, required: true, maxLength: 1},
        fruit_color: {type: Array, required: true, maxLength: 10},

        leaf_color: {type: Array, required: true, maxLength: 10},
        leaf_dimensions: {type: Array, required: true, maxLength: 10},
        leaf_type: {type: Array, required: true, maxLength: 10},

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
        return '/catalog/shrub/' + this._id;
    }
);

//Export model
module.exports = mongoose.model('Shrub', ShrubSchema);

*/
/*
new model
*/

// create an object of each shrub

const arbicola = {
    common_name: "Arboricola",
    latin_name: "Schefflera arboricola",
    brief_description: "Scheffleras are large and graceful tropical plants often used in interior decorating. They are superb long-lived houseplants.",
    plant_type: ["Evergreen", "Shrub"],
    plant_shape: ["Hedge", "Round"],
    bloom_time: [""],
    dimensions: [ {tall: "3-8 ft"}, {wide: "3-8 ft"} ],
    flower_bool: false,
    flower_color: [""],
    flower_dimensions: [""],
    fruit_bool: false,
    fruit_color: [],
    leaf_color: ["Yellow", "Medium Green"],
    leaf_dimensions: [ {long: "3-5 in"}, {wide: "1-3 in"}],
    bark_color: ["Yellow", "Medium Green"],
    stem_color: ["Yellow", "Medium Green"],
    sun_exposure: "sun or shade",
    soil: "well-drained",
    water_requirements: "average",
    hardiness_zone: ["9b", "10a", "10b", "11a", "11b"],
    poisonous_bool: true,
    edible_bool: false,
    skin_irritant_bool: false,
    isDangerous: true,
    dangerous_description: "Schefflera poisoning is due to the species containing 'sharp' calcium oxalate crystals that are insoluble and damage the cells and tissues of the animals ingesting them. For their own safety, children and household pets should be kept away from consuming this plant. In animals, the resulting damage (swelling) of exposed tissues and digestive tract may be fatal to the animal. Signs of poisoning in pets can include: oral irritation, intense burning and irritation of the mouth, lips, tongue, excessive drooling, vomiting, difficulty in swallowing",
    images: ["/images/arboricola_drawing.jpg", "/images/arboricola_1.jpg", "/images/arboricola_2.jpg"],
    url: '/catalog/shrub/arboricola',
}
/*
const plant = {
    common_name: "Arboricola",
    latin_name: "Schefflera arboricola",
    brief_description: "",
    plant_type: [],
    plant_shape: [],
    bloom_time: [],
    dimensions: [],
    flower_bool: ,
    flower_color: [],
    flower_dimensions: [],
    fruit_bool: ,
    fruit_color: [],
    leaf_color: [],
    leaf_dimensions: [],
    bark_color: [],
    stem_color: [],
    sun_exposure: "",
    soil: "",
    water_requirements: "",
    hardiness_zone: [],
    poisonous_bool: ,
    edible_bool: ,
    skin_irritant_bool: ,
    isDangerous: ,
    dangerous_description: "",
    images: ["", "", ""],
}
*/


// export all shrubs
exports.shrubs = [arbicola];