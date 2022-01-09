#! /usr/bin/env node

// run this script with the command : `node injectDB.js`
console.log(`
    Initializing...    
    This script populates some South Florida shrub data to the database.
    ...
    Standby...
`);

// import libraries
const async = require('async')
const Shrub = require('./models/shrub')
require('dotenv').config();

// connect to the database
const mongoose = require('mongoose');
const dbUserName = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DBNAME;
const mongoDB = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.t5chb.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// declare class arrays
const shrubs = [];


function shrubCreate(
  common_name,
  latin_name,
  brief_description,

  plant_type,
  plant_shape,
  bloom_time,

  dimensions,
  flower_bool,
  flower_color,

  flower_dimensions,
  fruit_bool,
  fruit_color,

  leaf_color,
  leaf_dimensions,
  leaf_type,

  bark_color,
  stem_color,
  sun_exposure,

  soil,
  water_requirements,
  hardiness_zone,

  poisonous_bool,
  edible_bool,
  skin_irritant_bool,

  isDangerous,
  dangerous_description,
  images,
  cb) {

  shrubDetail = {
      
    common_name: common_name,
    latin_name: latin_name,
    brief_description: brief_description,

    plant_type: palnt_type,
    plant_shape: plant_shape,
    bloom_time: bloom_time,

    dimensions: dimensions,
    flower_bool: flower_bool,
    flower_color: flower_color,

    flower_dimensions: flower_description,
    fruit_bool: fruit_bool,
    fruit_color: fruit_color,

    leaf_color: leaf_color,
    leaf_dimensions: leaf_dimensions,
    leaf_type: leaf_type,

    bark_color: bark_color,
    stem_color: stem_color,
    sun_exposure: sun_exposure,

    soil: soil,
    water_requirements: water_requirements,
    hardiness_zone: hardiness_zone,

    poisonous_bool: poisonous_bool,
    edible_bool: edible_bool,
    skin_irritant_bool: skin_irritant_bool,

    isDangerous: isDangerous,
    dangerous_description: dangerous_description,
    images: images,

  }
  
  const shrub = new Shrub(shrubDetail);
      
  shrub.save(function (err) {
    if (err) {
    cb(err, null)
    return
    }
    console.log('New Shrub: ' + shrub);
    shrubs.push(shrub)
    cb(null, shrub)
  });
}


// Input the data for each shrub
function createShrubs(cb) {
  async.series([
    function(callback) {
      shrubCreate(
        ["Arboricola", "Dwarf Umbrella tree"],
        "Schefflera arboricola",
        "Scheffleras are large and graceful tropical plants often used in interior decorating. They are superb long-lived houseplants.",
        ["evergreen", "shrub"],
        ["Hedge", "Round"],
        "This plant does not bloom.",
        ["3-8FT tall", "3-8FT wide"],
        false,
        [" - "],
        " - ",
        false,
        [" - "],
        ["Yellow", "Medium Green"],
        ["3-5 inches long", "1-3 inches wide"],
        ["oval"],
        ["Yellow", "Medium Green"],
        ["Yellow", "Medium Green"],
        "Sun or Shade",
        "well-drained",
        "average",
        ["9b", "10a", "10b", "11a", "11b"],
        true,
        false,
        false,
        true,
        "Schefflera poisoning is due to the species containing 'sharp' calcium oxalate crystals that are insoluble and damage the cells and tissues of the animals ingesting them. For their own safety, children and household pets should be kept away from consuming this plant. In animals, the resulting damage (swelling) of exposed tissues and digestive tract may be fatal to the animal. Signs of poisoning in pets can include: oral irritation, intense burning and irritation of the mouth, lips, tongue, excessive drooling, vomiting, difficulty in swallowing",

        ["string to find image in api/public/images/aroricola_0.png directory"],
        
        callback
      );
    },
    function(callback) {
      shrubCreate(
        'Ben', 
        callback
      );
    },
    ],
    // optional callback
    cb
  );
}

// call the create functions
async.series([
  createShrubs,
],
// Optional callback
function(err, results) {
  if (err) {
    console.log('FINAL ERR: ' + err);
  }
  else {
    console.log('Shrubs: ' + scrubs);
  }
  // All done, disconnect from database
  mongoose.connection.close();
});