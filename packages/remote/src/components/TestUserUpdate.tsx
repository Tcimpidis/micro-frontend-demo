import { FormEvent, useContext, useState } from "react";
import { FakeUserContext } from "../FakeUserProvider";

export const User = () => {
    const context = useContext(FakeUserContext);
    const {firstName, lastName, setFirstName, setLastName} = context || {}
    const [localFirstName, setLocalFirstName] = useState<string>("");
    const [localLastName, setLocalLastName] = useState<string>("");

    const handleLocalFirstNameChange = (e: FormEvent<HTMLInputElement> ) => {
        setLocalFirstName(e.currentTarget.value)
    }

    const handleLocalLastNameChange = (e: FormEvent<HTMLInputElement> ) => {
        setLocalLastName(e.currentTarget.value)
    }

    
    const handleFirstNameChange = () => {
        if(setFirstName){
            setFirstName(localFirstName as string)
        }
    }

    const handleLastNameChange = () => {
        if(setLastName){
            setLastName(localLastName as string)
        }
    }


    return (
        <div>
            <div>
                <div>
                    <label>Existing First Name: </label>
                    <span>{firstName}</span>
                </div>
                <label>Update First Name: </label>
                <input onChange={handleLocalFirstNameChange}/>
                <button onClick={handleFirstNameChange}>Change</button>
            </div>
            <div>
            <div>
                    <label>Existing Last Name: </label>
                    <span>{lastName}</span>
                </div>
                <label>Update Last name: </label>
                <input onChange={handleLocalLastNameChange}/>
                <button onClick={handleLastNameChange}>Change</button>
            </div>
        </div>
    )
}