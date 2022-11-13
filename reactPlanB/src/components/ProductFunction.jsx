/* import { useState } from "react"

function async ProductosFuncion () {
    try {
        const [listadoProductos, setListadoProductos] = useState()
        let request = await fetch('http://localhost:2020/api/products')
        let response = await request.json()
        setListadoProductos = {productos: response.products, meta: response.meta, last: response.products[response.products.length - 1]
        creturn (
                <>
                <div>Total de productos: {listadoProductos.meta.count}</div>
                <div>Último producto creado:{listadoProductos.last.name}</div>
                <div>{listadoProductos.map((item, i) => <li key={i}>{item.id}, {item.name}, {item.description}</li>)}</div>
                </>
            )
        }
        
        
    } catch (error) {
        throw new Error(error)
    }
}


export default ProductosFuncion */