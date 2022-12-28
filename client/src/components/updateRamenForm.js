import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./ramenForm.css"




const UpdateRamenForm = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const navigate = useNavigate();

const updateRamen = async (id, title, ingredients, description) => {
    await fetch(`http://localhost:4000/app/ramen/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            ingredients: ingredients,
            description: description
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        })
        .then((response) => { 
            response.json();
        })
        .then(() => {
        setTitle();
        setIngredients();
        setDescription();
        })
        .catch((err) => {
        console.log(err.message , ":error message");
    });
}

    const handleSubmit = (id) => {
        updateRamen(id, title, ingredients, description );
        navigate(`/ramen/show/${id.id}`);
        
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
                type="text" 
                name="description" 
                placeholder="description"
                onChange={e => setDescription(e.target.value)} />
        </label>
        <input type="submit" value="Submit" className="primary-submit-button" />
    </form>
    )
};

export default UpdateRamenForm;
