import gameOfThrones from './gameOfThrones'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Houses from './components/Houses'
import House from './components/House'
import Member from './components/Member'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Houses houses={gameOfThrones} />} />
          <Route
            path="/houses/:id"
            element={<House houses={gameOfThrones} />}
          />
          <Route
            path="/houses/:houseId/members/:memberId"
            element={<Member houses={gameOfThrones} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
