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
                <p style={{fontSize:30, fontStyle:'italic', textAlign:'center'}}> CONNECT  </p>
                  <p style={{fontSize:30, fontWeight:'lighter', textAlign:'center'}}> Here, you'll find opportunites. You can find teammates, LinkedIn connections, interview help, and many others!  </p>
                  </Container>

            

           </div>
        );
    }
}