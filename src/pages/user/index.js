import { useState, useContext } from "react";
import AuthContext from "../../context/CreatorAuthContext"
import { InputText } from "../../components/InputField";

export default function Home() {
  const { loginUser, user, logoutUser } = useContext(AuthContext);
  const [valueForm, setValue] = useState({
    username: "",
    password: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setValue({ ...valueForm, [name]: value });
  };

  return (
    <div className="flex flex-col space-y-10 pt-[120px] px-[200px] ">
      {user && <h1>{user.username}</h1>}
      <form onSubmit={loginUser}>
        <InputText
          label="Nama"
          type="text"
          value={valueForm.username}
          placeholder="Namamu sopo"
          name="username"
          onChange={onChange}
        />
        <InputText
          label="email"
          type="password"
          value={valueForm.password}
          placeholder="emailmu opo"
          name="password"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={logoutUser}>Submit</button>
    </div>
  );
}
