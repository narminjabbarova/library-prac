import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import AddProduct from './pages/Add'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<MainLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path='/details/:id' element = {<Details/>}/>
        <Route path='/add' element = {<AddProduct/>}/>
        </Route>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
