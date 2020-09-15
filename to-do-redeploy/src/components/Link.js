import React from "react"
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav'


class Link extends React.Component {
  render() {
    return (

      <Nav.Item>
        <Nav.Link eventKey={this.props.children} onClick={this.props.onClick} disabled={this.props.active}>
          {this.props.children}
        </Nav.Link>
      </Nav.Item>

    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link

