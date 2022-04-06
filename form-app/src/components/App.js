import "../App.css";
import React from "react";
import { Component } from "react";

class App extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        accept: false,
        message: "",

        errors: {
            username: false,
            email: false,
            password: false,
            accept: false,
        },
    };

    messages = {
        username_incorrect:
            "Nazwa musi być dłuższa niż 5 znaków i nie może zawierać spacji",
        email_incorrect: " Brak @ w email",
        password_incorrect: " Hasło musi zawierać więcej niż 8 znaków",
        accept_incorrect: "Niepotwierdzona zgoda",
    };
    handleChange = (e) => {
        console.log(e.target.type);
        const name = e.target.name;

        const type = e.target.type;
        if (type === "text" || type === "password" || type === "email") {
            const value = e.target.value;

            this.setState({ [name]: value });
        } else if (type === "checkbox") {
            const checked = e.target.checked;
            this.setState({ [name]: checked });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation();
        if (validation.correct) {
            this.setState({
                username: "",
                email: "",
                password: "",
                accept: false,
                message: "formularz został wysłany",

                errors: {
                    username: false,
                    email: false,
                    password: false,
                    accept: false,
                },
            });
        } else {
            this.setState({
                errors: {
                    username: !validation.username,
                    email: !validation.email,
                    password: !validation.password,
                    accept: !validation.accept,
                },
            });
        }
    };
    formValidation = () => {
        let username = false;
        let email = false;
        let password = false;
        let accept = false;
        let correct = false;
        if (
            this.state.username.length > 5 &&
            this.state.username.indexOf(" ") === -1
        ) {
            username = true;
        }
        if (this.state.email.indexOf("@") !== -1) {
            email = true;
        }
        if (this.state.password.length > 8) {
            password = true;
        }
        if (this.state.accept) {
            accept = true;
        }
        if (username && email && password && accept) {
            correct = true;
        }
        return {
            correct,
            username,
            email,
            password,
            accept,
        };
    };
    componentDidUpdate() {
        if (this.setState.maessage !== "") {
            setTimeout(
                () =>
                    this.setState({
                        message: "",
                    }),
                29000
            );
        }
    }
    render() {
        return (
            <div className="App">
                <form
                    className="app__form"
                    onSubmit={this.handleSubmit}
                    noValidate
                >
                    <label htmlFor="user">
                        <span className="app__span">Imię </span>
                        <input
                            className="app__username"
                            type="text"
                            id="user"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        {this.state.errors.username && (
                            <span>{this.messages.username_incorrect}</span>
                        )}
                    </label>

                    <label htmlFor="email">
                        <span className="app__span"> Email </span>
                        <input
                            className="app__email"
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />{" "}
                        <br />
                        {this.state.errors.email && (
                            <span>{this.messages.email_incorrect}</span>
                        )}
                    </label>
                    <label htmlFor="password">
                        <span className="app__span">Hasło</span>
                        <input
                            className="app__password"
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <br />
                        {this.state.errors.password && (
                            <span>{this.messages.password_incorrect}</span>
                        )}
                    </label>
                    <label htmlFor="accept">
                        <input
                            className="app__checkbox"
                            type="checkbox"
                            id="accept"
                            name="accept"
                            checked={this.state.accept}
                            onChange={this.handleChange}
                        />
                        {this.state.errors.accept && (
                            <span>{this.messages.accept_incorrect}</span>
                        )}
                        <span className="app__span">
                            wyrażam zgodę na przetwarzanie danych *
                        </span>
                    </label>
                    <button className="app__btn">wyślij</button>
                    {this.state.message && (
                        <h3 className="app__h3">{this.state.message}</h3>
                    )}
                </form>
            </div>
        );
    }
}

export default App;