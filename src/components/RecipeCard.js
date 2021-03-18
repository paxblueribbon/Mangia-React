import { Component } from "react";
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap'

class RecipeCard extends Component {


  render() {
    let recipeLink = `<a class="text-dark" target="_blank" href=${this.props.recipe[0]}>${this.props.recipe[1]}</a>`

    return (
      <Card className="dishCard bg-warning h-100 animate__animated animate__backInDown">
        <CardTitle></CardTitle>
        <CardBody className="card-body">
          <h3 className="card-text"><a></a></h3>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    )
  }
}