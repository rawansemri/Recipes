import { Suspense, lazy, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SingleDish } from './pages/SingleDish';
import Dishes from './pages/Dishes';
import { Navbar } from './components/Navbar';
import { AddDish } from './pages/AddDish';

const Notfound = lazy(() => import("./pages/Notfound"));
const Home = lazy(() => import("./pages/Home"));

function App() {

  return (
    <div className="App">
      <Suspense fallback='Loading...'>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/singledish/:name/:id" element={<SingleDish/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/dishes/:name" element={<Dishes/>} />
        <Route path="/addDish/:name" element={<AddDish/>} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
