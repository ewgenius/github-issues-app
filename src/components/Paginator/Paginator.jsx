import React, { Component, PropTypes } from 'react'
import {Row, Col, ButtonGroup, Button, Pagination} from 'react-bootstrap'
import './Paginator.scss'

export default class Paginator extends Component {
  static propTypes = {
    page: PropTypes.number,
    total: PropTypes.number,
    limit: PropTypes.number,
    goTo: PropTypes.func,
    goToLimit: PropTypes.func
  }

  render() {
    return <div className='paginator'>
      <Row>
        <Col md={8}>
          { this.props.total > 0 ?<Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={this.props.total}
            maxButtons={5}
            activePage={this.props.page}
            onSelect={page => this.props.goTo(page)} /> : null }
        </Col>
        <Col md={4}>
          <ButtonGroup>
            {
              [2, 10, 50, 100].map(l => {
                const selected = this.props.limit === l
                return <Button
                  key={l}
                  disabled={selected}
                  bsStyle={selected ? 'primary' : 'default'}
                  onClick={() => this.props.goToLimit(1, l)}>{l}
                </Button>
              })
            }
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  }
}
