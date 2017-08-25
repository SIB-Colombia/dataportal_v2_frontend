import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AutoComplete from 'material-ui/AutoComplete'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Checkbox from 'material-ui/Checkbox'

const Wrapper = styled.div`
`

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
]

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
}

export default class TaxonomySearchItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
    }
  }

  handleChange = (event, index, value) => this.setState({ value })

  render() {
    return (
      <Wrapper>
        <FileSearchItem title="Taxonomía">
          <Grid fluid className="without-padding divider">
            <Row middle="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Checkbox label="Tyrannus melacholicus" />
              </Col>
            </Row>
          </Grid>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            labelStyle={{ color: '#838787' }}
            underlineStyle={{ borderColor: '#FF7847' }}
            iconStyle={{ fill: '#838787' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
          >
            <MenuItem value={1} primaryText="Nombre científico" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <AutoComplete
            hintText="Escriba el nombre científico"
            dataSource={colors}
            menuProps={menuProps}
            underlineStyle={{ borderColor: '#FF7847' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
            hintStyle={{ color: '#838787' }}
          />
        </FileSearchItem>
      </Wrapper>
    )
  }
}
