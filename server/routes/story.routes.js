const StoryController = require('../controllers/story.controller');

module.exports = (app) => {
    app.post('/api/story/create', StoryController.createStory);
    app.get('/api/story/all', StoryController.getAllStories);
    app.get('/api/story/:id', StoryController.getStory);
    app.put('/api/story/:id', StoryController.updateStory);
    app.delete('/api/story/:id', StoryController.deleteStory); 
}

