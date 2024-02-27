import React, { useState } from 'react'

function Update() {
    const [resturant, setResturant] = useState("Lemon")
    const handle = () =>
    {
        setResturant(resturant == "Lemon" ? "Littile Lemon" : "Lemon")
    }
  return (
    <div>
        {resturant}
        <button onClick={handle}>
            Update Resturant Name
        </button>
    </div>
  )
}

export default Update