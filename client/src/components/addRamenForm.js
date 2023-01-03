import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import ramens from "../../../server/models/ramens";
import {Image} from 'cloudinary-react';
import "./ramenForm.css"

const AddRamen = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const uploadUrl = `https://api.cloudinary.com/v1_1/iliacloud9/image/upload`

    const uploadImage = async (files) => {
        console.log("file:",files.target.files[0]);

        const formData = new FormData()
        formData.append("file", files.target.files[0])
        formData.append("upload_preset", "yxlthn8k")

        await fetch(uploadUrl, {
            method: 'POST',
            body: formData
            })
            .then((response) => {
            console.log("uploadImage response",response);
            setImageUrl(formData);
            console.log(formData);
        });
}

    const AddRamen = async ( title, ingredients, description, imageUrl) => {
        await fetch('http://localhost:4000/app/ramen/add', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            ingredients: ingredients,
            description: description,
            imageUrl: imageUrl
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        })
        .then((response) => { 
            console.log(response.json());
        })
        .then(() => {
        setTitle();
        setIngredients();
        setDescription();
        // setImageUrl();
        // setRamen();
        })
        .catch((err) => {
        console.log(err.message , ":error message");
    });
    // navigate('/ramen');
};

const handleSubmit = (e) => {
    e.preventDefault();
    // uploadImage(file);
    AddRamen( title, ingredients, description, imageUrl );
};

    return (
    <div>
        <div className="form-image-container">
            <Image 
                cloudName="iliacloud9"
                publicId={imageUrl}
                />
        </div>
        <form method="post" onSubmit={handleSubmit} enctype="multipart/form-data">
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
            <label className="labels">
                Image
                <input type="file" name="ramen" onChange={uploadImage}/>
            </label>
            <label className="labels">
                imageUrl
                <textarea 
                    type="textarea" 
                    name="imageUrl" 
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)} />
            </label>
            <input type="submit" value="Submit" className="primary-submit-button" />
        </form>
    </div>
    );
}

export default AddRamen;
