// api conectada, levanta perfecto! 

import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            meta:{}
        }
}
    async componentDidMount() {
        try {
            let request = await fetch('http://localhost:2020/api/products')
            let response = await request.json()
            this.setState({
                ...this.state, productos: response.products, meta: response.meta
            })
        } catch (error) {
            throw new Error(error)
        }
    }

    async componentDidUpdate() {
        try {
            let request = await fetch('http://localhost:2020/api/products')
            let response = await request.json()
            this.setState({
                ...this.state, productos: response.products, meta: response.meta
            })
        } catch (error) {
            throw new Error(error)
        }
    }
    render() {
        return (
            <>
            <div>Total de productos: {this.state.meta.count}</div>
            <div>{this.state.productos.map((item, i) => <li key={i}>{item.id}, {item.name}, {item.description}</li>)}</div>
            
            </>
        )
    }
}

export default Product