import useGithubUser from './useGithubUser';

const App = () => {
  const {data, error, loading} = useGithubUser('')

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!data.login && <div>Please enter a username</div>}
      {error && <div>An error has occurred</div>}
      {data.login && !error && (
        <>
          <h1>{data.login}</h1>
          <h2>{data.html_url}</h2>
          <img src={data.avatar_url} alt='avatar' />
        </>
      )}
    </div>
  )
}

export default App;