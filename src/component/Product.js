import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/action';
import Skeleton from 'react-loading-skeleton';
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
        toast.success("Product has been added to card successfully")
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} /> <Skeleton height={50} width={100} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <div className='product_info'>
                <div className='product_item_image_wrapper'>
                    <img src={product.image} alt={product.title} className="product_item_image" />
                </div>
                <div className='product_item_title_wrapper'>
                    <h4 className='product_item_category text-uppercase'>
                        {product.category}
                    </h4>
                    <h1 className='product_item_title'>{product.title}</h1>
                    <span className='product_item_rating'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </span><br />
                    <span className='product_item_count'>
                        Count of product: {product.rating && product.rating.count}
                    </span>
                    <h3 className='product_item_price'>
                        ${product.price}
                    </h3>
                    <p className='product_item_description'>
                        {product.description}
                    </p>
                    <div className='product_button_group'>
                        <button className='cart_button' onClick={() => addProduct(product)}>
                            Add to Cart
                        </button>
                        <NavLink to="/cart" className="cart_button">
                            Go to Cart
                        </NavLink>
                        <NavLink to="/" className="cart_button">
                            Menu
                        </NavLink>
                    </div>
                </div>
            </div >)
    }

    return (
        <div className='container '>
            <div className='row py-4'>
                {loading ? <Loading /> : <ShowProduct />}
            </div>

        </div>
    )
}

export default Product;