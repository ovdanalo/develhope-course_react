import React from "react";

class Login extends React.Component {
state = {
    username: '',
    password: '',
    check: false
}

handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;

    this.setState({
        [name]: type === 'checkbox' ? checked : value
    })
}
componentDidUpdate(){
    console.log(this.state)
}
    render() {
        return (
            <div>
                <input name='username' type='text' placeholder="username" onChange={this.handleChange} />
                <input name='password' type='password' placeholder="aaaaaaa" onChange={this.handleChange} />
                <input name='check' type='checkbox' onChange={this.handleChange} />
            </div>
        )
    }
}

export default Login;