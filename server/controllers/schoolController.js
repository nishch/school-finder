var mongoose = require("mongoose");
var School = require("../data/school");
var _ = require("underscore");

var router = require("express").Router();
router.route("/schools/:id?").get(getSchools).post(addSchool).delete(deleteSchool);

function getSchools(req, res) {
    School.find(function (err, schools) {
        if (err)
            res.send(err);
        else
            res.json(schools);
    });
}

function addSchool(req, res) {
    var school = new School(_.extend({}, req.body));
    school.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(school);
    });
}

function deleteSchool(req, res) {
    var id = req.params.id;
    School.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;