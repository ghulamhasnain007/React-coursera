import React from 'react'
import { useState } from 'react'

function Detail() {
    let [form, setForm] = useState({
        firstName: 'Ghulam',
        lastName: "Hasnain",
        email: "hasnain@gmail.com"
    }
    )

    // let [inputText, setInput] = useState('hello');

    function handleChange(e)
    {
        // console.log(e.target.value)
        // setInput(e.target.value)
    }

  return (
    <div>
        {/* <input value={inputText} onChange={handleChange} type="text" />
        <p>You Typed: {inputText}</p>
        <button onClick={()=> setInput('hello')}>
            Reset
            </button> */}
            <label>
                First name:
                <input 
                value={form.firstName}
                onChange={e => {
                    setForm({
                        ...form,
                        firstName: e.target.value
                    });
                }} />
            </label>
            <label>
                Last name:
                <input 
                value={form.lastName}
                onChange={e => {
                    setForm({
                        ...form,
                        lastName: e.target.value
                    });
                }} />
            </label>
            <label>
                Email:
                <input 
                value={form.email}
                onChange={e => {
                    setForm({
                        ...form,
                        email: e.target.value
                    });
                }} />
            </label>
            <p>
                {form.firstName}{' '} 
                {form.lastName}{' '} 
                ({form.email})
            </p>
    </div>
  )
}

export default Detail