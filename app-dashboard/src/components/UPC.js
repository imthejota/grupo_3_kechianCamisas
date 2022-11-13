//UUC = ULTIMO PRODUCTO CREADO

import React,{Component} from 'react'
const endpoint = "http://localhost:2020/api/products/"



 class UPC  extends Component {


    constructor(props){
        super(props)
        this.state={
        products : [],
        meta:{}
        }
    }

    async componentWillMount(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, products: data.products, meta: data.meta})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, products:data.products, meta: data.meta})
        }catch (error){
            return new Error(error)
        }
    }



    render() { 
        return (

            <main>
                <h2>Ultimo producto creado:</h2>
                <ul>{this.state.products.map(products => <li key={products.id}>{products.name}</li> )}</ul>
            </main>


        );
    }
}

export default UPC