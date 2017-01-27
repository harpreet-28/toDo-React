var React = require('react');

var SearchButton = React.createClass({



  render: function(){
    return(
      <div>
        <input type="text" className="filterTask col-sm-10" />
        <button type="submit"  className="searchButton col-sm-2 btn btn-primary" >Search</button>
      </div>
    )
  }
});

module.exports = SearchButton;
