import React, { Fragment } from 'react';

import { css, cx } from '@emotion/css'
import styled from '@emotion/styled'

import '../main.scss';
import '../scss/global.scss';

import { Row, Col, Image, Tabs, Tab } from 'react-bootstrap'

// import { BrowserRouter as Router, Route } from 'react-router-dom';

const Section = styled.section`
  height: 100vh;
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
`

const Title = styled.h4`
  font-size: 5.125rem;
  font-family: 'Crimson Text', serif !important;
  line-height: 28px;
  letter-spacing: 0.06rem;
  margin-bottom: 6rem;
  font-weight: 600
`



function Index() {
  return (
    <Fragment>
      <Section>
        <div className="cardWrapper">
          <Row>
            <Col>
              <h4 className="cardTitle">
                Hi, My name is Adhi Wiratomo
              </h4>

              <p className="cardContent">
                I am a <b className="tw-text-secondary"> Front End Developer </b> who has experience this field for more than a year. I have a good knowledge on vanila js and js framework such as vue js and nuxt js.
                <br /><br />
                Besides that, I also have experience in design logo company and web design. I am a person who is easy to get along with and also likes new things.
              </p>
            </Col>
            <Col>
              <img className={css`margin-left: auto`} src="/img/illus-person.svg" alt="" />
            </Col>
          </Row>
        </div>
      </Section>

      <Section>
        <div>
          <Title>My Experience</Title>
          <Row>
            <Col>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Developer" className="link--hover">
                  <div>Test</div>
                </Tab>
                <Tab eventKey="profile" title="Graphic Desain">
                  <div>Test</div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </div>
      </Section>
    </Fragment>
  );
}

export default Index;

