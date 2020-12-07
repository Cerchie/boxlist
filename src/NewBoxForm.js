import React, {useState} from 'react';

const NewBoxForm = ({addBox}) => {
const INITIAL_STATE = {
    backgroundColor: '',
    height: '',
    width: ''

}
const [formData, setFormData] = useState(INITIAL_STATE);
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
}
const handleSubmit = (e) => {
e.preventDefault();
addBox({...formData});
setFormData(INITIAL_STATE)
}

return (
    <form onSubmit={handleSubmit} id="form">
        <label htmlFor="backgroundColor"> backgroundColor</label>
        <input 
        type="text" 
        name="backgroundColor" 
        placeholder="BG Color"
        value={formData.backgroundColor}
        onChange={handleChange}
        />
        
        {/* <input 
        id="qty"
        type="text" 
        name="qty"
        placeholder="Quantity"
        value={formData.qty}
        onChange={handleChange}
        /> */}
        <label htmlFor="width"> width: {formData.width}</label>
    <input 
    id="width"
    type="range" 
    name="width"
    min="10" 
    max="900"
    value={formData.width}
    onChange={handleChange}
    />
         <label htmlFor="height">height: {formData.height}</label>
    <input 
    id="height"
    type="range" 
    name="height"
    min="10" 
    max="900"
    value={formData.height}
    onChange={handleChange}
    />

<button onClick={addBox}>Add Box</button>

    </form>
)
}

export default NewBoxForm;