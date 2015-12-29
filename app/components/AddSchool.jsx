var React = require("react");
var actions = require("../actions/SchoolActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          address:""
      }  
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addSchool}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">School Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="School Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="address">Address:</label>
                    <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleInputChange} placeholder="School Address" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add School</button>
                </div>
            </form>
        )
    }
})