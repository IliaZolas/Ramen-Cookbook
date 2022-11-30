import { useState } from "react";

const AddRamenForm = () => {
    const [ramen, setRamen ] = useState([{
        title:'',
        ingredients:'',
        description:''
    }]);

    const onSubmitForm = async e => {
        try {
            const body = { title, description, ingredients};
            const response = await fetch("http://localhost:4000/ramen/new", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            });
      
            window.location = "/ramen";
          } catch (err) {
            console.error(err.message);
          }
    };

 return (
    <form method="post" onSubmit={onSubmitForm}>
        <label>
            Title
            <input 
                type="text" 
                name="title" 
                value="title"
                onChange={e => setRamen(e.target.value.title)} />
        </label>
        <label>
            Ingredients
            <input 
                type="text" 
                name="ingredients" 
                value="ingredients"
                onChange={e => setRamen(e.target.value.ingredients)} />
        </label>
        <label>
            Description
            <input 
                type="text" 
                name="description" 
                value="description"
                onChange={e => setRamen(e.target.value.description)} />
        </label>
        <input type="submit" value="Submit" />
    </form>
 );

}

export default AddRamenForm;
