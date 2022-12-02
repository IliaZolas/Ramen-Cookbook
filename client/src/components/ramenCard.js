import { useState, useEffect } from "react";

const RamenCard = () => {
    const [ramens, setRamen] = useState([]);
    
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

        // const deleteRamen = async (id) => {
        //     await fetch(`http://localhost:4000/app/ramen/:id`, {
        //     method: 'DELETE',
        //     }).then((response) => {
        //     if (response.status === 200) {
        //         setRamen(
        //             ramens.filter((ramen) => {
        //                 return ramen.id !== id;
        //             })
        //         );
        //     } else {
        //         return;
        //     }
        //     });
        // };

    return (
        <div className="">
            <div className="">
                {ramens.map((ramen) => {
                return (
                    <div className="" key={ramen.title}>
                        <h2 className="">{ramen.ingredients}</h2>
                        <p className="">{ramen.description}</p>
                        <div className="">
                            <div className="" >Delete</div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RamenCard;