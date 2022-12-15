

import { useNavigate } from 'react-router-dom';
import { useState } from "react";




const UpdateRamenForm = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const [id, setID ] = useState('');
    const navigate = useNavigate();

const updateRamen = async (id, title, ingredients, description) => {
    await fetch(`http://localhost:4000/app/ramen/update/${id}`, {
        method: 'PUT',
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
    navigate(`/ramen/show/${id}`);

}


    const handleSubmit = (e) => {
        e.preventDefault();
        updateRamen(id, title, ingredients, description );
    };
    

    return (
        <form method="post" onSubmit={handleSubmit}>
        <label className="labels">
            Title
            <input 
                type="text" 
                name="title" 
                placeholder="title"
                onChange={e => setTitle(e.target.value)} />
        </label>
        <label className="labels">
            Ingredients
            <input 
                type="text" 
                name="ingredients" 
                placeholdere="ingredients"
                onChange={e => setIngredients(e.target.value)} />
        </label>
        <label className="labels">
            Description
            <textarea 
                type="textarea" 
                name="description" 
                placeholder="description"
                onChange={e => setDescription(e.target.value)} />
        </label>
        <label className="labels">
            ID
        <input 
                type="text" 
                name="iid" 
                placeholdere="id"
                onChange={e => setID(e.target.value)} />
                </label>
        <input type="submit" value="Submit" className="primary-submit-button" />
    </form>
    )
};

export default UpdateRamenForm;
