var dispatcher = require("../dispatcher");
var schoolService = require("../services/schoolService");

function SchoolStore() {
    var listeners = [];

    function onChange(listener) {
        getSchools(listener);
        listeners.push(listener);
    }
    
    function getSchools(cb){
        schoolService.getSchools().then(function (res) {
            cb(res);
        });
    }

    function addSchool(school) {
        schoolService.addSchool(school).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteSchool(school) {
        schoolService.deleteSchool(school).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getSchools(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "school") {
            switch (split[1]) {
                case "addSchool":
                    addSchool(payload.school);
                    break;
                case "deleteSchool":
                    deleteSchool(payload.school);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = SchoolStore();