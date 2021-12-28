import React, { useState } from 'react'
import { Crossl } from '../../assets/icons'
import ButtonPlus from '../../components/ButtonPlus'

const IngredientsForm = (props) => {
    const [formValues, setFormValues] = useState([{
        group: "Bahan Utama", ingredients: [
            { name: "", description: "", amount: 1, unit_id: 1 }
        ]
    },])

    const handleChangeIngredients = (index, i, e) => {
        const newFormValues = [...formValues];
        newFormValues[index]['ingredients'][i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    const handleChangeGrup = (index, e) => {
        const newFormValues = [...formValues];
        newFormValues[index]['group'] = e.target.value;
        setFormValues(newFormValues);
    }


    const addGroup = () => {
        const newFormValues = [...formValues];
        newFormValues.push({ group: "", ingredients: [{ name: "", description: "", amount: 1, unit_id: 1 }] });
        setFormValues(newFormValues);
    }

    const addFormIngredents = (i) => {
        const newFormValues = [...formValues];
        newFormValues[i]['ingredients'].push({ name: "", description: "", amount: 1, unit_id: 1 });
        setFormValues(newFormValues);
    }

    const removeFormIngredents = (indexGroup, indexIngredient) => {
        const newFormValues = [...formValues];
        newFormValues[indexGroup]['ingredients'].splice(indexIngredient, 1);
        setFormValues(newFormValues);
    }

    const removeFormGroup = (i) => {
        const newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    const onChangeHandler = () => {
        props.onChange(formValues);
    }

    return (
        <form onSubmit={handleSubmit} onChange={onChangeHandler} className="font-inter placeholder-gray-400 text-gray-600">
            {formValues.map((element, index) => (
                <div key={index} className="my-2">
                    <div className="flex bg-white border-2 border-gray-300 justify-between p-5 rounded-lg">
                        <input type="text" className="text-lg font-semibold focus:outline-none"
                            onChange={e => handleChangeGrup(index, e)}
                            value={element.group}
                            placeholder="Jenis Bahan"
                        />
                        <svg onClick={() => removeFormGroup(index)} className="cursor-pointer"
                            width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <Crossl />
                        </svg>
                    </div>
                    {
                        element.ingredients.map((ingredient, i) => (
                            <div className="text-base flex bg-white border-2 border-gray-300 justify-between p-5 rounded-lg font-regular my-2" key={i}>
                                <input type="text" className="focus:outline-none"
                                    name="name"
                                    onChange={e => handleChangeIngredients(index, i, e)}
                                    value={ingredient.name}
                                    placeholder="Nama Bahan"
                                />
                                <input type="text" className="focus:outline-none"
                                    onChange={e => handleChangeIngredients(index, i, e)}
                                    value={ingredient.description}
                                    name="description"
                                    placeholder="Keterangan"
                                />
                                <input type="number" className="focus:outline-none w-16"
                                    onChange={e => handleChangeIngredients(index, i, e)}
                                    value={ingredient.amount}
                                    name="amount"
                                    placeholder="jml"
                                />
                                <select name="unit_id" onChange={e => handleChangeIngredients(index, i, e)} className="focus:outline-none w-28 cursor-pointer">
                                    {props.units.map((unit) => (
                                        <option className="cursor-pointer" value={unit.id}>{unit.unit}</option>
                                    ))}
                                </select>
                                <svg onClick={() => removeFormIngredents(index, i)} className="cursor-pointer"
                                    width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <Crossl />
                                </svg>
                            </div>
                        )
                        )
                    }
                    <div className="h-10 pt-3">
                        <ButtonPlus onClick={() => addFormIngredents(index)}>Add Bahan</ButtonPlus>
                    </div>

                </div>
            ))}
            <ButtonPlus onClick={() => addGroup()}>Grup</ButtonPlus>
        </form>
    )
}

export default IngredientsForm