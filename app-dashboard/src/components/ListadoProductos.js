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
/* export default function ListadoProductos() {
    const [prods, setProds] = useState()
    useEffect(() => {
        const api = async () => {
            try {
                let request = await fetch(endpoint)
                let data = await request.json()
                setProds(data)
            } catch (error) {
                console.error(error)
            }
        }
        api()
    }, [])
    console.log(prods) */
    return (
        <section className='list-products' >
            <h3 className='links-header-dash'>Listado de productos:</h3>
            <ul>{this.state.products.map(e => <li key={e.id}>ID: {e.id} - Nombre: {e.name}</li>)}</ul>
        </section>
    )
    }
}

export default ListadoProductos