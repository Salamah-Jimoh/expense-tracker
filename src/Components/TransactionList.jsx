import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'
const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  return (
    <div>
      <h3 className='text-2xl mr-64 mb-2'>History</h3>
      <ul>
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </div>
  )
}

export default TransactionList
