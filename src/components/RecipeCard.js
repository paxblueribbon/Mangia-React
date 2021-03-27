import { Component } from "react";
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap'


class RecipeCard extends Component {
  render() {
    let recipeLink = null

    if (this.props.recipe) {
      recipeLink = <a className="text-dark" href={this.props.recipe[0]}>{this.props.recipe[1]}</a>
    }
    
    console.log(recipeLink)
    return (
      <Card className="dishCard bg-warning h-100 animate__animated animate__backInDown">
        <CardTitle>{this.props.mainIng}</CardTitle>
        <CardBody className="card-body">
          {recipeLink}
        </CardBody>
        {console.log(this.props.recipe)}
        <CardFooter>{this.props.recipe[2]}</CardFooter>
      </Card>
    )
  }
}

export default RecipeCard;