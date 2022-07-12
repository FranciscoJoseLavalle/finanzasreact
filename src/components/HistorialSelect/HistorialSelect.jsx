function HistorialSelect({ filterAmounts }) {
    return (
        <select className="main__historial-select" onChange={filterAmounts}>
            <option value="nada">Ver por todos</option>
            <option value="Ingreso">Ingresos</option>
            <option value="Egreso">Egresos</option>
        </select>
    )
}

export default HistorialSelect;