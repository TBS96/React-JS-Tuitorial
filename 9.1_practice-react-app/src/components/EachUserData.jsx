import React from 'react'

const EachUserData = ({eachData}) => {

    // console.log(eachData);

    const {body, id, title, userId} = eachData;

  return (
    <div>

        <h1>UserID: {userId}</h1>
        <h2>ID: {id}</h2>
        <h3>Title: {title}</h3>
        <p>Body: {body}</p>

    </div>
  )
}

export default EachUserData