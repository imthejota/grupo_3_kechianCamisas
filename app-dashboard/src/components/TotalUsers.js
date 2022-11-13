import React,{Component} from 'react'
const endpoint = "http://localhost:2020/api/users/" /*ACA A EL ENDPOINT CON LA API DE USUARIOS*/ 


export default class TotalUsers  extends Component {


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

            <main>
                <h2>Total Usuarios:</h2>
                <ul>{this.state.users.map(users => <li key={users.id}>{users.firstName}</li> )}</ul>
            </main>


        );
    }
}
