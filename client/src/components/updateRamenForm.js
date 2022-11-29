
const UpdateRamenForm = () => {
    return (
        <form>
        <label>
            Title
            <input type="text" name="title" />
        </label>
        <label>
            Ingredients
            <input type="text" name="ingredients" />
        </label>
        <label>
            Description
            <input type="text" name="description" />
        </label>
        <input type="submit" value="Update" />
    </form>
    )
   
   }
   
   export default UpdateRamenForm;
   