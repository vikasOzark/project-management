import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { Dashboard } from './Dashboard/Dashboard'
import { Todo } from './Todo/Todo'
export default function App() {
  return (
    <Navbar >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Navbar>
  )
}
