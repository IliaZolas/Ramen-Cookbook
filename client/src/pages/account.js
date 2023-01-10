import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./showramen.css"

const ShowRamen = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate;
    const params = useParams();

    useEffect(() => {
        const id = params.id;

        fetch(`http://localhost:4000/app/user/show/${id}`, {
            method: 'GET',
            }).then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        },
        []);
        
        const deleteUser = async (id, public_id) => {
            // const id = params.id;
            // console.log("this is the id in deleteRamen:", id)
            console.log("delete:",id)
            console.log("delete:",public_id)

            fetch(`http://localhost:4000/app/ramen/delete/${id}/${public_id}`, {
            method: 'DELETE',
            }).then((response) => {            
                if (response.status === 200) {
                    setUser();
                    console.log("Ramen deleted");
                    } else {
                        return;
                    }
                });
                navigate('/ramen');
            };

            const updateUser= (id) => {
                navigate(`/user/update/${id}`);
            };

    return (
        <div className="show-user-container">
            <div className="">
                    <div className="" >
                        <div className="show-user-image-container">  
                            <img src={user.imageUrl} style={{width: 400}} alt="" />
                        </div>
                        <h1>{user.name} {user.surname}</h1>
                        <div className="card-button-area">
                            <div className="update-button button" onClick={() => updateUser(ramen._id)} >Update</div>
                            <div className="delete-button button" onClick={() => deleteUser(ramen._id, ramen.public_id)} id={ramen.id}>Delete</div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ShowRamen;