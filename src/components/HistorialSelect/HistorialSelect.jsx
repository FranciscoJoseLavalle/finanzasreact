import CategoriasSelect from "../CategoriasSelect/CategoriasSelect";

function HistorialSelect({ filterAmounts, type }) {
    return (
        <select className="main__historial-select" onChange={filterAmounts}>
            {type === 'type' ?
                <>
                    <option value="nada">Ver por todos</option>
                    <option value="Ingreso">Ingresos</option>
                    <option value="Egreso">Egresos</option>
                </>
                : <CategoriasSelect textDefault="Filtrar por categoría" />
            }
        </select>
    )
}

export default HistorialSelect;