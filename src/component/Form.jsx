import { useState } from "react"
import Button from "./Button"
function Form({id,AddFriend}) {
    
    const [formData, setFormData] = useState({name:"",image:`https://i.pravatar.cc/48?u=${id}`})

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setFormData(currData=>(
            {
                ...currData,
                [name]:value
            }
        ))
    }

    const handleSubmission = (e)=>{
        e.preventDefault();

        if(!formData.name || !formData.image) return;

        AddFriend(formData);
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmission}>
            <label htmlFor="Friend Name">👭Friend Name</label>
            <input type="text" name="name" id="Friend Name" value={formData.name} onChange={handleChange} />
            <label htmlFor="Image Url">🌅Image Url</label>
            <input type="text" name="image" id="Image Url" value={formData.image}/>
            <Button type="submit"><span>Add</span></Button>
        </form>
        
    )
}

export default Form
