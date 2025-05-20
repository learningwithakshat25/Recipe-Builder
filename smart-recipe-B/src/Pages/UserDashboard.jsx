import React, { useState } from 'react'

const UserDashboard = () => {
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [quantity, setquantity] = useState('');
    const [select, setselect] = useState('');

  return (
    <div className='w-full h-screen flex flex-col items-center gap-8'>
        <h1 className='font-semibold text-4xl text-[#DE752E]'>Quick Write your Recipe</h1>
        <div className="form flex flex-col gap-4 w-96">
            <input
            value={name}
            onChange={(e)=>{
                setname(e.target.value);
                console.log(name);
                
            }}
            className='rounded-md p-2 border border-[#DE752E] ' type="text" placeholder='Enter your Recipe' />
            <input
             value={description}
            onChange={(e)=>{
                setdescription(e.target.value);
                console.log(description);
                
            }}
             className='rounded-md p-2 border border-[#DE752E] ' type="text" placeholder='Enter your Description' />
            <input
             value={quantity}
            onChange={(e)=>{
                setquantity(e.target.value);
                console.log(quantity);
                
            }}
            className='rounded-md p-2 border border-[#DE752E] ' type="number" placeholder='Enter Quantity' />
            <select value={select} onChange={(e)=>{
                setselect(e.target.value);
                console.log(e.target.value);
            }} className='rounded-md p-2 border border-[#DE752E] ' name="" id="">
                <option value='Select Quantity'>Select Quantity</option>
                <option value='gm'>gm</option>
                <option value='ml'>ml</option>
                <option value='tb'>tb</option>
                <option value='kg'>kg</option>
                <option value='ltr'>ltr</option>
            </select>
            <button className='bg-[#DE752E] rounded-md cursor-pointer p-2 font-medium text-white'>Add</button>
        </div>

    </div>
  )
}

export default UserDashboard