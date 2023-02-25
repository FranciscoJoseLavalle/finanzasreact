import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import './Grafico.css';

function Grafico() {
    const { movimientos } = useContext(ModalContext);
    console.log(movimientos);

    let test = [];
    movimientos.forEach(amount => {
        if (amount.type == 'Egreso') {
            if (test.some(element => element.type == amount.categoria)) {
                test.forEach(element => {
                    if (element.type == amount.categoria) {
                        element.price += parseFloat(amount.amount);
                    }
                })
            } else {
                test.push({id: amount.id, type: amount.categoria, price: parseFloat(amount.amount)})
            }
        }
    })

    let amountsCategorias = [];
    let amountsEgresos = [];

    for (let i = 0; i < test.length; i++) {
        amountsCategorias.push(test[i].type)
        amountsEgresos.push(test[i].price)
    }

    return (
        <main>  
            <h2>Gráfico</h2>
            <Pie
                data={{
                    labels: amountsCategorias,
                    datasets: [{
                        label: '# of votes',
                        data: amountsEgresos,
                        backgroundColor: [
                            '#333',
                            '#f00',
                            '#00f',
                            '#0f0',
                            '#f90',
                            '#09f',
                            '#0f9',
                            '#9f0',
                            '#49c',
                            '#f72',
                            '#3c9',
                            '#c93',
                            '#28f',
                            '#f28'
                        ],
                        borderColor: [
                            '#444'
                        ]
                    }]
                }}
                height={10000}
                width={10000}
            />
        </main>
    )
}

export default Grafico;