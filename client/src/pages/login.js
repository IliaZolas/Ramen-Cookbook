import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../components/ramenForm.css"
import Cookies from "universal-cookie";
const cookies = new Cookies();

const LoginUser = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // console.log("image url in state:",imageUrl);

    const loginUser = async ( email, password) => {
        await fetch('http://localhost:4000/app/login', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        })
        .then((response) => { 
            console.log(response.json());
        })
        .then((result) => {
        setEmail();
        setPassword();
        cookies.set("TOKEN", result.token, {
            path: "/",
            });
        })
        .catch((err) => {
        console.log(err.message , ":error message");
    });
    navigate('/ramen');
};

const handleSubmit = (e) => {
    e.preventDefault();
    // uploadImage(file);
    loginUser(email, password);
};

    return (
    <div>
        <form method="post" onSubmit={handleSubmit} enctype="multipart/form-data">
            <label className="labels">
                Email
                <input 
                    type="text" 
                    name="email" 
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)} />
            </label>
            <label className="labels">
                Password
                <input 
                    type="text" 
                    name="password" 
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" className="primary-submit-button" />
        </form>
    </div>
    )
};

export default LoginUser;
