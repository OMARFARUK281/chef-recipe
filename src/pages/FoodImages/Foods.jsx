import React from 'react';
import images1 from '../FoodImages/images/foods-1.jpg'
import images2 from '../FoodImages/images/foods-2.jpg'
import images3 from '../FoodImages/images/foods-3.jpg'
import images4 from '../FoodImages/images/foods-4.jpg'

const Foods = () => {
    return (
        <div className='bg-secondary text-center p-3 mt-4 rounded'>
            <h3 className='bg-secondary p-2 text-white'>Foods</h3>

            <div className='w-100 mb-2'>
                <img className='w-100 mb-2 border border-1 rounded-2' src={images1} alt="" />
                <img className='w-100 mb-2 border border-1 rounded-2' src={images2} alt="" />
                <img className='w-100 mb-2 border border-1 rounded-2' src={images3} alt="" />
                <img className='w-100 border border-1 rounded-2' src={images4} alt="" />
            </div>
        </div>
    );
};

export default Foods;