import React from 'react';
import { Container } from 'react-bootstrap';

export default class Connect extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        return (
           <div>
               <Container>
               <p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}}>Connect</p>
                  <p style={{fontSize:30, fontWeight:'lighter', textAlign:'center'}}> Here, you'll find opportunites. You can find teammates, LinkedIn connections, interview help, and much more!  </p>
                  </Container>

            

           </div>
        );
    }
}