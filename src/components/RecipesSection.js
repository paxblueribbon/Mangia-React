
import React, { Component } from 'react';
import { Row, Container, Card, CardBody } from 'reactstrap';
import RecipeCard from './RecipeCard';
import { affinityDb } from '../shared/mockdb';

class RecipesSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainIng: "avocados"
    }
  }

  getCard(index) {
    if (this.state.mainIng) {
      return (
        <RecipeCard mainIng={this.state.mainIng} recipe={affinityDb[this.state.mainIng].dishes[index]} />
      )
    }
    else {
      return (
        <RecipeCard mainIng="avocados" recipe={affinityDb["avocados"].dishes[index]} />
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
            <div className="w-100 d-block d-md-none" />
            <div className="col-6 col-md-4 pt-3 pt-md-0">
              {this.getCard(2)}
            </div>
            <div className="w-100 d-none d-md-block" />
            <div className="col-6 col-md-4 pt-3 h-100">
              {this.getCard(3)}
            </div>
            <div className="w-100 d-block d-md-none" />
            <div className="col-6 col-md-4 pt-3 h-100">
              {this.getCard(4)}
            </div>
            <div className="col-6 col-md-4 pt-3 h-100">
              {this.getCard(5)}
            </div>
          </Row>
          <Row>
            <a className="btn col-6 ptl-3 disabled" role="button" href="localhost:3000">
              <Card className="affinCard loadMoreCard">
                <CardBody className="loadMore">
                  <h3 className="text-center">Load More</h3>
                </CardBody>
              </Card>
            </a>
            <a className="btn col-6 ptl-3" href="localhost:3000" data-target="#newIngModal" role="button">
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

export default RecipesSection