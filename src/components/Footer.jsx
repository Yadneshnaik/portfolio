import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <section className="contact-me-section" style={{ backgroundColor: 'black', color: 'rgb(255, 255, 255)', padding: '50px 0', margin: 0 }}>
      <Container>
        <h1 className="mb-4">Contact Me.</h1>
        <hr className="my-4" style={{ borderColor: 'rgb(255, 202, 44)' }} />
        <p className="mb-4">Feel free to reach out to me for any inquiries or just to say hi!</p>
        <Row className="contact-details">
          <Col lg={6} md={6}>
            <div className="mb-3">
              <p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg> 
                Email: naikyadnesh9@gmail.com
              </p>
            </div>
            <div className="mb-3">
              <p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg> 
                Twitter: 
                <a href="https://x.com/naikyadnesh9" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(255, 255, 255)' }}>
                  @naikyadnesh9
                </a>
              </p>
            </div>
            <div className="mb-3">
              <p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg> 
                LinkedIn: 
                <a href="https://www.linkedin.com/in/yadnesh-naik-286a6b235/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(255, 255, 255)' }}>
                  Yadnesh Naik
                </a>
              </p>
            </div>
            <div>
              <p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-94.4-36.1-9.3 35.7-25.9 59.9-47.4 82.2-13.9-16.5-25.9-36.4-35.9-59.6 27.1-36.6 42.7-78.1 42.7-118.8 0-24.3-11.9-48.5-35.6-67.4-23.8-18.9-51.9-26.9-81.7-24.7-61.5 4.5-99.4 33.9-113.9 77.4-16.3-24.4-38.5-41.4-66.9-51.1-34.9-12.2-75.7-11.3-111.5 3.6-50.6 20.8-76.7 70.4-75.2 124.5 1.6 38.1 16.4 74.5 41.7 106.5-15.9 27.5-23.6 57.5-23.6 88.5 0 51.3 22.2 97.4 59.4 131.1 40.9 36.1 93.1 51.3 148.7 42.5 24.1-3.5 47.4-15.3 65.5-31.3 18.6 27.9 40.3 51.8 67.3 72.2 23.4-34.7 35.7-75.7 35.7-117.2z"></path>
                </svg> 
                GitHub: 
                <a href="https://github.com/Yadneshnaik" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(255, 255, 255)' }}>
                  @Yadneshnaik
                </a>
              </p>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <Button variant="outline-warning" size="lg" href="/cv/Yadnesh.pdf" download>
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
