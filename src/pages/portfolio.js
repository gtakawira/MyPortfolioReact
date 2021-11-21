import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-router-dom';
import { Card, Button, Container, Row } from 'react-bootstrap';

import '../App.css';


function Portfolio() {

  return (

    // <div>
    //     <a class="deployed" id="first" target="_blank" href="https://gtakawira.github.io/prework-about-me/">My First Site</a>
    //     <a class="deployed" id="refactor" target="_blank" href="https://gtakawira.github.io/Accessibility_CodeRefactor/">Code Refactoring</a>
    //     <a class="deployed" id="blowup" target="_blank" href="https://scratch.mit.edu/projects/541166089">"Blow Up!!" Game</a>

    //     <img className="img-fluid" src="me.jpg" alt="Gavin's Image" />
    // </div>
    <Container   >
      <Row fluid xs={1} md={2} lg={3} className="bg-light text-dark ">
        <Card >
          <Card.Link href=" https://hello-neighbor.herokuapp.com/">
            <Card.Img src="mnimage.jpg" />

            <Card.ImgOverlay >
              <Card.Title className="bg-light text-dark"  >Welcome Neighbor</Card.Title>
              <Card.Text>
                <Button variant="primary" href="https://github.com/delaluz12/Welcome-Neighbor" size="sm">Github</Button>
              </Card.Text>

              <Card.Text>
                <Button variant="primary" href=" https://hello-neighbor.herokuapp.com/" size="sm">Site</Button>
              </Card.Text>

            </Card.ImgOverlay>
          </Card.Link>


        </Card>
        <Card >
          <Card.Link href=" https://iworkoutabit.herokuapp.com/">
            <Card.Img src="iwo.jpg" />

            <Card.ImgOverlay >
              <Card.Title className="bg-light text-dark"  >NoSql_Fitness_Tracker</Card.Title>
              <Card.Text>
                <Button variant="primary" href="https://github.com/gtakawira/NoSql_Fitness_Tracker" size="sm">Github</Button>
              </Card.Text>

              <Card.Text>
                <Button variant="primary" href=" https://iworkoutabit.herokuapp.com/" size="sm">Site</Button>
              </Card.Text>

            </Card.ImgOverlay>
          </Card.Link>


        </Card>
        <Card>
          <Card.Link href=" https://hello-neighbor.herokuapp.com/">
            <Card.Img src="mnimage.jpg" />

            <Card.ImgOverlay >
              <Card.Title className="bg-light text-dark"  >Welcome Neighbor</Card.Title>
              <Card.Text>
                <Button variant="primary" href="https://github.com/delaluz12/Welcome-Neighbor" size="sm">Github</Button>
              </Card.Text>

              <Card.Text>
                <Button variant="primary" href=" https://hello-neighbor.herokuapp.com/" size="sm">Site</Button>
              </Card.Text>

            </Card.ImgOverlay>
          </Card.Link>


        </Card>
        <Card>
          <Card.Link href=" https://gtakawira.github.io/Weather_Dashboard/">
            <Card.Img src="dash.jpg" />

            <Card.ImgOverlay >
              <Card.Title className="bg-light text-dark"  >Weather Dashboard</Card.Title>
              <Card.Text>
                <Button variant="primary" href="https://github.com/gtakawira/Weather_Dashboard" size="sm">Github</Button>
              </Card.Text>

              <Card.Text>
                <Button variant="primary" href="https://gtakawira.github.io/Weather_Dashboard/" size="sm">Site</Button>
              </Card.Text>

            </Card.ImgOverlay>
          </Card.Link>


        </Card>
        <Card>
          <Card.Link href=" https://hello-neighbor.herokuapp.com/">
            <Card.Img src="mnimage.jpg" />

            <Card.ImgOverlay >
              <Card.Title className="bg-light text-dark"  >Welcome Neighbor</Card.Title>
              <Card.Text>
                <Button variant="primary" href="https://github.com/delaluz12/Welcome-Neighbor" size="sm">Github</Button>
              </Card.Text>

              <Card.Text>
                <Button variant="primary" href=" https://hello-neighbor.herokuapp.com/" size="sm">Site</Button>
              </Card.Text>

            </Card.ImgOverlay>
          </Card.Link>


        </Card>
        <Card >
          <Card.Link href=" https://ibudgetabit.herokuapp.com/">
            <Card.Img src="budget.jpg" />

            <Card.ImgOverlay >
              <Card.Title className="bg-light text-dark"  >Budget App</Card.Title>
              <Card.Text>
                <Button variant="primary" href="https://github.com/gtakawira/PWA-Budget-App" size="sm">Github</Button>
              </Card.Text>

              <Card.Text>
                <Button variant="primary" href=" https://ibudgetabit.herokuapp.com/" size="sm">Site</Button>
              </Card.Text>

            </Card.ImgOverlay>
          </Card.Link>


        </Card>
        </Row>
    </Container>
  )
}

export default Portfolio