import CategoriasSelect from '../CategoriasSelect/CategoriasSelect';
import './SelectCategoria.css';

function SelectCategoria({ setCategoria }) {

    return (
        <div className='main__form-inputCont'>
            <label htmlFor="categoria">Seleccione la categoría</label>
            <select className="selectCategoria" id='categoria' onChange={(e) => setCategoria(e.target.value)} >
                <CategoriasSelect textDefault="Seleccionar"/>
            </select>
        </div>
    )
}

export default SelectCategoria;