import React,{Component, Fragment} from 'react'
import styles from '../styles/datosGenerales.module.css'
import UPC from './UPC';
import UUC from './UUC';
import TotalUsers from './TotalUsers';
import TotalProducts from './TotalProducts';





class DatosGenerales extends Component {
    render() { 
        return (

            <section className={styles.datosGenerales}>
            <Fragment>
                <TotalProducts/>
                <UPC/>
                <span className={styles.division}></span>
                <TotalUsers/>
                <UUC/>
            </Fragment>
            </section>
        );
    }
}
 
export default DatosGenerales;