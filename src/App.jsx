import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import Footer from './Components/Footer'
import './App.css'
import {GlobalProvider} from './Context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <div className=' shadow-md rounded flex flex-col items-center justify-center m-24'>
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      <Footer/>
      </div>
    </GlobalProvider>
  )
}

export default App
