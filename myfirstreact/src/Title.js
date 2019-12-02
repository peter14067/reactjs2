import React from "react"
import  './index4.css'; 
class Title extends React.Component {
    render(){
        return <h1>{this.props.title}</h1>
    }
}
export {Title}