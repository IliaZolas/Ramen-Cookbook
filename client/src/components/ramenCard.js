import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './ramencard.css'



const RamenCard = () => {
    const [ramens, setRamen] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('http://localhost:4000/app/ramen')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRamen(data);
            })
            .catch((err) => {
                console.log(err.message);
            });  
        }, []);

    const deleteRamen = async (id) => {
        console.log("delete:",id)

        await fetch(`http://localhost:4000/app/ramen/delete/${id}`, {
        method: 'DELETE',
        }).then((response) => {            
            if (response.status === 200) {
                setRamen();
                console.log("Ramen deleted");
                } else {
                    console.log("Ramen not deleted");
                }
            });
            // navigate('/ramen');
        };

    const viewRamen = async (id) => {
        console.log("this is id", id);
        navigate(`/ramen/show/${id}`);
    };

    const updateRamen = (id) => {
        navigate(`/ramen/update/${id}`);
    };


    return (
        <div className="">
            <div className="card-area">
                {ramens.map((ramen) => {
                return (
                    <div id={ramen._id} className="ramen-card" >
                        <h1>{ramen.title}</h1>
                        <h2>{ramen.ingredients}</h2>
                        <p className="">{ramen.description}</p>
                        <div className="card-button-area">
                            <div className="show-button button" onClick={() => viewRamen(ramen._id)} >View</div>
                            <div className="update-button button" onClick={() => updateRamen(ramen._id)} >Update</div>
                            <div className="delete-button button" onClick={() => deleteRamen(ramen._id)} id={ramen.id}>Delete</div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RamenCard;