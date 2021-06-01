import React from 'react';
import './navbar.css'


class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.items.map(item =>{
                        return <li key={item.id} onClick={()=>this.props.change(item.name)}>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Navbar;