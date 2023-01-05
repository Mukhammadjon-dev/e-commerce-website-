import React from 'react'
import Products from './Products'
import CarouselComponent from './CarouselComponent'

function Home() {
    return (
        <div className='hero'>
            <CarouselComponent />
            <Products />
        </div>
    )
}

export default Home