const Story = require('../models/story.models');    


module.exports.createStory = (request, response) => {
    Story.create(request.body)
        .then(story => response.json(story))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllStories = (request, response) => {
    Story.find({})
        .then(story => response.json(story))
        .catch(err => response.json(err));
}

module.exports.getStory = (request, response) => {
    Story.findOne({_id:request.params.id})
        .then(story => response.json(story))
        .catch(err => response.json(err));
}

module.exports.updateStory = (request, response) => {
    Story.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedStory => response.json(updatedStory))
        .catch(err => response.json(err));
}

module.exports.deleteStory = (request, response) => {
    Story.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
}



