import './footer.scss';
const { Container, Row, Col } = require("react-bootstrap")





const Footer = () => {
    return (<div className ="footer2 pt-4 pb-4 pr-4 pl-4 ">
        <Container fluid >
            <Row className = "pt-4 pb-4 text-center">
                <Col>
                © 2021 SHAHANA KABIR. ALL RIGHTS RESERVED. 
                </Col>
            </Row>

        </Container>


    </div>);
}

export default Footer;