import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data.js'

function App() {
  const dataa = data.map((obj,index) => {
    return <Card key = {index}
                  info = {obj}/>
  });

  return (
    <>
      <Header/>
      <form action = "another-page/">
        {dataa}
      </form>
    </>
  )
}

export default App
