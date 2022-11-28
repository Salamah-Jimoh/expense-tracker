import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' :'+';
    const { deleteTransaction} = useContext(GlobalContext);
  return (
    <div className=''>
      <li className={transaction.amount < 0 ? 'minus flex mb-3 bg-slate-50 text-xl shadow-md rounded ' :'plus flex mb-3 bg-slate-50 text-xl shadow-md rounded'}>
        <p className='flex-1'>{transaction.text}</p> 
        <p className='flex-1'>{sign}₦{Math.abs(transaction.amount)}</p> 
        <button  className='text-blue-100 bg-red-500 text-2xl p-1 hover:bg-red-700'onClick={()=>
         {alert('Delete Transaction?') 
        deleteTransaction(transaction.id)
        }}>X</button>
      </li>
    </div>
  )
}

export default Transaction
