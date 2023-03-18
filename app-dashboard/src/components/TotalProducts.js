import React,{Component} from 'react'
import styles from '../styles/totalProducts.module.css'
const endpoint = "http://localhost:2020/api/products/"




class TotalProducts extends Component {


    constructor(props){
        super(props)
        this.state = {meta:{}, error:null}
    }

    async componentWillMount(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, meta: data.meta})
        }catch (error){
            this.setState({...this.state, error: error})
        }
    }

    async componentWillUpdate(){
        try{
            let request = await fetch(endpoint)
            let data = await request.json()
            this.setState({...this.state, meta: data.meta})
        }catch (error){
            this.setState({...this.state, error: error})
        }
    }



    render() { 
        if (this.state.error){
            return <h3 className={styles.totalProducts}>Something went wrong :(</h3>
        }
        return (
            
            <h3 className={styles.totalProducts}>Total de productos: {this.state.meta.count}</h3>
        );
    }
}

export default TotalProducts