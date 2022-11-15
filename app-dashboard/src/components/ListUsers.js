import React,{Component} from 'react'
const endpoint = "http://localhost:2020/api/users/" /*ACA A EL ENDPOINT CON LA API DE USUARIOS*/ 


export default class ListUsers  extends Component {


    constructor(props){
        super(props)
        this.state={
        users : []
            
        }
    }

    async componentWillMount(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, users:data.users, meta:data.meta})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, users:data.users, meta:data.meta})
        }catch (error){
            return new Error(error)
        }
    }



    render() { 
        return (
            <section className='list-users'>
                <h3>Listado de usuarios:</h3>
                <ul>{this.state.users.map(users => <li key={users.id}>ID: {users.id}, Nombre completo: {users.firstName} {users.lastName}</li> )}</ul>
            </section>


        );
    }
}
