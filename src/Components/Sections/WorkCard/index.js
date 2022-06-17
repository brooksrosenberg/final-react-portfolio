import './workCard.css';
import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, Row, Col, Button } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
 

const WorkCard = (props) => {

    const desktop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const phone = useMediaQuery({
        query: '(max-width: 768px)'
    });

    return (
        <div>
            {desktop && <>
                <Card className='dCard'>
                <CardTitle className='dCardTitle'>{props.name}</CardTitle>
                <br></br>
                
                <CardBody className='dCardBody'>
                <Row>
                <Col className='col-1'>
                    <img className='dworkPhoto' src={props.photo} alt='Work'></img>
                </Col>
                
                <Col className='col-2'>
                    <p>
                    Summary: {props.info}
                    </p>
                    <p>
                    Tech: {props.tech}
                    </p>
                    </Col>
                    </Row>
                    </CardBody>
                  
                    
                    <br></br>
                    <CardFooter>
                    <Row className='dbtnsrow'>
                        <Button href={props.deployedLink}>Deployed Link</Button>
                        <Button href={props.githubLink}>Github Link</Button>
                    </Row>
                    </CardFooter>
            </Card>
            </>}
            {phone && <>
            <Card className='pCard'>
                <CardTitle className='pCardTitle'>{props.name}</CardTitle>
                
                <Row>
                <Col>
                    <img className='pworkPhoto' src={props.photo} alt='Work'></img>
                </Col>
                <CardBody className='pCardBody'>
                
                    <p>
                    Summary: {props.info}
                    </p>
                    <p>
                    Tech: {props.tech}
                    </p>
                    </CardBody>
                    </Row>
                    <br></br>
                    <CardFooter>
                    <Row className='pbtnsrow'>
                         <Button href={props.deployedLink}>Deployed Link</Button>
                        <Button href={props.githubLink}>Github Link</Button>
                    </Row>
                    </CardFooter>
            </Card>
            </>}
        </div>
    )
}

export default WorkCard;