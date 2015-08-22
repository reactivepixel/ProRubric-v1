module.exports = function(app, socket) {

    var Degree = require('../models/degree.js'),
        Course = require('../models/course.js'),
        Rubric = require('../models/rubric.js'),
        Section = require('../models/section.js'),
        LineItem = require('../models/lineItem.js');

    // route /
    app.get('/', function(req, res) {
        res.render('index');
    });

    socket.on('connection', function (data) {
        data.on('add rubric', function (callback) {
            Degree.add(callback);
        });
    });


};