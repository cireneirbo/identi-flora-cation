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

// 
// Display Shrub search form on GET.
exports.shrub_search_get = function(req, res, next) {
    
    //const list_shrubs = Shrub.shrubs;

    // create empty array to add shrubs to
    let searchedShrubs = [];
    let message = "";
    let shrubParamKeys = [];
    let searchParamsValues = [
        req.params.leafColors,
        req.params.barkColors,
        req.params.stemColors,
        req.params.fruitColors,
        req.params.plantTypes,
        req.params.plantShapes,
        req.params.leafDimensions,
        req.params.flowerDimensions
    ];

    // check params for matches and then add to seachedShrubs array if not in it
    for( let i = 0; i < Shrub.shrubs.length; i++) {
        // set values to reduce code repetition
        /*shrubParamKeys = [
            Shrub.shrubs[i].leaf_color,
            Shrub.shrubs[i].bark_color,
            Shrub.shrubs[i].stem_color,
            Shrub.shrubs[i].fruit_color,
            Shrub.shrubs[i].flower_color,
            Shrub.shrubs[i].plant_type,
            Shrub.shrubs[i].plant_shape,
            Shrub.shrubs[i].leaf_dimensions,
            Shrub.shrubs[i].flower_dimensions,
        ];

        for(let j = 0; j < shrubParamKeys.length; j++) {
            // if the shrub matches the param
            if(shrubParamKeys[i].includes(searchParamsValues[j])) {
                // if not in searchedShrubs, add
                if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                    searchedShrubs.push(Shrub.shrubs[i]);
                    message = "We have found the shrubs you are looking for!";
                    console.log("Added: " + Shrub.shrubs[i].common_name);
                }
            }

            console.log(searchParamsValues[j]);
        }
        console.log(shrubParamKeys[i]);*/

        // if the shrub matches the param
        // leaf color
        if(Shrub.shrubs[i].leaf_color.includes(req.params.leafColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        //bark color
        if(Shrub.shrubs[i].bark_color.includes(req.params.barkColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        //stem color
        if(Shrub.shrubs[i].stem_color.includes(req.params.stemColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        //fruit color
        if(Shrub.shrubs[i].fruit_color.includes(req.params.fruitColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        //flower color
        if(Shrub.shrubs[i].flower_color.includes(req.params.flowerColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        //plant type
        if(Shrub.shrubs[i].plant_type.includes(req.params.plantTypes)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        // plant shapes
        if(Shrub.shrubs[i].plant_shape.includes(req.params.plantShapes)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        // leaf dimensions
        if(Shrub.shrubs[i].leaf_dimensions.includes(req.params.leafDimensions)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        // flower dimensions
        if(Shrub.shrubs[i].flower_dimensions.includes(req.params.flowerDimensions)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                //console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
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
