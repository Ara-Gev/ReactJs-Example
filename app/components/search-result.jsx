import React from 'react'

var propTypes = {};
var defaultProps = {};

var SearchResult = React.createClass({
	render: function () {
		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">General</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-3">
								<img className="img-thumbnail" src={this.props.general.avatar} alt=''/>
							</div>
							<div className="col-lg-9">
								<div>First name: {this.props.general.firstName}</div>
								<div>Last name: {this.props.general.lastName}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-heading">Job</div>
					<div className="panel-body">
						<div>Company: {this.props.job.company}</div>
						<div>Title: {this.props.job.title}</div>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-heading">Contact</div>
					<div className="panel-body">
						<div>Email: {this.props.contact.email}</div>
						<div>Phone: {this.props.contact.phone}</div>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-heading">Address</div>
					<div className="panel-body">
						<div>Street: {this.props.address.street}</div>
						<div>City: {this.props.address.city}</div>
						<div>ZipCode: {this.props.address.zipCode}</div>
						<div>Country: {this.props.address.country}</div>
					</div>
				</div>
			</div>
		)
	}
});

SearchResult.propTypes = propTypes;
SearchResult.defaultProps = defaultProps;

export default SearchResult;