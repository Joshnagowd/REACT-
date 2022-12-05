import React, {Component} from 'react'
class Product extends Component {
    state ={
        product_Name: 'Motorola g22',
        image : 'https://rukminim1.flixcart.com/image/312/312/l1qrjbk0/mobile/t/e/j/-original-imagd8pyehxtp4yg.jpeg?q=70',
        qty:1,
        price:14999
    }
    incrHandler =() => {
        this.setState({qty: this.state.qty +1})
    }
    decrHandler =() => {
        this.setState({qty: this.state.qty -1})
    }
 
render() {
return <div className ="container">
    <div className="row">
        <div className ="col-md-6">
            <table className='table table-hover'>
                <thead>

                    <tr>
                        <th>Name </th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.product_Name}</td>
                        <td><img src ={this.state.image} alt ="" height="60px"/></td>
                        <td>{this.state.price}</td>
                        <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler} ></i></td>
                        <td>{this.state.price *this.state.qty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
}
}
export default Product