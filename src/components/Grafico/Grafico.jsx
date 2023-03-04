import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context/ModalContext';
import Loader from '../Loader/Loader';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import './Grafico.css';
import useTitle from '../../customHooks/useTitle';

function Grafico() {
    const { movimientos, getMovements, setLoading, loading } = useContext(ModalContext);
    useTitle('Gráfico')

    let test = [];
    useEffect(() => {
        setLoading(true);
        getMovements()
    }, [])

    movimientos.forEach(amount => {
        if (amount.type == 'Egreso') {
            if (test.some(element => element.type == amount.categoria)) {
                test.forEach(element => {
                    if (element.type == amount.categoria) {
                        element.price += parseFloat(amount.amount);
                    }
                })
            } else {
                test.push({ id: amount.id, type: amount.categoria, price: parseFloat(amount.amount) })
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
        <main className='main__grafico'>
            <h2>Gráfico</h2>
            {
                loading
                    ? <Loader />
                    :
                    <>
                        {
                            amountsEgresos.length
                                ? <Pie
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
                                    style={{
                                        maxWidth: '40rem',
                                        maxHeight: '40rem',
                                    }}
                                />
                                : <p>Aún no tienes egresos...</p>
                        }
                    </>
            }


        </main>
    )
}

export default Grafico;