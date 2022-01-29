// Import libraries

// Import project files
const Shrub = require('../models/shrub');

// /catalog/home page
exports.index = function(req, res) {

    res.render('index', { title: 'Home' });
    
};

// Display list of all Shrubs.
exports.shrub_list = function(req, res, next) {
    
    const list_shrubs = Shrub.shrubs;
    
    res.send( { title: 'Shrub List', shrub_list: list_shrubs} );
        
};

// Display detail page for a specific Shrub.
exports.shrub_detail = function(req, res, next) {

    const shrub = [];
    for( let i = 0; i < Shrub.shrubs.length; i++) {

        if(Shrub.shrubs[i].queryName.includes(req.params.queryName)) {
            shrub.push(Shrub.shrubs[i]);
            console.log("High-five")
        }
        else {
            console.log(Shrub.shrubs[i].common_name.toLowerCase());
            console.log(req.params)
        }
    }
    
    res.send( { title: 'Shrub Detail', shrub: shrub } );
    
};

// /catalog/about page
exports.about = function(req, res) {

    res.render('about', { title: 'About' });
    
};

// Display Shrub search form on GET.
exports.shrub_search_get = function(req, res, next) {
    

    // create empty array to add shrubs to
    let searchedShrubs = [];
    let message = "";
    let shrubParamKeys = [];
    let searchParamsValues = [
        req.params.leafColors,
        req.params.barkColors,
        req.params.stemColors,
        req.params.flowerColors,
        req.params.fruitColors,
        req.params.plantTypes,
        req.params.plantShapes,
        req.params.leafDimensionsLong,
        req.params.flowerDimensionsLong
    ];

    // check params for matches and then add to seachedShrubs array if not in it
    for( let i = 0; i < Shrub.shrubs.length; i++) {

        // if the shrub matches the param
        // leaf color
        if(Shrub.shrubs[i].leaf_color.includes(req.params.leafColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }
        //bark color
        if(Shrub.shrubs[i].bark_color.includes(req.params.barkColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }
        //stem color
        if(Shrub.shrubs[i].stem_color.includes(req.params.stemColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }
        //fruit color
        if(Shrub.shrubs[i].fruit_color.includes(req.params.fruitColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }
        //flower color
        if(Shrub.shrubs[i].flower_color.includes(req.params.flowerColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }
        //plant type
        if(Shrub.shrubs[i].plant_type.includes(req.params.plantTypes)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }
        // plant shapes
        if(Shrub.shrubs[i].plant_shape.includes(req.params.plantShapes)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }
        // leaf dimensions - long
        /*console.log(Shrub.shrubs[i].leaf_dimensions[0].long)
        if(Shrub.shrubs[i].leaf_dimensions[0].long.includes(req.params.leafDimensionsLong)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }*/
        // flower dimensions - long
        /*if(Shrub.shrubs[i].flower_dimensions[0].long.includes(req.params.flowerDimensionsLong)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
            }
        }*/
        else {
            //console.log(Shrub.shrubs[i].common_name);
            //console.log("No match: " + req.params);
        }

    }

    if(searchedShrubs.length == 0) {
        message = "We could not find any matches...";
    }
    
    res.send( { message: message, shrub_list: searchedShrubs} );
        
};
