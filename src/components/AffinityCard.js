import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class AffinityCard extends Component {

  render() {
    const list = this.props.affinities.map(affinity => {
      return (
        <div>
          {affinity} <br />
        </div>
      )
    })

    return (
      <Card className="affinCard bg-success h-100 animate__animated animate__backInDown">
        <CardTitle>
          {this.props.mainIng}
        </CardTitle>
        <CardBody>
          {list}
        </CardBody>
      </Card>
    )
  }
}

export default AffinityCard;