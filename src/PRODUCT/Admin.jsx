import React, {useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";
let Admin from "axios";
 let [products, setProducts]=useState([])
 let [errorMessage, setErrorMessage] = useState('');
 useEffect(()=>{
    getProducts()
 }, []);
 //get all the products
 let getProducts =()=>{
    let dataURL='';
    Axios.get(dataURL).then((response)=>{
        setProducts(response.data)
    }).catch((err) =>{
        setErrorMessage(err);

    });
 };
 return(
    <React.Fragment>
        <div className="container mt-3">
            <div className="row animated slideInLeft">
                <div className="col">
                    <p className="h3 text-success">Product Details</p>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, excepturi. Lorem ipsum dolo
                    r sit amet consectetur adipisicing elit. Suscipit, corporis!lorem10
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate tenetur rem eum illum veniam at natus incid
                    unt sequi, nes ciunt unde minima? Amet suscipit accusamus voluptas, illum ea maiores dolores.</p>
                    <Link to "/create-product" className="btn btn-success btn-sm">Create Product</Link>
                    

       
                </div>
            </div>
            <div className="row mt-3 animated zoomIn delay-1s">
                <div className="col">
                    <table className="tabel tabel-hover text-center tabel-striped table-success">
                        <thead className="bg-dark  text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Proeuct</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{
                            products.length>0 ?
                            <React.Fragment>
                                {
                                    products.map((product)=>{
                                        return(
                                                                                    )
                                    }
                                    )
                                }
                            </React.Fragment>
                            }
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                        </table>
                        </div> 
        </div>
    </React.Fragment>
 )
