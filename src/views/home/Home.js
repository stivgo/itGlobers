import React from 'react';
import Form from '../../components/form/Form'
import Navbar from '../../components/navbar/Navbar'
import items from '../../assets/items.json'


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            airline:null
        }
        this.changeAirline = this.changeAirline.bind(this)
    }
    changeAirline(value){
        this.setState({
            airline: value
        })
    }
    render(){
        return(
            <div>
                <Navbar items={items} change={this.changeAirline}/>
                <Form airline={this.state.airline}/>
            </div>
        )
    }
}

export default Home;