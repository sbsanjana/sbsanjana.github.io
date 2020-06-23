import React from 'react';
import axios from 'axios';

import { Container, Card, Button, Col, Row, Accordion, Form, Alert} from 'react-bootstrap';

export default class ConnectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={title:'', text:'', tag:'', id: 123}
        this.handleTag = this.handleTag.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleTitle= this.handleTitle.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.makeId= this.makeId.bind(this);


    }
    handleClose(e) {

    }

    handleTitle = (e) => {
        this.setState({title: e.target.value});
    }
    handleText(e) {
        this.setState({text: e.target.value});
    }
    handleTag(e) {
        console.log("HI");
        this.setState({ tag: e.target.value });
    }

    makeId(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     

    handleSubmit(event) {
        if(this.state.title != '' && this.state.text !='' && this.state.tag != '') {
        event.preventDefault();

        const userObject = {

            'title': this.state.title,
            'tags': 'Career',
            'text': this.state.text,
            'date': Date.now(),
            'tag': this.state.tag

        };

    var d = new Date();


    fetch("http://localhost:3001/posts", {
            method: 'POST',
            headers: {
            'Accept': 'application/json' ,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                id: this.makeId,
                title: this.state.title,
                tags: this.state.tag,
                text: this.state.text,
                date: (d.getMonth() +1)+ '-'+ d.getDate() + '-' + d.getFullYear(),
    
            })
          })
            .then((res) => res.json)
            .then(res => console.log(res))
            .catch(function(res){ console.log(res) })

    
    
    this.setState({ title: '', text: '', tag:'' })
    window.location.reload(false);
        } else {
            return (

                window.alert('Make sure you have filled out all boxes!')
        
            )
        }

    }
    
     render() {
        return(
            <Row className="justify-content-md-center" >
                <Card style={{width:1000, textAlign:'center'}}>
            <Accordion style={{backgroundColor:'#E0CCD0'}}>
  
      <Accordion.Toggle as={Button} style={{width:500}}variant="link" size='lg' eventKey="0" style={{color:'black'}}>
        Add a Post!
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">



      <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{marginLeft:-700,fontSize:20, fontStyle:'italic', fontWeight:'bolder'}}>Title</Form.Label> <br />
                <input type="email" placeholder="Enter Title" style={{width:750, height: 50, borderRadius:5, border:'none'}} onChange={this.handleTitle} />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label style={{marginLeft:-700,fontSize:20, fontStyle:'italic', fontWeight:'bolder'}}>Text</Form.Label> <br />
                <input type="text area" style={{width:750, height:75, border:'none', borderRadius:5}}placeholder="Enter Text" onChange={this.handleText} />
            </Form.Group>
            <Form.Group controlId="">
            <Form.Label style={{marginLeft:-700, fontSize:20, fontStyle:'italic', fontWeight:'bolder'}}>Tag</Form.Label>
            
            <Form.Control as="select" style={{width:750, marginLeft:125}} onChange={this.handleTag}>
                <option>Select </option>
                <option>Career</option>
                <option>Education</option>
                <option>Fun</option>

            </Form.Control>
            </Form.Group>
            <Button variant="outline-secondary" type="submit" onClick={this.handleSubmit}>
                Submit
            </Button>
            
        </Form>
    </Accordion.Collapse>

 
</Accordion>
</Card>
</Row>

            
        );
    }
}

