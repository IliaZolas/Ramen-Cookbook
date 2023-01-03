import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ramenForm.css"

const AddRamen = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const [file, setFile] = useState()
    const navigate = useNavigate();

    // const uploadImage = async (file) => {
//         await fetch('http://localhost:4000/app/ramen/upload', {
//         method: 'POST',
//         body: ({
//             file: file,
//         })
//         })
//         .then((response) => { 
//             console.log("upload file:",response.json());
//         })
//         .then(() => {
//         setFile();
//         })
//         .catch((err) => {
//         console.log(err.message , ":error message");
//     });
// }

    const AddRamen = async ( title, ingredients, description, file) => {
        await fetch('http://localhost:4000/app/ramen/add', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            ingredients: ingredients,
            description: description,
            file: file,
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
        setFile();
        })
        .catch((err) => {
        console.log(err.message , ":error message");
    });
    // navigate('/ramen');
};

const handleSubmit = (e) => {
    e.preventDefault();
    // uploadImage(file);
    AddRamen( title, ingredients, description );
};

    return (
    <div>
        <div className="form-image-container">

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
                <input type="file" name="ramen" onChange={e => setFile(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" className="primary-submit-button" />
        </form>
    </div>
    );
}

export default AddRamen;
