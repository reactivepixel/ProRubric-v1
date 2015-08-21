module.exports = function(app) {

    var degModel = require('../models/degree.js'),
        courseModel = require('../models/course.js'),
        rubricModel = require('../models/rubric.js'),
        sectionModel = require('../models/section.js'),
        lineItemModel = require('../models/lineItem.js');

    // route /
    app.get('/', function(req, res) {
        res.render('index', {
        		seoPageTitle: 'ProRubrics - A Full Sail University Production',
            h1: 'Dashboard'
        });
    });

    app.get('/rubric:rubricName', function(req, res) {
        var data = 'Yeah you got the data',
            rubricName = req.params.rubricName;

        courModel.insertCourse(rubricName,rubricName,rubricName);

        res.send('added: '+ rubricName);
    });
    
    app.get('/degProcess',function(req,res){//need to wait until form is completed to change route into post

        var degName = 'Web Design and Deployment';//hard coded values for testing purposes
        var degAck = 'WDD';//hard coded values for testing purposes

        degModel.insertDegrees(degName,degAck);

    });

    
    
    app.get('/courseProcess',function(req,res){

        var courName = 'Deployment of Web Projects',
            courAck = 'DWP',
            courContent = 'This is a rubric for out class that we are currently in';

        courModel.insertCourse(courName,courAck,courContent);

    });

    
    app.get('/degUpdate',function(req,res){


        degModel.update(req.degreeId);

    });
    
    
    
    app.get('/degRemove',function(req,res){


        allModel.removeDegree(req.degreeId);

    });
    

};