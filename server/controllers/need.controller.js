const Need = require('../models/need.model');    


module.exports.createNeed = (request, response) => {
    Need.create(request.body)
        .then(need => response.json(need))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllNeeds = (request, response) => {
    Need.find({})
        .then(need => {
            console.log(need); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(need);
        })
        .catch(err => {
            console.log(err);
            response.json(err);
        })
}

module.exports.getNeed = (request, response) => {
    Need.findOne({_id:request.params.id})
        .then(need => response.json(need))
        .catch(err => response.json(err))
}

module.exports.updateNeed = (request, response) => {
    Need.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedNeed => response.json(updatedNeed))
        .catch(err => response.json(err))
}

module.exports.deleteNeed = (request, response) => {
    Need.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



