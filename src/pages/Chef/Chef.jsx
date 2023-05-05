import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefFood from '../Home/ChefFood/ChefFood';

const Chef = () => {
    const {id} = useParams();
    const chefFoods = useLoaderData();

    return (
        <div>
            { id && <h2>Chef Foods {chefFoods.length}</h2>}
            {
                chefFoods.map(foods => <ChefFood
                key={foods.id}
                foods={foods}
                >                    
                </ChefFood>)
            }
        </div>
    );
};

export default Chef;