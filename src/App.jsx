import Header from './components/header'
import './App.css'

function App() {
// Store our data in a variable.


const data = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 },
];

  return (
    <div>
<Header data={data}/>
    </div>
  )
}

export default App
