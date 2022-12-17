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
                // console.log(data);
                setRamen(data);
            })
            .catch((err) => {
                console.log(err.message);
            });  
        }, []);

    const deleteRamen = async (id) => {
        await fetch(`http://localhost:4000/app/ramen/delete/${id}`, {
        method: 'DELETE',
        }).then((response) => {            
            if (response.status === 200) {
                setRamen(
                    ramens.filter((ramen) => {
                        return ramen.id !== id;
                    })
                );
                } else {
                    return;
                }
            });
            navigate('/ramen');
        };

    const viewRamen = (id) => {
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
                    <div id={ramen.id} className="ramen-card" >
                        <h1>{ramen.id}. {ramen.title}</h1>
                        <h2>{ramen.ingredients}</h2>
                        <h2>{ramen._id}</h2>
                        <p className="">{ramen.description}</p>
                        <div className="card-button-area">
                            <div className="show-button button" onClick={() => viewRamen(ramen.id)} >View</div>
                            <div className="update-button button" onClick={() => updateRamen(ramen.id)} >Update</div>
                            <div className="delete-button button" onClick={() => deleteRamen(ramen.id)} >Delete</div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RamenCard;