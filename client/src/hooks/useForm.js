// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initalValues) => {
    // Declare new state variable.
    const [valuesAtCheckout, setValue] = useState(initalValues);

    const handleChanges = (event) => {
        setValue({
            ...valuesAtCheckout,
            [event.target.name]: event.target.value,
        })
    }
    return [valuesAtCheckout, handleChanges]
}

export default useForm;