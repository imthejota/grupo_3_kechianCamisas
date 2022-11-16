import React,{Component} from 'react'
import styles from '../styles/upc.module.css'
const endpoint = "http://localhost:2020/api/products/"


 class UPC  extends Component {
    constructor(props){
        super(props)
        this.state={
        last:{}
        }
    }

    async componentWillMount(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, last: data.products[data.products.length - 1]})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, last: data.products[data.products.length - 1]})
            console.log(this.state.last)
        }catch (error){
            return new Error(error)
        }
    }
    
    render() { 
        
        return (
            <section>
                <h3>Último producto creado:</h3>
                <ul>
                    <li>ID: {this.state.last.id}</li>
                    <li>Nombre: {this.state.last.name}</li>
                    <li><a className = {styles.url} href={this.state.last.url}>Detalle completo</a></li>
                    
                    
                </ul>
            </section>


        );
    }
}

export default UPC