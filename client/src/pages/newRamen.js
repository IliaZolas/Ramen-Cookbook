import AddRamenForm from "../components/addRamenForm";
import "./newRamen.css"

const NewRamen = () => {
    return (
        <div className="">
            <div className="">
               Add a new Ramen
               <AddRamenForm />
            </div>
        </div>
      );
}

export default NewRamen;