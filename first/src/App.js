import './App.css';
import Selection from './components/Selection'
import SearchBox from './components/Searchbox';
import Home from './components/routes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Onewordsearch from './components/routes/Onewordsearch';
import Twowordsearch from './components/routes/Twowordsearch';
import FormValidation from './formValidation'
function App() {

  const Data = [
    { name: "don",id:1 },
    { name: "francis",id:2 },
    { name: 'parvathy',id:3 },
    { name: "krishna",id:4 }
  ]

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/homelink' element={<Home />}/>
          <Route path='/' element={<FormValidation/>}/>
          <Route path='/select' element={ <Selection />}/>
          <Route path='/search' element= {<SearchBox userData={Data}/> }/>
          <Route path='/onewordsearch' element={<Onewordsearch userData={Data}/>}/>
          <Route path='/twowordsearch' element={<Twowordsearch userData={Data}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
