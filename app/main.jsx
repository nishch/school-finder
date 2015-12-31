var React = require("react");
var ReactDOM = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var schoolsStore = require("./stores/schoolsStore");
var _schools = [];
var getSchoolsCallback = function(schools){
    _schools = schools;
    render();
};
schoolsStore.onChange(getSchoolsCallback);

function render(){
    ReactDOM.render(<SchoolsList schools={_schools} />, document.getElementById("container"));    
}
