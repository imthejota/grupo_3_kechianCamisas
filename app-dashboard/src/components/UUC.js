import React,{Component} from 'react'
import { Link } from 'react-router-dom'
const endpoint = "http://localhost:2020/api/users/" 


export default class UUC extends Component {


    constructor(props){
        super(props)
        this.state = {last: {}}
    }

    async componentWillMount(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, last: data.users[data.users.length - 1]})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, last: data.users[data.users.length - 1]})
        }catch (error){
            return new Error(error)
        }
    }



    render() { 
        return (
            <section>
                <h3>Último usuario creado:</h3>
                <ul>
                    <li>ID: {this.state.last.id}</li>
                    <li>Nombre: {this.state.last.firstName}</li>
                    <Link to={this.state.last.url}></Link>
                    
                </ul>
            </section>
        );
    }
}

