import React,{Component} from 'react'
const endpoint = "http://localhost:2020/api/products/"


export default class TotalProducts  extends Component {


    constructor(props){
        super(props)
        this.state={
        products : []
        }
    }

    async componentWillMount(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, products:data.splice(0,10)})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, products:data.splice(0,10)})
        }catch (error){
            return new Error(error)
        }
    }



    render() { 
        return (

            <main>
                <h2>Total Productos</h2>
                <ul>{this.state.products.map(products => <li key={products.id}>{products.name}</li> )}</ul>
            </main>


        );
    }
}