import Welcome from './Welcome';
import Counter from './ClickCounter';
import GithubUser from './GithubUser';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Welcome name='Alessandro' />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/users/:username' element={<GithubUser />} />
    </Routes>
  )
}

export default App;