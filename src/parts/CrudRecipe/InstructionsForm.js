import { useState } from 'react';
import { Crossl } from '../../assets/icons';
import ButtonPlus from '../../components/ButtonPlus';
import Upload from '../../components/Upload'

const InstructionsForm = (props) => {
    const [formValues, setFormValues] = useState([
        { step: 1, instruction: '', file_image: null, url_image: '' }
    ])
    const handleChangeImage = (index, file) => {
        const newFormValues = [...formValues];
        newFormValues[index]['file_image'] = file;
        setFormValues(newFormValues);
    }

    const handleChange = (index, e) => {
        const newFormValues = [...formValues];
        newFormValues[index][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    const addForm = () => {
        const newFormValues = [...formValues];
        newFormValues.push({
            step: formValues.length + 1,
            instruction: '',
            file_image: {},
            url_image: ''
        });
        setFormValues(newFormValues);
    }

    const removeForm = (i) => {
        const newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    }

    return (
        <div className="group-ingredients">
            <form onChange={() => props.onChange(formValues)} className="font-inter placeholder-gray-400 text-gray-600">
                {formValues.map((element, index) => (
                    <div className="item-ingredient mb-10" key={index}>
                        <p className="text-lg font-semibold">Langkah {element.step}</p>
                        <div className="text-base flex bg-white border-[0.8px] border-gray-300 justify-between p-5 rounded-lg font-regular my-2">
                            <textarea
                                rows={1}
                                name='instruction'
                                className="focus:outline-none w-full"
                                onChange={e => handleChange(index, e)} />
                            <svg onClick={() => removeForm(index)} className="cursor-pointer"
                                width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <Crossl />
                            </svg>
                        </div>
                        <div className="w-[276px] h-[184px]">
                            <Upload onChange={file => handleChangeImage(index, file)} />
                        </div>
                    </div>
                ))}
            </form>

            <div className="h-10 pt-3">
                <ButtonPlus onClick={addForm}>Add Bahan</ButtonPlus>
            </div>
        </div>

    )
}

export default InstructionsForm;