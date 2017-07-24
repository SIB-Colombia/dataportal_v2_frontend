import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import InsertLink from 'material-ui/svg-icons/editor/insert-link'
import { Link } from 'components'

const Wrapper = styled.div`
  .title {
      font-weight: 400;
      font-size: 18px;
      color: #4B5353;
      margin-top: 85px;
  }

  .accent-title {
      margin-top: 10px;
      border-top: 2px solid #ff7847;
  }

  .sub-title{
    font-size: 36px;    
    margin: 20px;
    font-weight: 400;
  }

  .title-two {
    font-weight: 400;
    font-size: 30px;
    color: #4B5353;
    padding-left: 20px;
  }

  .separated{
    margin-bottom: 30px;
  }

  .paper {
      color: #3E5151;
      font-size: 24px;
      padding: 10px;
  }

  .number {
      font-weight: 400;
      font-size: 28px;   
  }

  .more-datails{
    text-align: left;
    
    .description {
      padding: 20px;
      line-height: 35px;
    }

    .hiper-link{
      font-weight: 400;
      color: #10AFBD;      
    }

    .direct-links {
      line-height: 40px;
      font-weight: 600;
      padding: 10px;
      margin-bottom: 50px;

      a{
        margin-left: 15px;
        color: #10AFBD;
      }
    }
  }
`

export default class ProviderSection extends Component {
  static propTypes = {
    provider: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row center="xs">
            <Col className="title" xs={12} sm={12} md={12} lg={12}>PUBLICADOR</Col>
            <Col className="accent-title" xs={2} sm={1} md={1} lg={1} />
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="sub-title">{this.props.provider.providerName}</Col>
          </Row>
        </Grid>
        <Paper className="separated">
          <Grid fluid>
            <Row className="paper">
              <Col xs={12} sm={6} md={4} lg={3}><span className="number">{this.props.provider.globalInfo.records}</span> REGISTROS</Col>
              <Col xs={12} sm={6} md={4} lg={3}><span className="number">{this.props.provider.globalInfo.datasets}</span> RECURSOS</Col>
              <Col xs={12} sm={6} md={4} lg={3}><span className="number">{this.props.provider.globalInfo.species}</span> ESPECIES</Col>
              <Col xs={12} sm={6} md={12} lg={3}><span className="number">{this.props.provider.globalInfo.georeferenced}</span> GEORREFERENCIADOS</Col>
            </Row>
          </Grid>
        </Paper>
        <Grid className="more-datails">
          <Row>
            <Col xs={12} sm={12} md={4} lg={3}>
              <Row center="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <img src={this.props.provider.imageUrl} alt="" width="262" height="261" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Row middle="xs">
                    <Col xs={1} sm={1} md={2} lg={2}>
                      <IconButton iconStyle={{ color: '#666D6D' }}>
                        <InsertLink />
                      </IconButton>
                    </Col>
                    <Col xs={11} sm={11} md={10} lg={10}>
                      <Link to="#" className="hiper-link">{this.props.provider.webLink}</Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Row>
                <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Descripción</Col>
                <Col className="accent-title" xs={2} sm={1} md={1} />
              </Row>
              <Row>
                <Col className="description" xs={12} sm={12} md={12} lg={12}>{this.props.provider.description}</Col>
              </Row>
              <Row className="direct-links">
                <Col xs={12} sm={12} md={12} lg={12}>Endorsed by <Link>{this.props.provider.principalContacts.endorcedBy}</Link></Col>
                <Col xs={12} sm={12} md={12} lg={12}>Installation <Link>{this.props.provider.principalContacts.installation}</Link></Col>
                <Col xs={12} sm={12} md={12} lg={12}>Administritive contact: <Link>{this.props.provider.principalContacts.administrativeContact}</Link></Col>
                <Col xs={12} sm={12} md={12} lg={12}>Technical contact: <Link>{this.props.provider.principalContacts.technicalContact}</Link></Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}