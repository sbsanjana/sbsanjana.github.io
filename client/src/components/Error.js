import React from 'react';
import {Container} from 'react-bootstrap'

export default class Error extends React.Component {
    render() {
        return (
            <Container>
                 <p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}}>This feature is currently being built!</p>
            </Container>
        );
    }
}