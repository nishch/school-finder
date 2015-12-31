var mongoose = require("mongoose");
var schoolSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("school", schoolSchema);