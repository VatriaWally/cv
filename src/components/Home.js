import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fetchImageBase64 from '../fetchBase64img';
import myImg from '../Assets/img1.jpg';
import Tilt from 'react-parallax-tilt';
import img1 from '../Assets/img2.jpg';
import img2 from '../Assets/img3.jpg';
import ProjectCard from './ProjectCards';
import AboutCard from './AboutCard';

function Home() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const base64 = await fetchImageBase64('images', 'img2');
      setImageData(base64);
    };

    fetchData();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Hero Section */}
      <section className='hero-section'>
        <Container fluid className='home-container'>
          <Container className='home-header-content'>
            <Row className='align-items-center'>
              <Col lg={7} className='header-left'>
                <h1 className='greeting-text'>
                  Hello, <span className='emoji-wave'>👋🏻</span>
                </h1>
                <h2 className='main-name'>
                  I’m{' '}
                  <strong className='highlighted-name'>
                    Vatria Verginia Wally
                  </strong>
                </h2>
              </Col>
              <Col lg={5} className='header-right'>
                <img
                  src={imageData}
                  alt='profile pic'
                  className='img-fluid rounded-circle'
                  style={{ maxHeight: '420px' }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* About Section */}
      <section>
        <Container fluid className='home-container'>
          <Container className='home-header-content'>
            <Row className='justify-content-center py-5'>
              <Col md={7} className='about-left'>
                <h1 className='about-title'>
                  Let me tell you{' '}
                  <span className='highlight-text'>who I am</span>
                </h1>
                <AboutCard />
              </Col>
              <Col md={5} className='about-right'>
                <img src={myImg} alt='about' className='img-fluid rounded' />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* Introduction Section */}
      <Container fluid className='intro-section'>
        <Container>
          <Row className='align-items-center'>
            <Col md={8} className='intro-description'>
              <h1 className='intro-title'>
                A little bit about{' '}
                <span className='highlight-text'>myself</span>
              </h1>
              <p className='intro-text'>
                I’m currently a student at Klabat University, with a deep
                interest in technology, books, gaming, and movies. I am a
                passionate developer focused on building efficient and scalable
                solutions. At present, I am pursuing my Bachelor's degree.
              </p>
            </Col>
            <Col md={4} className='intro-avatar'>
              <Tilt>
                <img
                  src={myImg}
                  alt='avatar'
                  className='img-fluid rounded-circle'
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Gallery Section */}
      <Container fluid className='gallery-section'>
        <Container>
          <Row className='py-4'>
            <Col md={12} className='gallery-header'>
              <h1>Gallery Showcase</h1>
            </Col>
          </Row>
          <Row className='gallery-images'>
            <Col md={6} className='gallery-image'>
              <img src={img1} alt='gallery image 1' className='img-fluid' />
            </Col>
            <Col md={6} className='gallery-image'>
              <img src={img2} alt='gallery image 2' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Projects Section */}
      <Container fluid className='projects-section'>
        <Container>
          <h1 className='projects-heading'>
            Some of My Recent <span className='highlight-text'>Projects</span>
          </h1>
          <p className='projects-description'>
            Here are a few projects I’ve worked on lately. Take a look!
          </p>
          <Row className='projects-row'>
            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'
                isBlog={false}
                title='Sistem Informasi Kantin Online'
                description='A system designed to help customers/student purchase items from the canteen through an online platform.'
              />
            </Col>
            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'
                isBlog={false}
                title='CV. Mitra Karya Nusantara'
                description="A business process improvement project aimed at optimizing the company's reporting process through system integration."
              />
            </Col>
            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'
                isBlog={false}
                title='Strategic Plan Uniqlo'
                description='A project focused on targeting the Millennial and Gen Z demographics, offering high-quality, comfortable, and affordable clothing.'
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
