import { useState } from "react";
import { InputOption, InputText } from "../../components/InputField";

export default function Home() {
  const [value, setValue] = useState({
    name: "",
    email: "",
  });
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col space-y-10 pt-[120px] px-[200px] ">
      <InputText
        label="Nama"
        type="text"
        value={value.name}
        placeholder="Namamu sopo"
        name="name"
        onChange={onChange}
      />
      <InputOption type="checkbox" label="this is checkbox" />
      <InputOption type="radio" label="this is checkbox" />
    </div>
  );
}
