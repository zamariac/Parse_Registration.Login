var React = require('react');

module.exports = React.createClass({
	// componentWillMount: function () {
	//  //    this.props.user.on('change', function() {
	// 	// 	this.forceUpdate();
	// 	// }, this);
	// },
	render: function() {
		return(
			<nav className="navbar navbar-default">
				  <a className="navbar-brand" href="#home">Marias Blog</a>
				     <form className="navbar-form navbar-left" role="search">
				        <div className="form-group">
				          <input type="text" className="form-control" placeholder="Search"/>
				        </div>
				        <button type="submit" className="btn btn-default">Submit</button>
				      </form>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#">Sign In</a></li>
				        <li><a href="#">Register</a></li>
				      </ul>
				        
				</nav>
)
	} 



});
