import React, { Component, Fragment } from 'react';
import products from '../webservices/cart.json'

class Productlist extends Component {

    componentDidMount(){
        fetch('./')
    }

    render() { 
        return (
            <Fragment>
                {JSON.stringify(products)}
            </Fragment>
        );
    }
}
 
export default Productlist;