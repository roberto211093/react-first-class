// import React {Component} from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import BitCoinPriceContainer from "./sections/container-component";
/*
import ConditionalSection from './sections/conditional';
import CicloDeActualizacion from './sections/cicloDeActualizacion';
import cars from './data/cars.json';
*/
// const Hello = (props) => <h2>{props.title}</h2>;
/*
class Hello extends Component {
    render() {
        return <h2>{this.props.title}</h2>;
    }
}

class Text extends Component {
    render() {
        const {
            arrayOfNumber,
            boolean,
            multiply,
            title
        } = this.props;
        const texSegunBoolean = boolean ? 'Cierto' : 'Falso';
        const mappedNumbers = arrayOfNumber.map(n => n * 2);
        const numMulti = arrayOfNumber.map(multiply);
        return (
            <div>
                <p>{mappedNumbers.join(', ')}</p>
                <p>{texSegunBoolean}</p>
                <p>{numMulti.join(', ')}</p>
                <p>{this.props.number}</p>
                <p>{this.props.objectWihtInfo.key}</p>
                <p>{this.props.objectWihtInfo.color}</p>
                <p>{this.props.text}</p>
                {arrayOfNumber.map((arrayOfNumber, index) => {
                    return <p key={index}>Soy el numero {arrayOfNumber}</p>
                })}
                {title}
            </div>
        )
    }

}

Text.defaultProps = {
    text: 'Texto por defecto'
};

class Contador extends Component {
    state = {contador: this.props.contadorInicial};

    render() {
        setInterval(() => {
            this.setState({contador: this.state.contador + 1})
        }, 1000000);
        return <ContadorNumero numero={this.state.contador}/>
    }
}

Contador.defaultProps = {
    contadorInicial: 0
};

class ContadorNumero extends Component {
    render() {
        return <span>El ContadorNumero esta en: {this.props.numero}</span>;
    }
}

class CarItem extends Component {
    render() {
        const {car} = this.props;
        return (
            <li>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>
            </li>
        )
    }
}

function App() {
    return (
        <div className="App">
            <div>
                <CicloDeActualizacion />
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Hello title='Bienvenidos a este Curso'></Hello>
            </header>
            <Text arrayOfNumber={[1, 1, 9, 21]}
                  boolean={false}
                  multiply={(number) => number * 3}
                  number={2}
                  objectWihtInfo={{key: 'value', color: 'Rojo'}}
                  text='texto cualquiera'
                  title={<h1>texto cualquiera</h1>}
            >
            </Text>
            <h1>Primer componente con estado</h1>
            <Contador contadorInicial={100}></Contador>
            <br/>
            <br/>
            <ConditionalSection/>
            <ul>
                {
                    cars.map(car => {
                        return <CarItem key={car.id} car={car}/>
                    })
                }
            </ul>
        </div>
    );
}
*/
function App() {
    return (
        <div className="App">
            <div>
                <BitCoinPriceContainer />
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
        </div>
    );
}


export default App;
