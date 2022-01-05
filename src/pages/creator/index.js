import { useState, useContext } from "react";
import AuthContext from "../../context/CreatorAuthContext"
import { InputText } from "../../components/InputField";

export default function Home() {
    const { creator } = useContext(AuthContext);
    return (
        <div className="space-y-10 pt-[120px] px-[200px] ">
            {creator && <h1>{creator.username}</h1>}
        </div>
    );
}
