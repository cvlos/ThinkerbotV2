import React, { Component } from 'react';

export class TopPart extends Component {
	render(){
		return(
			<div className="container-fluid">
				<div className="navbar navbar-expand-lg narbar-light bg-light">
					<h1 className="navbar-brand font-weight-bold">ThinkerBot</h1>
				</div>
        <div className="jumbotron">
          <h1 className="display-4">Des Formulas plsy humanins</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
			</div>
		);
	}
}
