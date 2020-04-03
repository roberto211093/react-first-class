import React, {Component} from "react";

class Login extends Component {
    render() {
        return <button>Iniciar Sesión</button>
    }
}

class Logout extends Component {
    render() {
        return <div>
            <p>Bienvenido</p>
            <button>Cerrar Sesión</button>
        </div>
    }
}

export default class ConditionalSection extends Component {
    state = {isUserLogged: false};

    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                    ? <Logout/>
                    : <Login/>
                }
            </div>
        )
    }
}
