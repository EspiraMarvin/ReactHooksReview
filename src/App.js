import React, { useState } from "react";
import {useForm} from "./useForm";

// the below function is called when we have a heavy computational task, and we want to only called the func only once
// when component renders for the 1st time // It runs on the intial value
// function expInState () {
//   return 10
// }

const App = () => {
  // const [{count, count2 }, setCount] = useState({ count: 10, count2: 20})
  const [values, handleChange] = useForm({email: '', password: ''})
  const [values2, handleChange2] = useForm({firstname: '', lastname: ''})

  return (
    <div>
        <input type="text" name="email"
               value={values.email}
               onChange={handleChange}
        />
        <input type="password" name="password"
               value={values.password}
               onChange={handleChange}
        />
        <input type="text" name="firstname"
               value={values.firstname}
               onChange={handleChange}
        />
        <input type="text" name="lastname"
               value={values.lastname}
               onChange={handleChange}
        />

    </div>
  );
}

export default App;
