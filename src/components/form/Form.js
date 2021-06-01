import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email: '',
            cellphone: '',
            age: '',
            show: false
        }
        this.sendForm = this.sendForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.wrapper = React.createRef();
    }
    
    sendForm(event){
        event.preventDefault()
        console.log(
            "Nombre Completo", this.state.name,
            "Email", this.state.email,
            "Celular", this.state.cellphone,
            "Edad", this.state.age
        )
        this.handleOpen()
        setTimeout(this.handleClose,5000)
        this.resetInfo()
    }

    resetInfo(){
        this.setState({name:''})
        this.setState({email:''})
        this.setState({cellphone:''})
        this.setState({age:0})   
    }

    handleChange(event){
        event.preventDefault()
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    handleOpen(){
        this.setState({show: true})
    }
    handleClose(){
        this.setState({show: false})
    }

    render(){
        return(
            <div >
                <div className="row m-0">
                <p className="col-lg-9 mx-auto text-center">
                    Hola, bienvenido, sabemos que quieres viajar en {this.props.airline} diligencia el siguiente formulario:
                </p>
                </div>
                <div className="row m-0 mt-3">
                <form onSubmit={this.sendForm} className="col-lg-7 mx-auto">
                    <div className="form-group row m-0"> 
                        <label className="col-lg-3 col-4 mx-auto">Nombre Completo </label>
                        <input className="col-lg-6 col-6 form-text text-muted mx-auto" type="text"  name="name" value={this.state.name} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group row m-0">
                        <label className="col-lg-3 col-4 mx-auto">Email</label>
                        <input className="col-lg-6 col-6 form-text text-muted mx-auto" type="email"  name="email" value={this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group row m-0">
                        <label className="col-lg-3 col-4 mx-auto">Celular</label>
                        <input className="col-lg-6 col-6  form-text text-muted mx-auto" type="tel"  name="cellphone" value={this.state.cellphone} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group row m-0">
                        <label className="col-lg-3 col-4 mx-auto">Edad</label>
                        <input className="col-lg-6 col-6 form-text text-muted mx-auto" type="number"  min="20" max="100" name="age" value={this.state.age} onChange={this.handleChange} required/>
                    </div>
                    <div className="row m-0">
                        <Button type="submit" className="col-lg-10 col-10 mx-auto mt-3">Enviar datos</Button>
                    </div>
                </form>
                </div>
                <Modal
                  show={this.state.show}
                  onHide={this.handleClose}
                  backdrop="static"
                  keyboard={false}
                  size="lg"
                >
                  
                  <Modal.Body>
                    Tu información fue enviada con éxito, estaremos en contacto contigo.
                  </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default Form;
