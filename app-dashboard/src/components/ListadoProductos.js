import React, {Component} from 'react'
const endpoint = "http://localhost:2020/api/products/"

class ListadoProductos  extends Component {
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
            this.setState({...this.state, products: data.products})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, products: data.products})
        }catch (error){
            return new Error(error)
        }
    }



    render() { 
        return (
                <section className='list-products' >
                <h3 className='links-header-dash'>Listado de productos:</h3>
                <ul>{this.state.products.map(products => <li key={products.id}><li>ID: {products.id} - Nombre: {products.name}</li></li>)}</ul>
                </section>


        );
    }
}

export default ListadoProductos