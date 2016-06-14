import React from 'react'
import classNames from 'classnames'

var propTypes = {};
var defaultProps = {};

var SearchItem = React.createClass({
	render: function () {
		return <li onClick={this.props.onClick} className={classNames({active: this.props.active})}>
			<a href="#" className="row">
				<div className="col-lg-2"><img src={this.props.avatar} alt='' className="img-responsive img-circle"/></div>
				<div className="col-lg-10">{this.props.children}</div>
			</a>
		</li>
	}
});

SearchItem.propTypes = propTypes;
SearchItem.defaultProps = defaultProps;

export default SearchItem;