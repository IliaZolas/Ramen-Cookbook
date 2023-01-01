import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ramenForm.css"

const AddRamen = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const [file, setFile] = useState()
    const navigate = useNavigate();

    function handleChange(event) {
        setFile(event.target.files[0])
      }

    const AddRamen = async ( title, ingredients, description) => {
        await fetch('http://localhost:4000/app/ramen/add', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            ingredients: ingredients,
            description: description,
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
        })
        .catch((err) => {
        console.log(err.message , ":error message");
    });
    navigate('/ramen');
};

const handleSubmit = (e) => {
    e.preventDefault();
    AddRamen( title, ingredients, description );
};

    return (
    <div>
        <div className="form-image-container">

        </div>
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
                    placeholder="ingredients"
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
            <input type="file" onChange={handleChange}/>
            <input type="submit" value="Submit" className="primary-submit-button" />
        </form>
    </div>
    );
}

export default AddRamen;
