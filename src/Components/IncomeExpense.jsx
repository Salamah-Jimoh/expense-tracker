import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction =>transaction.amount)
  const income =amounts
                .filter(item => item > 0 )
                .reduce((acc,item)=> (acc +=item), 0)
                .toFixed(2);
 const expense =amounts
                .filter(item => item < 0 )
                .reduce((acc,item)=> (acc +=item), 0 * -1)
                .toFixed(2)
  return (
    <div className='flex mb-8'>
        <div className=' p-8 bg-white shadow-md rounded'>
      <h4 className='text-2xl mr-8'>Income</h4>
      <p className='text-xl text-green-600 mt-3'>₦{income}</p>
      </div>
      <div className='bg-white p-8 shadow-md rounded'>
      <h4 className='text-2xl'>Expense</h4>
      <p className='text-xl text-red-600 mt-3'>₦{expense}</p> 
      </div>
    </div>
  )
}

export default IncomeExpense
