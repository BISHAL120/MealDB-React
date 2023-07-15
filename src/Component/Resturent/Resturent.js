import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Resturent.css'

const Resturent = () => {
    const [searchtext, setSearchtext] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    } ,[searchtext])

    const searchfood = e => {
        setSearchtext(e.target.value);
    }
    return (
        <div>
            <h1>This is Mealdb.. Search your meal here</h1>
            <input onChange={searchfood} type="text" />
            <br />
            <h3>Total result found {meals.length}</h3>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal = {meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Resturent;