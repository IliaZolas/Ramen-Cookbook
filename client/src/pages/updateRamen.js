import UpdateRamenForm from "../components/updateRamenForm";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";

const UpdateRamen = () => {



    return (
        <div className="">
            <div className="">
                Update a Ramen
                <UpdateRamenForm />
            </div>
        </div>
    );
}

export default UpdateRamen;