import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
    
        if (name === 'username') {
            setUser(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'check') {
            setRemember(checked);
        }
        console.log(`username: ${user}, psw: ${password}, remember: ${remember}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user, password, remember)
    }
    const isDisabled = !user || !password;
    return (
        <div>
            <form>
                <input name='username' type='text' placeholder="username" value={user} onChange={handleChange} />
                <input name='password' type='password' placeholder='password' value={password} onChange={handleChange} />
                <input name='check' type='checkbox' value={remember} onChange={handleChange} />
                <button disabled={isDisabled} onClick={handleSubmit}>send</button>
            </form>
        </div>
    )
}


export default Login;