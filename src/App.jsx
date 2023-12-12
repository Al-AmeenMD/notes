import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateNote from './pages/CreateNote'
import  Notes from "./pages/Notes"
import  EditNote from "./pages/EditNote"

function App() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
    // console.log(notes);
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])
  return (
    <>
       <main id="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes notes={notes}/>}/>
                <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>}/>
                <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>}/>
            </Routes>
        </BrowserRouter>
    </main>
    </>
  )
}

export default App
