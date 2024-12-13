import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/HomePage.scss';

function HomePage() {
  return (
    <Container fluid className=' home-page-container'>
      <Row className='justify-content-start text-end'>

        <Col xl={10}  lg={10} md={8} sm={8} xs={8}>
          <div className='home-page-text'>
            <div className='home-page-content'>
            <h1 className='home-page-title'>
            <a href='https://nicolas-huang.netlify.app/' target='_blank' rel='noreferrer' className="h1-link">
              FRONTEND<br />DEVELOPER
              </a>
            </h1>
            <Link className='rotating-container' to='/contact'>
            <svg className='rotating-text' viewBox="0 0 100 100">
              <path id="circlePath" d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0" fill="none" />
              <text fill="#D6594C">
                <textPath href="#circlePath">
                  OPEN FOR INTERNSHIP
                </textPath>
              </text>
            </svg>
          </Link>
          </div>
       {/*      <p className='home-page-subtitle'>
              Driven and curious Front End Developer student with a passion for motion and interactive designs.
            </p> */}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;
