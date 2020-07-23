import React from 'react';

//stateless component - functional component
/*
function HelloWorld(props){
    return (
        <h1>Hello {props.name}</h1>
    )
}
*/


//class based syntax
class HelloWorld extends React.Component{
    render(){
        return (
        <h1>Hello {this.props.name}</h1>
        )
    }
}




export default HelloWorld;