import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExp from './components/IncomeExp'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

function App() {
 const intialState = {
  transaction: 
    [
         { id: 1, text: 'Flower', amount: -20 },
         { id: 2, text: 'Salary', amount: 300 },
         { id: 3, text: 'Book', amount: -10 },
         { id: 4, text: 'Camera', amount: 150 }
    ],
  }
  const [transactions,setTransaction] = useState(intialState.transaction);
  
  function deleteTransaction(id){
    const updatedTransactions = transactions
    .filter(transaction=>transaction.id!==id)
    setTransaction(updatedTransactions)
  }
  function addTransaction(text,amount){
    const newTransaction = {id:Math.floor(Math.random()* 100000),
    text,
    amount
    };
    setTransaction([...transactions,newTransaction])

  }

  return (
    <>
      <Header/>
      <Balance transactions = {transactions}/>
      <IncomeExp transactions = {transactions}/>
      <TransactionList transactions = {transactions} deleteTransaction={deleteTransaction}/>
      <AddTransaction transactions = {transactions} addTransaction={addTransaction}/>   
    </>
  )
}

export default App
