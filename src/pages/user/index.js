import Button from "../../components/test/button";
import {
  DropdownMenu,
  DropdownItem,
  Divider,
} from "../../components/test/dropdown";
import { useState } from "react";
import {
  InputCheckbox,
  InputRadio,
  InputText,
} from "../../components/test/inputfield";

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
    </div>
  );
}
