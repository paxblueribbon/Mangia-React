
import React, { Component } from 'react';
import { Row, } from 'reactstrap';

class OrTry extends Component {
  render(){
    return (
      <div>
    <Row className="orTry">
          <div className="col">
            <h4 className="text-center">Or Try One Of These</h4>
          </div>
        </Row>
        <Row className="justify-content-center orTry">
          <div className="col-4 col-md-3 text-center">
            <div className="suggestionButton btn btn-outline-success text-center">&#x1F34E; Apple</div>
          </div>
          <div className="col-4 col-md-3 text-center">
            <div className="suggestionButton btn btn-outline-success text-center">&#x1F34C; Banana</div>
          </div>
          <div className="col-4 col-md-3 text-center">
            <div className="suggestionButton btn btn-outline-success text-center">&#x1F965; Coconut</div>
          </div>
        </Row>
      </div>
    )
  }  
}

export default OrTry