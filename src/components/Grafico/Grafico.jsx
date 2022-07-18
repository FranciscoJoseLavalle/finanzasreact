import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import './Grafico.css';

function Grafico() {
    const { amounts } = useContext(ModalContext);
    console.log(amounts);

    let amountsEgresos = amounts.filter(amount => amount.type == 'Egreso').map(amount => parseFloat(amount.amount));

    let amountsCategorias = amounts.filter(amount => amount.type == 'Egreso').map(amount => amount.categoria);

    console.log(amountsEgresos);
    console.log(amountsCategorias);

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