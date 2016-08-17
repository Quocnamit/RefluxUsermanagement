"use strict";

var React = require('react');

var Input = React.createClass({
	
	propTypes: {
		name: React.PropTypes.string.isRequired,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		error: React.PropTypes.string,
		id: React.PropTypes.string,
		type: React.PropTypes.string.isRequired
	},
	
	render: function() {
		var wrapperClass = 'form-group';
		if(this.props.error && this.props.error.length > 0){
			wrapperClass += " " + 'has-error';
		}
		return (
			<div className={wrapperClass}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<div className="field">
					<input type={this.props.type}
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						ref={this.props.name}
						onChange={this.props.onChange}
						value={this.props.value} 
						id={this.props.id}/>
					<div className="input">{this.props.error}</div>
				</div>
			</div>
		);
	}
});

module.exports = Input;