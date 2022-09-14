import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import './Grafico.css';

function Grafico() {
    const { amounts } = useContext(ModalContext);
    console.log(amounts);

    let test = [];
    amounts.forEach(amount => {
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
        <>
            <Pie
                data={{
                    labels: amountsCategorias,
                    datasets: [{
                        label: '# of votes',
                        data: amountsEgresos,
                        backgroundColor: [
                            '#333',
                            '#f00',
                            '#00f'
                        ],
                        borderColor: [
                            '#444',
                            '#f11',
                            '#11f'
                        ]
                    }]
                }}
                height={10000}
                width={10000}
            />
        </>
    )
}

export default Grafico;