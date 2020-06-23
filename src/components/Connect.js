import React from 'react';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import ConnectForm from './ConnectForm.js'

export default class Connect extends React.Component {
    constructor(props) {
        super(props)
        this.state={selected:'all'}
    }

    componentDidMount() {
        let url ='http://localhost:3001/posts'
        fetch(url) 
            .then(resp => resp.json())
            .then(data => {
                data = data.reverse();
                let posts=data.map((post, index) => {
                    return (
                    <Container>
                      <Col ms={4}> 
                          <Row xs={1}> 
                            <Card style={{ width:300, height:275, margin:10, backgroundColor:'#FFF2EB' }}>
                            <Card.Header as="h5">{post.user}</Card.Header>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{post.tags}</Card.Subtitle>
                                <Card.Text>
                                {post.text}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">{post.date}</Card.Footer>
                        </Card>
                    
                    </Row>
                    </Col>
                    
                </Container>
                      
                   
                    )
                })
                this.setState({posts:posts})
            })
    }

    render() {
       
        return (
           
           <div>
              
               <Container>
               <p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}}>Connect</p>
                  <p style={{fontSize:30, fontWeight:'lighter', textAlign:'center'}}> Here, you'll find opportunites. You can find teammates, LinkedIn connections, interview help, and much more!  </p>
                  </Container>
                  <ConnectForm />
                  <div>
                  
                      {this.state.posts}
                      
                  </div>

            

           </div>
        );
    }
}