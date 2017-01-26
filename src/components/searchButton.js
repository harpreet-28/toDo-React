var React = require('react');

var SearchButton = React.createClass({



  render: function(){
    return(
      <div>
        <input type="text" className="filterTask col-sm-10" />
        <button type="submit" bsStyle="primary" className="searchButton col-sm-2" >Search</button>
      </div>
    )
  }
});

module.exports = SearchButton;
