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
    pseudonyms,
    brief_description,
    long_description,
    fruit_description,
    flower_description,
    leaves_description,
    stem_description,
    roots_description,
    sap_description,
    toxic_description,
    poisonous_description,
    sap_color,
    roots_color,
    flower_color,
    fruit_color,
    leaves_color,
    stem_color,
    fruit_bool,
    flower_bool,
    poisonous_bool,
    toxic_bool,
    edible_bool,
    fruit_type,
    leaves_type,
    stem_type,
    shape,
    height,
    hardiness_zones,
    flowering_times,
    images,
    cb) {

    shrubDetail = {
        first_name: first_name ,
        family_name: family_name,
        common_name: common_name,
        latin_name: latin_name,
        pseudonyms: pseudonyms,
        brief_description: brief_description,
        long_description: long_description,
        fruit_description: fruit_description,
        flower_description: flower_description,
        leaves_description: leaves_description,
        stem_description: stem_description,
        roots_description: roots_description,
        sap_description: sap_description,
        toxic_description: toxic_description,
        poisonous_description: poisonous_description,
        sap_color: sap_color,
        roots_color: roots_color,
        flower_color: flower_color,
        fruit_color: fruit_color,
        leaves_color: leaves_color,
        stem_color: stem_color,
        fruit_bool: fruit_bool,
        flower_bool: flower_bool,
        poisonous_bool: poisonous_bool,
        toxic_bool: toxic_bool,
        edible_bool: edible_bool,
        fruit_type: fruit_type,
        leaves_type: leaves_type,
        stem_type: stem_type,
        shape: shape,
        height: height,
        hardiness_zones: hardiness_zones,
        flowering_times: flowering_times,
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
          shrubCreate('Patrick', 'Rothfuss', '1973-06-06', false, callback);
        },
        function(callback) {
          shrubCreate('Ben', 'Bova', '1932-11-8', false, callback);
        },
        ],
        // optional callback
        cb);
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