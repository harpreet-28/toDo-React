var React = require('react');

var CheckBox = React.createClass({

  render: function(){
    return(

          <div className="checkBox col-sm-6 col-lg-3">
              <label>
                  <input type="checkbox" /> Select All
              </label>
          </div>


    )
  }
});

module.exports = CheckBox;
