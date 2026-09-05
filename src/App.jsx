import { useState } from 'react'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import './App.css'
import monkeyData from './data/monkeys.json';


function App() {
  const [monkeys, setMonkeys] = useState(monkeyData);


  const handleDelete = (id) => {
    const listMonkeys = monkeys.filter((monkey) => monkey.Name !== id);
    setMonkeys(listMonkeys);
  };


  return (
    <>
      <Header />
     
      <Content
        monkeys={monkeys}
        handleDelete={handleDelete}
      />


      <Footer />
    </>
  )
}


export default App

