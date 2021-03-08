import React from 'react' 
import { Modal, Form, Col, Container, Button, Row} from 'react-bootstrap'
import facebook from './assets/img/facebook.png'
import google from './assets/img/google.png'
import twitter from './assets/img/twitter.png'

const ModalSignup = (props) => {
    return (
        <div>
            <Modal {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Container>
              <h2><b>Sign Up</b></h2>
              <p>It's quick and easy</p>
              </Container>
            </Modal.Header>
            
            <Modal.Body className="show-grid">
              <Container>
              <Form className="form-signup" >
                <Form.Group class="needs-validation" novalidate>
                  <Form.Control class="form-control" placeholder="Your location: maluku" />
                  
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="firstName" className="needs-validation" novalidate>
                    <Form.Control className="form-control was-validated" type="text" placeholder="First name" required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="username">
                    <Form.Control type="text" placeholder="Username" required/>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="email">
                  <Form.Control placeholder="Email address" type="email" required/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Control placeholder="New password" type="password" required/>
                </Form.Group>
                <Form.Label>Date of birth</Form.Label>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Control as="select" defaultValue="28">
                      <option>28</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select" defaultValue="Feb">
                      <option>Feb</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Control as="select" defaultValue="2021">
                      <option>2021</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Label>Gender</Form.Label><br />
              {/* <Form.Group> */}
                <div class="wrapper">
                <input type="radio" name="select" id="option-1" checked />
                <input type="radio" name="select" id="option-2" />
                <label for="option-1" class="option option-1">
                  <div class="dot"></div>
                  <span>Female</span>
                </label>
                <label for="option-2" class="option option-2">
                  <div class="dot"></div>
                  <span>Male</span>
                </label>
              </div><br />
              {/* </Form.Group> */}
              <p className="term">
              By clicking Sign up, you agree to out <a href="">Terms, Data Policy and Cookie Policy. </a> 
              You may receive email notifications from us and can opt out at anytime.
              </p>
                <Row>
                  <Col lg={4} className="col-signup">
                  <button className="button-signup" type="submit"><b>Sign Up</b></button>
                 
                  </Col>
                  <Col>
                    <p className="or"> Or</p>
                  </Col>
                  
                  <Col sm={6}>
                    <a href="https://www.facebook.com"><img src={facebook} className="social-icon" /></a>
                    <a href="https://www.google.com"><img src={google} className="social-icon" /></a>
                    <a href="https://www.twitter.com"><img src={twitter} className="social-icon" /></a>
                  </Col>
                </Row>
              </Form>
              </Container>
            </Modal.Body>
          </Modal>
        </div>
    )
}

export default ModalSignup
