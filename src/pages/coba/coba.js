import React, { useState } from 'react'

const App = () => {

    const [formValues, setFormValues] = useState([{
        group: "bahan utama", igredients: [
            { name: "", email: "" }
        ]
    },])



    let handleChange = (index, i, e) => {
        let newFormValues = [...formValues];
        newFormValues[index]['igredients'][i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        let newFormValues = [...formValues];
        newFormValues.push({ group: "bahan baru", igredients: [{ name: "", email: "" }] });
        setFormValues(newFormValues);
    }

    let addFormIngredents = (i) => {
        let newFormValues = [...formValues];
        newFormValues[i]['igredients'].push({ name: "", email: "" });
        setFormValues(newFormValues);
    }

    let removeFormIngredents = (indexGroup, indexIngredient) => {
        let newFormValues = [...formValues];
        newFormValues[indexGroup]['igredients'].splice(indexIngredient, 1);
        setFormValues(newFormValues);
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
                <div key={index}>
                    <h1>{element.group}</h1>
                    {
                        element.igredients.map((ingredient, i) => (
                            <div className="form-inline" key={i}>
                                <label>Name</label>
                                <input type="text" name="name" value={ingredient.name || ""} onChange={e => handleChange(index, i, e)} />
                                <label>Email</label>
                                <input type="text" name="email" value={ingredient.email || ""} onChange={e => handleChange(index, i, e)} />
                                <button type="button" className="button remove" onClick={() => removeFormIngredents(index, i)}>Remove</button>
                            </div>
                        )
                        )
                    }
                    <div className="button-section">
                        <button className="button add" type="button" onClick={() => addFormIngredents(index)}>Add</button>
                        <button className="button add" type="button" onClick={() => addFormFields()}>Add Bahan</button>
                        <button className="button submit" type="submit">Submit</button>
                    </div>
                </div>
            ))}

        </form>
    )
}

export default App