import { useState } from "react";

function PersonForm() {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(name, age, email);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            />
            <br />

            <label>Age:</label>
            <input type="number"
            value={age}
            onChange={handleAgeChange}
            />
            <br />
            
            <label>Email:</label>
            <input type="string" 
            value={email}
            onChange={handleEmailChange}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default PersonForm