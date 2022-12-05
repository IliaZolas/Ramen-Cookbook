import { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';

const AddRamen = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const [id, setID ] = useState('');
    const navigate = useNavigate();

    const AddRamen = async (id, title, ingredients, description) => {
        await fetch('http://localhost:4000/app/ramen/add', {
        method: 'POST',
        body: JSON.stringify({
            id: id,
            title: title,
            ingredients: ingredients,
            description: description,
            // userId: Math.random().toString(36).slice(2),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        })
        .then((response) => { 
            console.log("prom:",response.json());
            console.log("promise:",response);
        })
        .then(() => {
        setTitle();
        setIngredients();
        setDescription();
        setID();
        })
        .catch((err) => {
        console.log(err.message , ":error message");
    });
    navigate('/ramen');
};

const handleSubmit = (e) => {
    e.preventDefault();
    AddRamen(id, title, ingredients, description );
};

    return (
    <form method="post" onSubmit={handleSubmit}>
        <label>
            Title
            <input 
                type="text" 
                name="title" 
                placeholder="title"
                onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
            Ingredients
            <input 
                type="text" 
                name="ingredients" 
                placeholdere="ingredients"
                onChange={e => setIngredients(e.target.value)} />
        </label>
        <label>
            Description
            <input 
                type="text" 
                name="description" 
                placeholder="description"
                onChange={e => setDescription(e.target.value)} />
        </label>
        <label>
            ID
        <input 
                type="text" 
                name="iid" 
                placeholdere="id"
                onChange={e => setID(e.target.value)} />
                </label>
        <input type="submit" value="Submit" />
    </form>
    );
}

export default AddRamen;
