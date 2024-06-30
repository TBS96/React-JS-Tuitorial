import React from 'react'

const SingleFakeData = ({singleData}) => {

    const {img, name, age, phone_no, profession, email, company, website} = singleData;

  return (
    <div className="border-4 border-green-600 p-4 rounded-md m-5 flex gap-10 transition-transform duration-500 cursor-pointer transform hover:scale-105 hover:shadow-red-700 hover:bg-cyan-950">
        <div className='border-2 rounded-full bg-white'>
            <img className='rounded-full' src={img} alt="profile-pic" />
        </div>
        
        <div className='text-slate-200'>
            <h2 className='text-3xl'>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Ph: {phone_no}</h2>
            <h2>Profession: {profession}</h2>
            <h2>Email: {email}</h2>
            <h2>Company: {company}</h2>
            <h2>Website: {website}</h2>
        </div>
    </div>
  )
}

export default SingleFakeData