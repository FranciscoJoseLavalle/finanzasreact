import React from 'react'

const CategoriasSelect = ({ textDefault }) => {
    let categorias = [
        { tipo: 'Comida' },
        { tipo: 'Deportes' },
        { tipo: 'Deudas' },
        { tipo: 'Educación' },
        { tipo: 'Entretenimiento' },
        { tipo: 'Facturas' },
        { tipo: 'Gimnasio' },
        { tipo: 'Hogar' },
        { tipo: 'Mascotas' },
        { tipo: 'Regalos' },
        { tipo: 'Restaurantes' },
        { tipo: 'Ropa' },
        { tipo: 'Salud' },
        { tipo: 'Tarjeta de crédito' },
        { tipo: 'Transporte' }
    ]
    return (
        <>
            <option value='nada'>{textDefault}</option>
            {categorias.sort((a, b) => {
                if (a.tipo < b.tipo) { return -1; }
                if (a.tipo > b.tipo) { return 1; }
                return 0;
            }).map(categoria => <option key={categoria.tipo}>{categoria.tipo}</option>)}
        </>
    )
}

export default CategoriasSelect