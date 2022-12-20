import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const ShowRamen = () => {
    const [ramen, setRamen] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    // useEffect(() => {
    //     const fetchRamen = async () => {
    //         await fetch(`http://localhost:4000/app/ramen/show/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setRamen(data);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         })
    //         };
    //         fetchRamen();
    //     }
    // , [id]);
        

        const deleteRamen = async (id) => {
            await fetch(`http://localhost:4000/app/ramen/delete/${id}`, {
            method: 'DELETE',
            }).then((response) => {            
                if (response.status === 200) {
                    setRamen(
                        ramen.filter((ramen) => {
                            return ramen.id !== id;
                        })
                    );
                    } else {
                        return;
                    }
                });
                navigate('/ramen');
            };

            const allRamens = () => {
                navigate('/ramen');
            }

    return (
        <div className="">
            <div className="">
                Show {ramen.title}
                    <div className="" style={{padding: "10px", background: "grey", width: "400px", margin: "auto", marginBottom: "25px"}}>
                        <h1>{ramen.id}</h1>
                        <h1>{ramen.title}</h1>
                        <h2 className="">{ramen.ingredients}</h2>
                        <p className="">{ramen.description}</p>
                        <div className="">
                            <div className="delete-button" style={ {background: "red", color: "white", width: "200px", textAlign: "center", margin:"auto"}} onClick={() => deleteRamen(ramen.id)} >Delete</div>
                            <div className="delete-button" style={ {background: "green", color: "white", width: "200px", textAlign: "center", margin:"auto", marginTop: "10px"}} onClick={() => allRamens()}>Back to list</div>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default ShowRamen;