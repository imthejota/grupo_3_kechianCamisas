import React,{Component} from 'react'
const endpoint = "http://localhost:2020/api/products/"



 class TotalProducts extends Component {


    constructor(props){
        super(props)
        this.state = {meta:{}}
    }

    async componentWillMount(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, meta: data.meta})
        }catch (error){
            return new Error(error)
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, meta: data.meta})
        }catch (error){
            return new Error(error)
        }
    }



    render() { 
        return (
            <h3 className='links-header-dash'>Total de productos: {this.state.meta.count}</h3>
        );
    }
}

export default TotalProducts