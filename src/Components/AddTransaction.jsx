import React from 'react'
import { useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const{addTransaction} =useContext(GlobalContext);
    const onSubmit = e =>{
      e.preventDefault();
      const newTransaction ={
        id:Math.floor(Math.random()*10000),
        text,
        amount:+amount,
      }
      addTransaction(newTransaction)
      //Clear fields
  setText(e.target.value='');
  setAmount(e.target.value='')
    }
  return (
    <div>
      <h3 className='text-2xl mr-64 mb-2'>Add new Transaction</h3>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={onSubmit}>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Text</label>
        <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 mb-6 text-gray-700
        leading-tight focus:outline-none focus:shadow-outline'
        placeholder='Enter text...' value={text} onChange={(e)=>{
                   setText(e.target.value)
        }}/>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Amount <br/>
        (negative -expense, positive+income)
        </label>
        <input type="number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
        leading-tight focus:outline-none focus:shadow-outline'
         placeholder='Enter text...'  value={amount} onChange={(e)=>{
                   setAmount(e.target.value)
        }}/>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold mt-6 py-2 px-4
        rounded focus:outline-none focus:shawdow:outline'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
