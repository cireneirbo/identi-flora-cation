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

    plant_type: plant_type,
    plant_shape: plant_shape,
    bloom_time: bloom_time,

    dimensions: dimensions,
    flower_bool: flower_bool,
    flower_color: flower_color,

    flower_dimensions: flower_dimensions,
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
        ["Jasmine"],
        "Jasminum ",
        "Jasminium is a genus with over 200 species in the Oleaceae (olive) family.  The plants are native to tropical and subtropical areas and can be either trees, shrubs, or vines; many of the vining types make good container plants.  Members of this genus can be evergreen or deciduous.  Jasmines are most well known for their heady fragranced flowers.",
        ["Tree", "Evergreen", "Shrub", "Vine"],
        ["Various"],
        ["Spring", "Summer", "Fall", "Winter"],
        ["3-10FT tall", "3-10FT wide"],
        true,
        ["Gold/Yellow", "Pink", "White"],
        ["1-3 inches"],
        true,
        ["Black"],
        ["Green"],
        ["2-5 inches"],
        ["compound"],
        ["Green", "Pale Green"],
        ["Green", "Pale Green"],
        "Full Sun",
        "Good drainage, Moist, Occasionally dry",
        "medium moisture to wet",
        ["9b", "9a", "10a", "10b", "11b", "11a"],
        false,
        false,
        true,
        true,
        "This plant is not dangerous.",
        [],
        
        callback
      );
    },
    /*function(callback) {
      shrubCreate(
        'Ben', 
        callback
      );
    },*/
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
    console.log('Shrubs: ' + shrubs);
  }
  // All done, disconnect from database
  mongoose.connection.close();
});