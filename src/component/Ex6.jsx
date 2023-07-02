import React, { useState } from 'react'

//login component
const LoginForm = (props) =>{
    return(
        <div className="form">
        <form>
            <fieldset>
                <legend>Login Form</legend>
            <div className="row">
                <label htmlFor="user">UserName</label>
                <input type="text" name="user" id="user" required/>
            </div>
            <div className="row">
                <label htmlFor="pass">password</label>
                <input type="password" name="pass" id="pass" required/>
            </div>
            <div className="row">
                <input  type="submit" value="login" className="btn"/>
            </div>
            </fieldset>
        </form>
    </div>
    )
}
//register component
const RegisterForm = (props)=>{
    return(
        <div className="form">
        <form>
            <fieldset>
                <legend>Login Form</legend>
            <div className="row">
                <label htmlFor="user">UserName</label>
                <input type="text" name="user" id="user" required/>
            </div>
            <div className="row">
                <label htmlFor="pass">password</label>
                <input type="password" name="pass" id="pass" required/>
            </div>
            <div className="row">
                <input  type="submit" value="login" className="btn"/>
            </div>
            </fieldset>
        </form>
    </div>
    )
}
const Ex6 = (props) =>{
    //const [state handler] = useState(initial value)
    const [view,setView] = useState(false)

    const toggle = () =>{
        if(view){
            setView(false) /*register*/
        }else{
            setView(true) /*login*/
        }
    }

    return(
        <div>
            <h3>State Handler</h3>
            <button onClick={toggle} className="btn" >{view ? "Register" : "Login" }</button>
            <section>
            {
                view ? <LoginForm/> : <RegisterForm/>
            }
            </section>
        </div>
    )
}

export default Ex6