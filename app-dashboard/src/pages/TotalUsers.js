import React,{Component} from 'react'
const endpoint = "http://localhost:2020/api/users/"


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
            this.setState({...this.state, users:data.splice(0,10)})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, users:data.splice(0,10)})
        }catch (error){
            return new Error(error)
        }
    }



    render() { 
        return (

            <main>
                <h2>Total Usuarios</h2>
                <ul>{this.state.users.map(users => <li key={users.id}>{users.name}</li> )}</ul>
            </main>


        );
    }
}
