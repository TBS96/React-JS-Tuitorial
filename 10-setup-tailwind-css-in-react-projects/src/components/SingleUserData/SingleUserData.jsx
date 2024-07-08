import React from 'react'
import './SingleUserData.css'

const SingleUserData = ({singleData}) => {

    const {phone, id, company} = singleData;

  return (
    <div className='border-2 border-red-600 p-4 bg-zinc-400 rounded-md'>

        <h2 className='text-4xl'>Name: {singleData.name}</h2>
        <p className='text-3xl'>Website: {singleData.website}</p>

        <p>Phone: {phone}</p>
        <p>ID: {id}</p>
        <h4>Company name: {company.name}</h4>
        <span>catchPhrase: {company.catchPhrase}</span>

    </div>
  )
}

export default SingleUserData