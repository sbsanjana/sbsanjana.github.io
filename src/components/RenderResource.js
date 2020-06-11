import React from 'react';
import {Card, OverlayTrigger, Button, Container, Row, Col} from 'react-bootstrap'
import Resources from './Resources.js'
import styles from './styles.css'
import {Link} from 'react-router-dom'
import Job from '../job.jpg'
import rwc from '../rwc.jpeg'


export default class RenderResource extends React.Component {
    constructor(props) {
        super(props)
        this.state={select:''}
        this.handleClick.bind(this)
    }

    handleClick = (e) => {
        this.setState({select: e.target.id})
        
    }

    render() {
        return (
            <div>
                <Container>
                         <p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}} id='resources'>Resources</p>

                <Row className="justify-content-md-center">
                    
                   
                    <Button variant="outline-secondary" style={{margin:10}} onClick={this.handleClick} id="career"> Career </Button>

                    <Button variant="outline-secondary" style={{margin:10}} onClick={this.handleClick} id='edu'>Education</Button>

                    <Button variant="outline-secondary" style={{margin:10}} onClick={this.handleClick} id='fun'>Interesting</Button>

                </Row>
                </Container>

            <Container>
            <Col>
              <Row>
                <Resources 
                info='A list of tech-focused summer internships, listed with deadlines!'
                title='Internships'
                hlink='github.com/elaine-zheng/summer2020internships'
                id='Career'
                />
          
                <Resources 
                info='A national program for college women interested in careers in tech. Mentorship & Job opportunities!'
                title='Rewriting the Code Fellowship'
                hlink='www.rewritingthecode.org/fellowship/'
                id='Career'
                />
          

              </Row>
            </Col>
          </Container>
          </div>

        );
    }
}