import React, { useState } from 'react'

const SubmitForm = () => {

  const [text, setText] = useState('');
  console.log(text);
  const [email, setEmail] = useState('');
  console.log(email);
  const [pass, setPass] = useState('');
  console.log(pass);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.pass);
    // console.log(e.target.pass.value);
  };

  const  nameText = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const  eMail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const passWord = (e) => {
    // console.log(e.target.value);
    setPass(e.target.value);
  };

  return (
    <div>

      <form onSubmit={submitForm}>

        <input onChange={nameText} type="text" name="texts" /> <br /><br />
        <input onChange={eMail} type="email" name="e_mail" /> <br /><br />
        <input onChange={passWord} type="password" name="pass" /> <br /><br />
        <input type="submit" value="Submit Form" />

      </form>

    </div>
  )
}

export default SubmitForm