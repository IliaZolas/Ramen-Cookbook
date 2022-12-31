import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./ramenForm.css"




const UpdateRamenForm = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const id = params.id;
        // console.log(id, "useEffect")
        fetch(`http://localhost:4000/app/ramen/show/${id}`, {
            method: 'GET',
            }).then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setIngredients(data.ingredients);
                setDescription(data.description);
                // console.log(data.title, data.ingredients, "data from useEffect")
            })
            .catch((err) => {
                console.log(err.message);
            });
        },
        []);

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

    const handleSubmit = () => {
        const id = params.id
        updateRamen(id, title, ingredients, description );
        navigate(`/ramen/show/${id}`);
        
    };
    

    return (
        <form method="post" onSubmit={handleSubmit}>
        <label className="labels">
            Title
            <input 
                type="text" 
                name="title" 
                placeholder={title}
                onChange={e => setTitle(e.target.value)} />
        </label>
        <label className="labels">
            Ingredients
            <input 
                type="text" 
                name="ingredients" 
                placeholder={ingredients}
                onChange={e => setIngredients(e.target.value)} />
        </label>
        <label className="labels">
            Description
            <textarea 
                type="text" 
                name="description" 
                placeholder={description}
                onChange={e => setDescription(e.target.value)} />
        </label>
        <input type="submit" value="Submit" className="primary-submit-button" />
    </form>
    )
};

export default UpdateRamenForm;
