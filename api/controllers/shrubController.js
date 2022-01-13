// Import libraries
const { body,validationResult } = require('express-validator');
const async = require('async');

// Import project files
const Shrub = require('../models/shrub');
const e = require('express');

// /catalog/home page
exports.index = function(req, res) {

    /*async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {*/
        res.render('index', { title: 'Identi-Flora-Cation Home', /*error: err, data: results*/ });
    //});
};




// Display list of all Authors.
exports.shrub_list = function(req, res, next) {
    
    Shrub.find()
        .sort([['common_name', 'ascending']])
        .exec(function (err, list_shrubs) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('shrub_list', { title: 'Shrub List', shrub_list: list_shrubs} );
        });
  
};



/** */


// Display detail page for a specific Shrub.
exports.shrub_detail = function(req, res, next) {

    async.parallel({
        shrub: function(callback) {
            Shrub.findById(req.params.id)
              .exec(callback)
        },
        /*authors_books: function(callback) {
          Book.find({ 'author': req.params.id },'title summary')
          .exec(callback)
        },*/
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.shrub==null) { // No results.
            let err = new Error('Shrub not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
    res.render('shrub_detail', { title: 'Shrub Detail', shrub: results.shrub, /*author_books: results.authors_books*/ } );
    });

};
/*
// Display Shrub create form on GET.
exports.shrub_create_get = function(req, res, next) {
    res.render('shrub_form', { title: 'Create Shrub'});
};
/*
// Handle Shrub create on POST.
exports.shrub_create_post = [

    // Validate and sanitize fields.
    
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),
    //
    body('common_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    common_name: {type: Array, required: true, maxLength: 100},
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

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('shrub_form', { title: 'Create Shrub', shrub: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create a Shrub object with escaped and trimmed data.
            const shrub = new Shrub(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    date_of_birth: req.body.date_of_birth,
                    date_of_death: req.body.date_of_death
                });
            shrub.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect(shrub.url);
            });
        }
    }
];
*/
// Display Shrub delete form on GET.
exports.shrub_delete_get = function(req, res, next) {

    async.parallel({
        shrub: function(callback) {
            Shrub.findById(req.params.id).exec(callback)
        },
        /*authors_books: function(callback) {
            Book.find({ 'author': req.params.id }).exec(callback)
        },*/
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.shrub==null) { // No results.
            res.redirect('/catalog/shrubs');
        }
        // Successful, so render.
        res.render('shrub_delete', { title: 'Delete Shrub', shrub: results.shrub, /*author_books: results.authors_books*/ } );
    });

};

// Handle Shrub delete on POST.
exports.shrub_delete_post = function(req, res, next) {

    async.parallel({
        shrub: function(callback) {
          Shrub.findById(req.body.shrubid).exec(callback)
        },
        /*authors_books: function(callback) {
          Book.find({ 'author': req.body.authorid }).exec(callback)
        },*/
    }, function(err, results) {
        if (err) { return next(err); }
        // Success
        /*if (results.shrubs_books.length > 0) {
            // Author has books. Render in same way as for GET route.
            res.render('shrub_delete', { title: 'Delete Shrub', author: results.author, /*author_books: results.authors_books*/ //} );
            //return;
        //}*/
        //else {
            // Author has no books. Delete object and redirect to the list of shrubs.
            Shrub.findByIdAndRemove(req.body.shrubid, function deleteShrub(err) {
                if (err) { return next(err); }
                // Success - go to shrub list
                res.redirect('/catalog/shrubs')
            })
        //}
    });
    
};
/*
// Display Shrub update form on GET.
exports.shrub_update_get = function(req, res, next) {
    
    // Get book, authors and genres for form.
    async.parallel({
        author: function(callback) {
            Author.findById(req.params.id).populate('first_name').populate('family_name').exec(callback);
        },
        books: function(callback) {
            Book.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.author==null) { // No results.
            let err = new Error('Author not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('author_form', { title: 'Update Author', books: results.books, author: results.author });
    });

};

// Handle Author update on POST.
exports.author_update_post = [

    // Validate and sanitise fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create an Author object with escaped/trimmed data and old id.
        const author = new Author(
            { 
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                date_of_death: req.body.date_of_death,
                _id:req.params.id //This is required, or a new ID will be assigned!
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            res.render('author_form', { title: 'Update Author', books: results.books, author: author, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Author.findByIdAndUpdate(req.params.id, author, {}, function (err, theauthor) {
                if (err) { return next(err); }
                   // Successful - redirect to author detail page.
                   res.redirect(theauthor.url);
                });
        }
    }
];
*/

// /catalog/about page
exports.about = function(req, res) {

    /*async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {*/
        res.render('about', { title: 'Identi-Flora-Cation About', /*error: err, data: results*/ });
    //});
};

// 
// Display Shrub search form on GET.
exports.shrub_search_get = function(req, res, next) {
    

    Shrub.find()
        .sort([['common_name', 'ascending']])
        .exec(function (err, list_shrubs) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('shrub_form', { title: 'Search', shrub_list: list_shrubs} );
        });


    // Get shrubs for form.
    // async.parallel({
    //     shrub: function(callback) {
    //         Shrub.findById(req.params.id).populate('common_name[0]').populate('brief_description').exec(callback);
    //     },
    //     /*books: function(callback) {
    //         Book.find(callback);
    //     },*/
    // }, function(err, results) {
    //     if (err) { return next(err); }
    //     if (results.shrub==null) { // No results.
    //         let err = new Error('Shrub not found');
    //         err.status = 404;
    //         return next(err);
    //     }
    //     // Success.
    //     res.render('shrub_form', { title: 'Search', /*books: results.books,*/ shrub: results.shrub });
    // });

};

// Handle Shrub search on POST.
exports.shrub_search_post = [

    // Validate and sanitise fields.
    body('plant_type').exists(),
    body('plant_shape').exists(),
    body('leaf_color').exists(),
    body('leaf_type').exists(),
    body('leaf_dimensions').exists(),
    body('bark_color').exists(),
    body('stem_color').exists(),
    body('fruit_color').exists(),
    body('flower_color').exists(),
    body('flower_dimensions').exists(),
    // body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
    //     .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    // body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    // body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // // Create an Author object with escaped/trimmed data and old id.
        // const author = new Author(
        //     { 
        //         first_name: req.body.first_name,
        //         family_name: req.body.family_name,
        //         date_of_birth: req.body.date_of_birth,
        //         date_of_death: req.body.date_of_death,
        //         _id:req.params.id //This is required, or a new ID will be assigned!
        //     }
        // );
        // Create an Author object with escaped/trimmed data and old id.
        const shrub_search_list = { 
            plant_type: req.body.plant_type,
            plant_shape: req.body.plant_shape,
            leaf_color: req.body.leaf_color,
            leaf_type: req.body.leaf_type,
            leaf_dimensions: req.body.leaf_dimensions,
            bark_color: req.body.bark_color,
            stem_color: req.body.stem_color,
            fruit_color: req.body.fruit_color,
            flower_color: req.body.flower_color,
            flower_dimensions: req.body.flower_dimensions,
            // hello: "hello",
            // bod: req.body,
            // shrub_list: res.shrub_list
        }
        

        let searchedData = [];

        Shrub.find({ leaf_color: ["Yellow", "Medium Green"] })
        .sort([['common_name', 'ascending']])
        .exec(function (err, list_shrubs) {
            if (err) { return next(err); }
            //Successful, so render
            /*for(let i = 0; i < list_shrubs.length; i++) {
                //for(let j = 0; j < shrub_search_list.length; j++) {
                    if(list_shrubs[i].leaf_color[0].includes(shrub_search_list.leaf_color)) {
                        //if (!searchedData.includes(list_shrubs[i])) {
                            searchedData.push(list_shrubs[i]);
                        //}
                    }
                //}
            }*/
            //res.render('shrub_form', { title: 'Search', shrub_search_list: shrub_search_list, searchedData: searchedData } );
            res.send({ shrub_search_list: shrub_search_list, shrub_list: list_shrubs, searchedData: searchedData } );
        });
        // alert("POST!!!");
        // if (!errors.isEmpty()) {
        //     // There are errors. Render form again with sanitized values/error messages.
        //     res.render('author_form', { title: 'Update Author', books: results.books, author: author, errors: errors.array() });
        //     return;
        // }
        // else {
        //     // Data from form is valid. Update the record.
        //     Author.findByIdAndUpdate(req.params.id, author, {}, function (err, theauthor) {
        //         if (err) { return next(err); }
        //            // Successful - redirect to author detail page.
                    // res.redirect('/catalog/search/results');
                    //res.render('search_results', { shrub_search_list: shrub_search_list });
                    //res.send({ shrub_search_list: shrub_search_list });

        //         });
        // }
    }
];
/*
exports.results = function(req, res, next) {
    

   // Shrub.find()
       // .sort([['common_name', 'ascending']])
        //.exec(function (err, list_shrubs) {
        //    if (err) { return next(err); }
            //Successful, so render
            res.render('search_results', { title: 'Search Results'} );
       // });


    
};*/