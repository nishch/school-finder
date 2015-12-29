var dispatcher = require("../dispatcher");

module.exports = {
    addSchool:function(school){
        dispatcher.dispatch({
           school:school,
           type:"school:addSchool" 
        });
    },
    deleteSchool:function(school){
        dispatcher.dispatch({
           school:school,
           type:"school:deleteSchool" 
        });
    }
}