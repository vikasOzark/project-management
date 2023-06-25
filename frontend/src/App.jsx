import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { Dashboard } from './Dashboard/Dashboard'
export default function App() {
  return (
    <Navbar >
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Navbar>
  )
}
