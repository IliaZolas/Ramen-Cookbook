import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const ShowRamen = () => {
    const [ramen, setRamen] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const id = params.id;

        fetch(`http://localhost:4000/app/ramen/show/${id}`, {
            method: 'GET',
            }).then((response) => response.json())
            .then((data) => {
                setRamen(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        },
        []);
        
        const deleteRamen = () => {
            const id = params.id;
            console.log("this is the id in deleteRamen:", id)

            fetch(`http://localhost:4000/app/ramen/delete/${id}`, {
            method: 'DELETE',
            }).then((response) => {            
                if (response.status === 200) {
                    setRamen();
                    } else {
                        return;
                    }
                });
                navigate('/ramen');
            };

            const allRamens = () => {
                navigate('/ramen');
            }

            const updateRamen = (id) => {
                navigate(`/ramen/update/${id}`);
            };

    return (
        <div className="">
            <div className="">
                Show {ramen.title}
                    <div className="" style={{padding: "10px", background: "grey", width: "400px", margin: "auto", marginBottom: "25px"}}>
                        <h1>{ramen.id}</h1>
                        <h1>{ramen.title}</h1>
                        <h2 className="">{ramen.ingredients}</h2>
                        <p className="">{ramen.description}</p>
                        <div className="card-button-area">
                            <div className="show-button button" onClick={() => allRamens()} >Back to list</div>
                            <div className="update-button button" onClick={() => updateRamen(ramen._id)} >Update</div>
                            <div className="delete-button button" onClick={() => deleteRamen(ramen._id)} id={ramen.id}>Delete</div>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default ShowRamen;