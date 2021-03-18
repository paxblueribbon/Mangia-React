
import React, { Component } from 'react';
import { Row, Container, Card, CardBody, Button } from 'reactstrap';
import AffinityCard from './AffinityCard';
import { affinityDb } from '../shared/mockdb';

class AffinitySection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainIng: "broccoli"
    }
  }

  getCard(index) {
    if (this.state.mainIng) {
      return (
        <AffinityCard mainIng={this.state.mainIng} affinities={affinityDb[this.state.mainIng].affinities[index]} />
      )
    }
    else {
      return (
        <AffinityCard />
      )
    }
  }
  
  render() {
    return (
      <>
        <Container fluid>
          <Row className="results1 pt-2">
            <div className="col">
              <p className="text-center"><span className="bg-warning">Flavor Affinities</span></p>
            </div>
          </Row>
          <Row className="results1">
            <div className="col-6 col-md-4">
              {this.getCard(0)}
            </div>
            <div className="col-6 col-md-4">
              {this.getCard(1)}
            </div>
            <div class="w-100 d-block d-md-none" />
            <div className="col-6 col-md-4 pt-3 pt-md-0">
              {this.getCard(2)}
            </div>
            <div class="w-100 d-none d-md-block" />
            <div className="col-6 col-md-4 pt-3 h-100">
              {this.getCard(3)}
            </div>
            <div class="w-100 d-block d-md-none" />
            <div className="col-6 col-md-4 pt-3 h-100">
              {this.getCard(4)}
            </div>
            <div className="col-6 col-md-4 pt-3 h-100">
              {this.getCard(5)}
            </div>
          </Row>
          <Row>
            <a className="btn col-6 ptl-3 disabled" role="button" href="#">
              <Card className="affinCard loadMoreCard">
                <CardBody className="loadMore">
                  <h3 className="text-center">Load More</h3>
                </CardBody>
              </Card>
            </a>
            <a className="btn col-6 ptl-3" data-target="#newIngModal" role="button">
              <Card className="affinCard loadMoreCard">
                <CardBody className="loadMore">
                  <h3 className="text-center">Add A Flavor Profile</h3>
                </CardBody>
              </Card>
            </a>
          </Row>
        </Container>
      </>
    )
  }
}

export default AffinitySection