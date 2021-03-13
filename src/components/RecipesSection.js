import { Component } from "react";

class RecipesSection extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Row className="results1 d-none">
        <div className="col">
          <p className="text-center"><span className="bg-success">Recipes</span></p>
        </div>
      </Row>
      <Row className="results1 d-none">
        <div className="col-6 col-md-4">
          <Card className="dishCard bg-warning h-100 animate__animated animate__backInDown">
            <div className="card-title"></div>
            <div className="card-body">
              <h3 className="card-text">Card 1</h3>
            </div>
            <div className="card-footer"></div>
          </Card>
        </div>
        <div className="col-6 col-md-4">
          <Card className="dishCard bg-warning h-100 animate__animated animate__backInDown">
            <div className="card-title"></div>
            <div className="card-body">
              <h3 className="card-text">Card 2</h3>
            </div>
            <div className="card-footer"></div>
          </Card>
        </div>
        <div className="w-100 d-block d-md-none"></div>

        <div className="col-6 col-md-4 pt-3 pt-md-0">
          <Card className="bg-warning dishCard h-100 animate__animated animate__backInDown">
            <div className="card-title"></div>
            <div className="card-body">
              <h3 className="card-text">Card 3</h3>
            </div>
            <div className="card-footer"></div>
          </Card>
        </div>
        <div className="w-100 d-none d-md-block"></div>
        <div className="col-6 col-md-4 pt-3 h-100 animate__animated animate__backInDown">
          <Card className="dishCard bg-warning">
            <div className="card-title"></div>
            <div className="card-body">
              <h3 className="card-text">Card 4</h3>
            </div>
            <div className="card-footer"></div>
          </Card>
        </div>
        <div className="w-100 d-block d-md-none"></div>
        <div className="col-6 col-md-4 pt-3 h-100 animate__animated animate__backInDown">
          <Card className="dishCard bg-warning">
            <div className="card-title"></div>
            <div className="card-body">
              <h3 className="card-text">Card 5</h3>
            </div>
            <div className="card-footer"></div>
          </Card>
        </div>
        <div className="col-6 col-md-4 pt-3 h-100">
          <Card className="dishCard bg-warning animate__animated animate__backInDown">
            <div className="card-title"></div>
            <div className="card-body">
              <h3 className="card-text">Card 6</h3>
            </div>
            <div className="card-footer"></div>
          </Card>
        </div>
      </Row>
      <Row className="results1 d-none">
        <a className="btn col-6 disabled" role="button" href="#">
          <Card className="dishCard loadMoreCard">
            <div className="card-body loadMore">
              <h3 className="text-center">Load More</h3>
            </div>
          </Card>
        </a>
        <a className="btn btnCreate col-6" role="button" data-target="#newRecipeModal" data-toggle="modal">
          <Card className="d-flex dishCard loadMoreCard">
            <div className="card-body loadMore">
              <h3 className="text-center align-self-center">Add A Recipe Link</h3>
            </div>
          </Card>
        </a>
      </Row>
    </div>
    )
  }
}