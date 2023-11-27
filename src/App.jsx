import { useState } from 'react'
import About from './Components/About'
import Blogs from './Components/Blogs'
import CEx from './Components/CEx'
import Contact from './Components/Contact'

export default function App() {
  const [mode, setMode] = useState('light')
  return (
    <div className="w-full" data-theme={mode}>
      <About mode={mode} setMode={setMode}/>
      <CEx />
      <Blogs />
      <Contact />
    </div>
  )
}