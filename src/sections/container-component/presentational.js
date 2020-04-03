import React from "react";

/* Como lo mejoro el Profe */
const _renderCurrencies = (bpi) => (
    Object.keys(bpi).map(currency => (
        <div key={currency}>
            1 BTC is {bpi[currency].rate}
            <span> {bpi[currency].code}</span>
        </div>
    ))
);

const BitCoinPrice = ({ bpi }) => (
    <div>
        <h4>Bitcoin Price Index</h4>
        {_renderCurrencies(bpi)}
    </div>
);

export default BitCoinPrice;

/* como lo mejore yo */
// function _renderCurrencies (props) {
//     const { bpi } = props;
//
//     return Object.keys(bpi).map(currency => (
//         <div key={currency}>
//             1 BTC is {bpi[currency].rate}
//             <span> {bpi[currency].code}</span>
//         </div>
//     ))
// }
// export default function BitCoinPrice(props) {
//     return (
//         <div>
//             <h4>Bitcoin Price Index</h4>
//             {_renderCurrencies(props)}
//         </div>
//     )
// }

/* Como estaba en la clase */
// export default class BitCoinPrice extends Component {
//     _renderCurrencies () {
//         const { bpi } = this.props;
//
//         return Object.keys(bpi).map(currency => (
//         <div key={currency}>
//             1 BTC is {bpi[currency].rate}
//             <span> {bpi[currency].code}</span>
//         </div>
//         ))
//     }
//
//     render() {
//         return (
//             <div>
//                 <h4>Bitcoin Price Index</h4>
//                 {this._renderCurrencies()}
//             </div>
//         )
//     }
// }
