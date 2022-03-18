const NeedController = require('../controllers/need.controller');

module.exports = (app) => {
    app.post('/api/need/create', NeedController.createNeed);
    app.get('/api/need/all', NeedController.getAllNeeds);
    app.get('/api/need/:id', NeedController.getNeed);
    app.put('/api/need/:id', NeedController.updateNeed);
    app.delete('/api/need/:id', NeedController.deleteNeed); 
}

