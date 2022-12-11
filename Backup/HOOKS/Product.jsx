import React,{useState} from "react"
const Product =()=>{
    let [flag,setFlag] = useState(true)
    let[msg,setMsg] = useState("hello")
    let[Product,setProduct]=useState({p_Name: "Canon camera" , price: 40000, qty:2, image:"https://rukminim1.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70"})
    let decrHandler =()=>{
setProduct({...Product, qty:Product.qty -1})
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <table className="table">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Product.p_Name}</td>
                            <td><img src={Product.image}height ="50px"/></td>
                            <td>{Product.price}</td>
                            <td><i className="fa fa-minus-circle" onClick={decrHandler}></i>{Product.qty}<i className="fa fa-plus-circle" onClick={()=>{
                                setProduct({...Product,qty:Product.qty+1})
                            }}></i></td>
                            <td>{Product.qty*Product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Product