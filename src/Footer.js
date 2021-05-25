const { Container, Row, Col } = require("react-bootstrap")




const Footer = () => {
    return (<footer className="mt-4 pt-4 pb-4 pr-4 pl-4 text-secondary">
        <Container>
            <Row className = "pt-4 pb-4 text-center">
                <Col>
                © 2021 SHAHANA KABIR. ALL RIGHTS RESERVED. 
                </Col>
            </Row>

        </Container>


    </footer>);
}

export default Footer;