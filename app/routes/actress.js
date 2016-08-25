// Dependencies
var mongoose  = require('mongoose');
var Actress = require('../models/actress');
// App routes
module.exports = function() {
    return {
        /*
         * Get route to retrieve all the superheroes.
         */
        getAll : function(req, res){
            //Query the DB and if no errors, send all the superheroes
            var query = Actress.find(function(err,actresses){
              if(err) res.send(err);
              res.json(actresses);
            });
        },
        /*
         * Post route to save a new superhero into the DB.
         */
        post: function(req, res){
            //Creates a new superhero
            var newActress = new Actress(req.body);
            //Save it into the DB.
            newActress.save(function(err,actress){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(actress);
            });
        },
        /*
         * Get a single superhero based on id.
         */
        getOne: function(req, res){
            Actress.findById(req.params.id, function(err, actress){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(actress);
            });
        }
    }
};
