import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



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
        fetch(`http://localhost:4000/app/ramen/${id}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            setRamen(data);
        })
        .catch((err) => {
            console.log(err.message);
        }); 
        navigate(`/ramen/show/${id}`);
    };


    return (
        <div className="">
            <div className="">
                {ramens.map((ramen) => {
                return (
                    <div id={ramen.id} className="" style={{padding: "10px", background: "grey", width: "400px", margin: "auto", marginBottom: "25px"}}>
                        <h1>{ramen.id}</h1>
                        <h1>{ramen.title}</h1>
                        <h2 className="">{ramen.ingredients}</h2>
                        <p className="">{ramen.description}</p>
                        <div className="">
                            <div className="delete-button" style={ {background: "red", color: "white", width: "200px", textAlign: "center", margin:"auto"}} onClick={() => deleteRamen(ramen.id)} >Delete</div>
                            <div className="delete-button" style={ {background: "green", color: "white", width: "200px", textAlign: "center", margin:"auto", marginTop: "10px"}} onClick={() => viewRamen(ramen.id)} >View</div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RamenCard;