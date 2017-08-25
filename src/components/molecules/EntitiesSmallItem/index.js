import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'
import Paper from 'material-ui/Paper'

const styles = {
  img: {
    borderBottomColor: '#F2F2F2',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
  },
  name: {
    color: '#0098A3',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: 5,
  },
  publisher: {
    paddingLeft: 20,
    fontSize: 12,
    fontWeight: 200,
    marginBottom: 5,
  },
  specimens: {
    color: '#FFF',
    background: '#0098A3',
    paddingTop: 4,
    paddingLeft: 16,
    paddingBottom: 4,
    fontSize: 14,
  },
}

const EntitiesSmallItem = ({ entitie }) => {
  return (
    <Col xs={12} md={6} sm={3} lg={3}>
      <Paper>
        <Row>
          <Col xs={12} md={12} sm={12} lg={12}>
            <Link to={`/publisher/${entitie.id}`}>
              <img src={entitie.eml.additionalMetadata.metadata.gbif.resourceLogoUrl} alt="" width="100%" style={styles.img} />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={12} style={styles.name}>
            {entitie.eml.providerName}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={12} style={styles.publisher}>
            {entitie.eml.dataset.organization.city}
          </Col>
        </Row>
        <Col xs={12} md={12} sm={12} lg={12} style={styles.specimens}>
          <span>{entitie.eml.occurrence.count.providerName}</span> REGISTROS
          </Col>
      </Paper>
    </Col>
  )
}

EntitiesSmallItem.propTypes = {
  entitie: PropTypes.any.isRequired,
}

export default EntitiesSmallItem