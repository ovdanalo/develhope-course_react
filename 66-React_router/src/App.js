import Welcome from './Welcome';
import Counter from './ClickCounter';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';
import NotFound from './NotFound';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/users'>Github Users List</Link>
      <Link to='/users/ovdanalo'>Github User</Link>
      <Routes>
        <Route path='/' exact element={<Welcome name='Alessandro' />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/users' element={<GithubUserList />} >
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=':username' element={<ShowGithubUser />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;