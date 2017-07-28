import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PageTemplate, Header, Footer, Link, HumboldtMap, PaperItem } from 'components'
import { Tabs, Tab } from 'material-ui/Tabs'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'

const Wrapper = styled.div`
color: #4B5353;
  .title {
    font-weight: 400;
    font-size: 18px;
    color: #4B5353;
    margin-top: 85px;
  }

  .title-two {
    font-weight: 400;
    font-size: 30px;
    color: #4B5353;
    padding-left: 20px;
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

  .tabs {
    margin-top: 30px;
    div > button > div > div {
      color: #4B5353;
      font-size: 18px;
    }
  }

  .more-datails{
    margin-top: 30px;    
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

  .separated{
    .paper {
      color: #3E5151;
      font-size: 18px;
      padding: 10px;
      font-weight: 200;

      div:not(:first-child){
        border-left: 1px solid rgb(224, 224, 224);
      }

      .number {
        font-weight: 400;
        font-size: 28px;   
      }
    }
  }

  .information {
    margin: 30px 0px;

    .indice {
      padding: 15px;
    }

    .third-title {
      font-weight: 400;
      font-size: 30px;
      color: #3E5151;
      padding-bottom: 10p;
    }

    .normal-info {
      padding: 30px;
      margin-bottom: 20px;

      .description {
        padding: 20px;
        line-height: 35px;
        font-weight: 200;
      }
    }
  }

  .leaflet-container {
    width: 100%;
    z-index: 0;
  }

  .link {
    color: #008995;
    font-size: 18px;
  }

  .contact-title{
      font-weight: 600;
      margin: 10px;
  }
  .box{
    border-left: 1px solid rgb(224, 224, 224);
    margin-left: 15px;
    padding-left: 20px;
    line-height: 35px;
  }

  .contacts {
    padding: 20px;
    color: #3E5151;
    .contact{
      padding: 20px;
    }
  }

  .fourd-title {
    font-weight: 600;
  }
`

export default class DatasetsRecordPage extends Component {

  render() {
    return (
      <Wrapper>
        <PageTemplate header={<Header />} footer={<Footer />}>
          <Grid>
            <Row center="xs">
              <Col className="title" xs={12} sm={12} md={12} lg={12}>RECURSO</Col>
              <Col className="accent-title" xs={2} sm={1} md={1} lg={1} />
            </Row>
            <Row center="xs">
              <Col xs={12} sm={12} md={12} lg={12} className="sub-title">Herbario Amazónico Colombiano</Col>
              <Col xs={12} sm={12} md={12} lg={12} className="link">Publicado por <a href="">Instituto Amazónico de Investigaciones Cientificas Sinchi</a></Col>
              <Col xs={12} sm={12} md={12} lg={12} className="contact">
                <Row>
                  <Col md>Martha Isabel Velljo Joyas . [email]Hernando Garcia</Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Tabs
              className="tabs"
              tabItemContainerStyle={{ background: 'transparent' }}
              inkBarStyle={{ background: '#ff7847' }}
              initialSelectedIndex={0}
            >
              <Tab label="RECURSOS">
                <Divider />
                <Grid className="more-datails">
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={3}>
                      <Row center="xs">
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <img src="/logo_entidad.png" alt="" width="262" height="261" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <Row middle="xs">
                            <Col xs={1} sm={1} md={2} lg={2}>
                              [DOI]
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                      <Row>
                        <Col className="description" xs={12} sm={12} md={12} lg={12}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptatum quod ipsam voluptate eos dicta, rem sint excepturi quos consectetur expedita maiores eius modi, corrupti sit? Placeat temporibus aperiam atque!
                        </Col>
                      </Row>
                      <Row className="direct-links">
                        <Col xs={12} sm={12} md={12} lg={12}>Última modificación: <Link>18 Agosto 2016</Link></Col>
                        <Col xs={12} sm={12} md={12} lg={12}>Licencia <Link>CC0 1.0</Link></Col>
                      </Row>
                    </Col>
                  </Row>
                </Grid>
                <Paper className="separated">
                  <Grid fluid>
                    <Row className="paper" center="xs">
                      <Col xs={12} sm={6} md={4} lg={3}><span className="number">546.321</span> REGISTROS</Col>
                    </Row>
                  </Grid>
                </Paper>
                <Paper>
                  <HumboldtMap />
                </Paper>
                <Grid >
                  <Row className="information">
                    <Col md={3}>
                      <Paper className="indice">
                        <List>
                          <ListItem>Description</ListItem>
                          <ListItem>Temporal</ListItem>
                          <ListItem>Geográfica</ListItem>
                          <ListItem>Taxonómia</ListItem>
                          <ListItem>Método de muestreo</ListItem>
                          <ListItem>Información adicional</ListItem>
                          <ListItem>Bibliografía</ListItem>
                          <ListItem>Partes asociadas</ListItem>
                          <ListItem>Descripción de los datos</ListItem>
                          <ListItem>Registro en GBIF</ListItem>
                          <ListItem>Citación</ListItem>
                        </List>
                      </Paper>
                    </Col>
                    <Col md={9}>
                      <Row>
                        <PaperItem title="Descripción">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                        </PaperItem>
                        <PaperItem title="Cobertura temporal">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                        </PaperItem>
                        {/* COBERTURA GEOGRAFICA */}
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <Paper className="normal-info">
                            <Row>
                              <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Cobertura geográfica</Col>
                              <Col className="accent-title" xs={2} sm={2} md={2} />
                            </Row>
                            <Row>
                              <Col className="description" xs={12} sm={12} md={12} lg={12}>
                                <HumboldtMap />
                              </Col>
                            </Row>
                          </Paper>
                        </Col>
                        {/* COBERTURA TAXONOMICA */}
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <Paper className="normal-info">
                            <Row>
                              <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Cobertura taxonómica</Col>
                              <Col className="accent-title" xs={2} sm={2} md={2} />
                            </Row>
                            <Row>
                              <Col className="description" xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                  <Col className="third-title" md={12}>Genéro</Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="third-title" md={12}>Especie</Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                  <Col md={4}>
                                    <Link className="link">Lorem ipsum</Link>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Paper>
                        </Col>
                        {/* METODOLOGIA */}
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <Paper className="normal-info">
                            <Row>
                              <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Metodología</Col>
                              <Col className="accent-title" xs={2} sm={2} md={2} />
                            </Row>
                            <Row>
                              <Col className="description" xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                  <Col className="third-title" md={12}>Area de estudio</Col>
                                  <Col md>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos impedit amet rerum! Itaque magni eveniet tempore dicta, nemo veritatis temporibus unde in molestias rem aperiam veniam consequuntur iste qui!</Col>
                                </Row>
                                <Row>
                                  <Col className="third-title" md={12}>Muestreo</Col>
                                  <Col md>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos impedit amet rerum! Itaque magni eveniet tempore dicta, nemo veritatis temporibus unde in molestias rem aperiam veniam consequuntur iste qui!</Col>
                                </Row>
                                <Row>
                                  <Col className="third-title" md={12}>Control de calidad</Col>
                                  <Col md>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos impedit amet rerum! Itaque magni eveniet tempore dicta, nemo veritatis temporibus unde in molestias rem aperiam veniam consequuntur iste qui!</Col>
                                </Row>
                                <Row>
                                  <Col className="third-title" md={12}>Descripción de la metodología paso a paso:</Col>
                                  <Stepper
                                    linear={false}
                                    orientation="vertical"
                                    activeStep
                                  >
                                    <Step active>
                                      <StepLabel icon="1" />
                                      <StepContent>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sed. Quam sit, optio aliquam laboriosam nam soluta aspernatur adipisci molestiae iure debitis laudantium repellat quo! Sit debitis vel reprehenderit perspiciatis?
                                      </StepContent>
                                    </Step>
                                    <Step active>
                                      <StepLabel icon="2" />
                                      <StepContent>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias accusantium voluptatum ratione reprehenderit labore beatae, at pariatur laboriosam ex ad, nesciunt commodi? Eaque voluptatum aliquam accusantium fugit aut rem, odio?
                                      </StepContent>
                                    </Step>
                                    <Step active>
                                      <StepLabel icon="3" />
                                      <StepContent>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt reiciendis quaerat, earum quae quasi dolorum iure dicta praesentium totam officiis! Commodi vitae labore laboriosam aliquid fugit quisquam sunt, nisi, deleniti.
                                      </StepContent>
                                    </Step>
                                    <Step />
                                  </Stepper>
                                </Row>
                              </Col>
                            </Row>
                          </Paper>
                        </Col>
                        <PaperItem title="Bibliografía">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                        </PaperItem>
                        {/* PARTES ASOCIADAS */}
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <Paper className="normal-info">
                            <Row>
                              <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Cobertura geográfica</Col>
                              <Col className="accent-title" xs={2} sm={2} md={2} />
                            </Row>
                            <Row className="contacts">
                              <Col md={6}>
                                <Col xs={12} sm={12} md={12} lg={12} className="contact-title">Martha Isabel Vallejo Joyas</Col>
                                <Col xs={12} sm={12} md={12} lg={12} className="box">
                                  <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>Originator . Metadata Author</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Principal INvestigator</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Investigador Principal</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Calle 28 A No. 15-09</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Bogotá D.C</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Colombia</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}><Link>martisavallejo@gmail.com</Link></Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>320-27</Col>
                                  </Row>
                                </Col>
                              </Col>
                              <Col md={6}>
                                <Col xs={12} sm={12} md={12} lg={12} className="contact-title">Martha Isabel Vallejo Joyas</Col>
                                <Col xs={12} sm={12} md={12} lg={12} className="box">
                                  <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>Originator . Metadata Author</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Principal INvestigator</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Investigador Principal</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Calle 28 A No. 15-09</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Bogotá D.C</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Colombia</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}><Link>martisavallejo@gmail.com</Link></Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>320-27</Col>
                                  </Row>
                                </Col>
                              </Col>
                              <Col md={6}>
                                <Col xs={12} sm={12} md={12} lg={12} className="contact-title">Martha Isabel Vallejo Joyas</Col>
                                <Col xs={12} sm={12} md={12} lg={12} className="box">
                                  <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>Originator . Metadata Author</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Principal INvestigator</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Investigador Principal</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Calle 28 A No. 15-09</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Bogotá D.C</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>Colombia</Col>
                                    <Col xs={12} sm={12} md={12} lg={12}><Link>martisavallejo@gmail.com</Link></Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>320-27</Col>
                                  </Row>
                                </Col>
                              </Col>
                            </Row>
                          </Paper>
                        </Col>
                        {/* DESCRIPCION DE LOS DATOS */}
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <Paper className="normal-info">
                            <Row>
                              <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Descripción de los datos</Col>
                              <Col className="accent-title" xs={2} sm={2} md={2} />
                            </Row>
                            <Row>
                              <Col className="description" xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                  <Col md={3}>Metadata lenguage</Col>
                                  <Col md>Spanish</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Data lenguage</Col>
                                  <Col md>Spanish</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>External description</Col>
                                  <Col md><Link className="link">Segundo censo de plantas leñosas de una Parcela Permanente en 25 hectareas</Link></Col>
                                </Row>
                              </Col>
                            </Row>
                          </Paper>
                        </Col>
                        {/* REGISTRO EN GBIF */}
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <Paper className="normal-info">
                            <Row>
                              <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Registros en GBIF</Col>
                              <Col className="accent-title" xs={2} sm={2} md={2} />
                            </Row>
                            <Row>
                              <Col className="description" xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                  <Col md={3} className="fourd-title">Fecha de registro</Col>
                                  <Col md>23 July 2014</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Ultima edición</Col>
                                  <Col md>23 July 2014</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Fecha de punlicación</Col>
                                  <Col md>23 July 2014</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Host</Col>
                                  <Col md>Instituto de Investigación de Recursos Biológicos Alexander von Humboldt</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Instalción</Col>
                                  <Col md>IPT IAvH</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Installation Contacts</Col>
                                  <Col md>Danny Veléz</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Endpoints</Col>
                                  <Col md><Link>http://ipt.biodiversidad.co</Link>(DWC ARCHIVE)</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Identifiers</Col>
                                  <Col md>
                                    <Row>
                                      <Col md={12}>[DOI]</Col>
                                      <Col md={12}><Link>http://ipt.biodiversidad.co</Link></Col>
                                      <Col md={12}><Link>http://ipt.biodiversidad.co</Link></Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Last succesful crawl</Col>
                                  <Col md>23 July 2014</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Crawling reasons</Col>
                                  <Col md>11% Normal | 89% Not modified</Col>
                                </Row>
                                <Row>
                                  <Col md={3}>Crawls in total</Col>
                                  <Col md>44</Col>
                                </Row>
                              </Col>
                            </Row>
                          </Paper>
                        </Col>
                        <PaperItem title="Citacion">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                        </PaperItem>
                      </Row>
                    </Col>
                  </Row>
                </Grid>
              </Tab>
              <Tab label="PROYECTO">
              </Tab>
              <Tab label="ESTADISTICAS*">
              </Tab>
              <Tab label="ACTIVIDAD*">
              </Tab>
            </Tabs>
          </Grid>
        </PageTemplate>
      </Wrapper>
    )
  }
}
