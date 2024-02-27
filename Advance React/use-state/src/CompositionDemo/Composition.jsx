import React from 'react' 
import './Composition.css';

const Button = ({children, backgroundColor})=> {
    return <button style={{backgroundColor}}>{children}</button>
}
const Alert = ({children}) =>{
    return(
    <>
    <div className="overlay" />
    <div className="Alert">{children}</div>
    </>
    )
}
const DeleteButton = () => {
    return <Button backgroundColor={"red"}>Delete</Button> 
}

function Composition() {
  return (
    <div className='App'>
        <header>Littile Lemon Resturant</header>
        <Alert>
            <h4>Delete Account</h4>
            <p>Are you sure you want to proceed?</p>
        </Alert>
        <DeleteButton/>
    </div>
  )
}

export default Composition