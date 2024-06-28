import React from 'react'

// instead of using props, we destructure 'singleData' directly for ease:
const SingleUserData = ({singleData}) => {

    // console.log(singleData);

    // further destructuring 'singleData' to avoid showing as dot notation in webpage:
    const {phone, id, company} = singleData;
    // console.log(singleData);

  return (
    <div>
        <h2>Name: {singleData.name}</h2>
        <p>Website: {singleData.website}</p>

        {/* further destructuring 'singleData' to avoid showing as dot notation in webpage: */}

        <p>Phone: {phone}</p>
        <p>ID: {id}</p>
        <h4>Company name: {company.name}</h4>
        <span>catchPhrase: {company.catchPhrase}</span>
    </div>
  )
}

export default SingleUserData