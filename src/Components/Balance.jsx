import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction =>transaction.amount)
  const total = amounts.reduce((acc, item)=>(acc += item),0).toFixed(2)
  return (
    <div className='mb-8'>
      <h4 className='text-2xl sm:mr-64 '>Your balance</h4>
      <h1 className='text-5xl'>₦{total}</h1>
    </div>
  )
}

export default Balance
