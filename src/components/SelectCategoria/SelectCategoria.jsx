import './SelectCategoria.css';

function SelectCategoria({setCategoria}) {
    let categorias = [
        { tipo: 'Comida' },
        { tipo: 'Deportes' },
        { tipo: 'Deudas' },
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
        <div className='main__form-inputCont'>  
            <label htmlFor="categoria">Seleccione la categoría</label>
            <select className="selectCategoria" id='categoria' onChange={(e) => setCategoria(e.target.value)} >
                {categorias.map(categoria => <option key={categoria.tipo}>{categoria.tipo}</option>)}
            </select>
        </div>
    )
}

export default SelectCategoria;