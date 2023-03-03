import useGithubUser from './useGithubUser';
import { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('')
  const { data, error, loading, refetch } = useGithubUser(username)

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.elements.username.value);
  }
  function handleButtonClick() {
    refetch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='username' type='text' />
        <button type='submit'>submit</button>
      </form>
      {loading && <div>Loading...</div>}
      {!data && <div>please enter an username</div>}
      {error && <div>An error has occurred</div>}
      {data && !error && (
        <>
          <h1>{data.login}</h1>
          <h2>{data.html_url}</h2>
          <img src={data.avatar_url} alt='avatar' />
          <button onClick={handleButtonClick}>Refresh</button>
        </>
      )}
    </div>
  )
}

export default App;