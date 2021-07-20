import React, { useEffect, useState } from "react";
import {useForm} from "./useForm";
import { Hello } from "./Hello"
import {useFetch} from "./useFetch";

// the below function is called when we have a heavy computational task, and we want to only called the func only once
// when component renders for the 1st time // It runs on the intial value
// function expInState () {
//   return 10
// }

const App = () => {
    const [values, handleChange] = useForm({email: '', password: '', firstname: ''});

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')))
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    return (
    <div>
        <>
            <div>{!data ? 'loading....' : data}</div>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            {/*<button onClick={() => setShowHello(!showHello)}>Toggle</button>*/}
            {/*{ showHello && <Hello />}*/}
        <input type="text" name="firstname"
               value={values.firstname}
               onChange={handleChange}
               placeholder="First Name"
        />
        <input type="text" name="email"
               value={values.email}
               onChange={handleChange}
               placeholder="Email"
        />
        <input type="password" name="password"
               value={values.password}
               onChange={handleChange}
               placeholder="Password"
        />
        </>
    </div>
  );
}

export default App;
