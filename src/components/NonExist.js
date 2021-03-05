
import React, { Component } from 'react';
import { Row, } from 'reactstrap';

class NonExist extends Component {
  render() {
    return (
      <div>
        <Row className="nonExist justify-content-center d-none">
          <div className="col-6 mx-auto">
            <h3>This item doesn&apos;t seem to exist.</h3>
          </div>
        </Row>
        <row class="row nonExist text-center justify-content-center d-none">
          <div class="col-6 mx-auto">
            <div id="createButton" data-target="#newIngModal" data-toggle="modal" role="button" class="btn btn-success btnCreate">Click here
        to create it</div>
          </div>
        </row>
      </div>
    )
  }
}

export default NonExist