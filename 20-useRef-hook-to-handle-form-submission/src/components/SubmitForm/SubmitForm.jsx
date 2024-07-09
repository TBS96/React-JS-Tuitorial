import React, { useRef, useState } from 'react'

const SubmitForm = () => {

    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [pass,setPass] = useState('');

    const [error, setError] = useState('');

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        // if(pass.length < 8) {
        //     setError('Password must be 8 characters');
        // }
        // else {
        //     setError('');
        //     console.log(name);
        //     console.log(email);
        //     console.log(pass);
        // }

        if(passRef.current.value.length < 8) {
            setError('Password must be 8 characters');
        }
        else {
            setError('');
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passRef.current.value);
        }

        nameRef.current.value = '';
        emailRef.current.value = '';
        passRef.current.value = '';
    };

  return (
    <div>
        <form onSubmit={handleSubmitForm}>

            {/* <input onChange={(e) => {setName(e.target.value)}} type="text" name="text" required /> <br />
            <input onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" required /> <br />
            <input onChange={(e) => {setPass(e.target.value)}} type="password" name="pass" required /> <br /> <br />
            
            <small>{error}</small> <br />

            <input type="submit" value="Submit Now" /> */}


            <input ref={nameRef} defaultValue={'Your Name'} type="text" name="text" required /> <br />
            <input ref={emailRef} defaultValue={'hello@email.com'} type="email" name="email" required /> <br />
            <input ref={passRef} defaultValue={'Password'} type="password" name="pass" required /> <br />

            <small>{error}</small> <br />
             <br />
            

            <input type="submit" value="Submit Now" />

        </form>
    </div>
  )
}

export default SubmitForm

// e stands for event.