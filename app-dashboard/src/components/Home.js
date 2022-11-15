import React,{Component, Fragment} from 'react'
import UPC from './UPC';
import UUC from './UUC';
import TotalUsers from './TotalUsers';
import TotalProducts from './TotalProducts';





class Home extends Component {
    render() { 
        return (

            <section className='home'>
            <Fragment>
                <TotalProducts/>
                <TotalUsers/>
                <UUC/>
                <UPC/>
            </Fragment>
            </section>
        );
    }
}
 
export default Home;