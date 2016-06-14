import React from 'react'
import SearchItem from './search-item'
import SearchResult from './search-result'

var propTypes = {};
var defaultProps = {};

var Search = React.createClass({
	getInitialState: function () {
		return {
			list: this.props.list
		}
	},
	filter: function (event) {
		var result = [];
		for (let i = 0; i < this.props.list.length; i++) {
			let item = this.props.list[i];
			if ((item.general.firstName+' '+item.general.lastName).toLowerCase().search(event.target.value.toLowerCase()) == -1) {
				continue;
			}
			result.push(item);
		}
		this.setState({
			list: result
		});
	},
	renderFilter: function () {
		var items = this.state.list.map(function (item) {
			return <SearchItem 
				active={this.state.active && this.state.active.general.firstName==item.general.firstName}
				avatar={item.general.avatar}
				key={item.general.firstName} 
				onClick={(e) => {e.preventDefault(); this.setState({active: item})}}>{item.general.firstName + ' ' +item.general.lastName}</SearchItem>
		}.bind(this));
		return (
			<ul className="nav nav-pills nav-stacked">{items}</ul>
		)
	},
	render: function () {
		return <div className="panel panel-default">
			<div className="panel-heading">List of clients</div>
			<div className="panel-body">
				<div className="row">
					<div className="col-lg-4">
						<div className="panel panel-default">
							<div className="panel-heading">

								<div className="form-group">
									<input onKeyUp={this.filter} type="text" className="form-control" placeholder="Search..." />
								</div>
								
							</div>
							<div className="panel-body">
								{this.renderFilter()}
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						{this.state.active ? <SearchResult {...this.state.active}/> : 'Nothing Found'}
					</div>
				</div>
			</div>
		</div>
	}
});

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;