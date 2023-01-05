import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addCart, minusCart, delCart } from "./redux/action/index";
import "./Cart.css";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


function Cart() {
    const product = useSelector(state => state.handleCart)
    const dispatch = useDispatch()

    function increaseCount(product) {
        dispatch(addCart(product))

    }
    function decreaseCount(product) {
        dispatch(minusCart(product))
    }
    function deleteCart(item) {
        dispatch(delCart(item))
        toast.error("Product has been deleted from card")
    }
    function orderAll(item) {
        dispatch(orderAll(item))
        toast.info("All Products has been ordered successfully")
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='add_to_cart_component'>
                        {product.length ?
                            <div className='added_card_wrapper'>
                                {
                                    product.map(item =>
                                        <div className='added_product_card'>
                                            <div className='col-6 d-flex'>
                                                <div className='added_product_image_wrapper'>
                                                    <img src={item.product.image} alt={item.product.title} className='added_product_image' />
                                                </div>
                                                <div className='added_product_title_wrapper'>
                                                    <span className='added_product_title_wrapper_category'>Category: {item.product.category}</span>
                                                    <br />
                                                    <span className='added_product_title_wrapper_title'>{item.product.title}</span>
                                                    <p></p>
                                                    <span className='added_product_title_wrapper_rating'>
                                                        Rating {item.product.rating && item.product.rating.rate}<i className='fa fa-star'></i>
                                                    </span>
                                                    <br /><p></p>
                                                    <span className='added_product_title_wrapper_price'>$ {item.product.price}</span>
                                                </div>
                                            </div>
                                            <div className='col-6 d-flex'>
                                                <div className='added_product_number_wrapper'>
                                                    Price:
                                                    <p>{item.quantity} X ${item.product.price} = ${item.quantity * item.product.price}</p>
                                                    <div className='d-flex justify-content-center mt-5'>
                                                        <button className='added_product_number_button' onClick={() => decreaseCount(item)}> <i className="fa fa-minus"></i> </button>
                                                        <span className='added_product_number'>{item.product.quantity} </span>
                                                        <button className='added_product_number_button' onClick={() => increaseCount(item)}> <i className="fa fa-plus"></i> </button>
                                                    </div>
                                                </div>
                                                <div className='added_product_delete'>
                                                    <button className='btn btn-outline-dark' onClick={() => deleteCart(item)}> Delete <i className="fa fa-trash"></i> </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className='add_card_buttons'>
                                    <NavLink to="/" className='no_product_card_button m-2' onClick={(e) => orderAll(e)}> Order All </NavLink>
                                    <NavLink to="/" className='no_product_card_button m-2'> Homepage </NavLink>
                                </div>
                            </div>
                            :
                            <div className='no_product_card'>
                                <p className='no_product_card_text'>No products on Cart</p>
                                <br />
                                <NavLink to="/" className='no_product_card_button'> Homepage </NavLink>
                            </div>
                        }
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart;