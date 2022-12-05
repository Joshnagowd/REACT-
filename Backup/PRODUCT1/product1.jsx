import React, {Component} from "react"
class Product extends Component {
    state ={
        product:{
        product_Name: 'Motorola g22',
        image : 'https://rukminim1.flixcart.com/image/312/312/l1qrjbk0/mobile/t/e/j/-original-imagd8pyehxtp4yg.jpeg?q=70',
        qty:1,
        price:14999
    },
    item:{
        product_Name: 'redmi',
        image : 'https://rukminim1.flixcart.com/image/312/312/l2f20sw0/mobile/n/t/p/10a-b09xb6tk6v-redmi-original-imagdrghghkneesf.jpeg?q=70',
        qty:1,
        price:29999
    }
    
}


    incrHandler =() => {
        console.log("Test Case 123")
        this.setState({product:{...this.state.product,qty: this.state.product.qty +1}})
    }
    decrHandler =() => {
        this.setState({product:{...this.state.product,qty: this.state.product.qty -1}})
    }
    incrHandler =() => {
        console.log("Test Case 123")
        this.setState({item:{...this.state.item,qty: this.state.item.qty +1}})
    }
    decrHandler =() => {
        this.setState({item:{...this.state.item,qty: this.state.item.qty -1}})
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
                        <td>{this.state.product.product_Name}</td>
                        <td><img src ={this.state.product.image} alt ="" height="60px"/></td>
                        <td>{this.state.product.price}</td>
                        <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler} ></i></td>
                        <td>{this.state.product.price *this.state.product.qty}</td>
                    </tr>
                    <tr>
                        <td>{this.state.item.product_Name}</td>
                        <td><img src ={this.state.item.image} alt ="" height="60px"/></td>
                        <td>{this.state.item.price}</td>
                        <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.item.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler} ></i></td>
                        <td>{this.state.item.price *this.state.item.qty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
}
}
export default Product