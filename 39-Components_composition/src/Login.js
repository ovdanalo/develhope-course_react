import React from "react";

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        check: false,
        pswLength: 'psw-short'
    }

    handleChange = (event) => {
        const name = event.target.name;
        const type = event.target.type;
        const value = event.target.value;
        const checked = event.target.checked;
        let pswLength = "psw-short";
        
        name === "password" && value.length >= 8
            ? pswLength = "psw-ok"
            : pswLength = "psw-short";

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
            pswLength: pswLength
        }, () => {
            console.log(this.state)
        })


    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onLogin(this.state);
    }

    render() {
        const { username, password } = this.state;
        const isDisabled = !username || !password;
        return (
            <div>
                <form>
                    <input name='username' type='text' placeholder="username" onChange={this.handleChange} />
                    <input name='password' type='password' placeholder='password' onChange={this.handleChange} />
                    <input name='check' type='checkbox' onChange={this.handleChange} />
                    <button
                        disabled={isDisabled}
                        onClick={(event) => this.handleSubmit(event)}
                        className={this.state.pswLength}>send</button>
                </form>
            </div>
        )
    }
}

export default Login;