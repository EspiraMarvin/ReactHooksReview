import React, { useState, useRef } from "react";
import {useForm} from "./useForm";
import { Hello } from "./Hello"
import {useMeasure} from "./useMeasure";

const App = () => {
    const [values, handleChange] = useForm({
        email: '',
        password: '',
        firstname: ''
        });

    const  [showHello, setShowHello] = useState(true)
    const inputRef = useRef()
    // using ref as a function
    const hello = useRef(() => console.log('hello'))

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('form submitting.....', values)
    }

    const [rect, inputRef2] = useMeasure([])


    return (
    <div>
        <>
            <button onClick={() => setShowHello(!showHello)}>Toggle</button>
            { showHello && <Hello />}
            <form onSubmit={handleFormSubmit}>

        <input
            ref={inputRef}
            type="text" name="firstname"
            value={values.firstname}
            onChange={handleChange}
            placeholder="First Name"
        />
        <input
            ref={inputRef2}
            type="text" name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
        />
        <input type="password" name="password"
               value={values.password}
               onChange={handleChange}
               placeholder="Password"
        />
        <button onClick={() => {
            inputRef.current.focus()
            hello.current()
        }}
        >Focus</button>
            </form>
        </>
    </div>
  );
}

export default App;
