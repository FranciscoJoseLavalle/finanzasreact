import './CiclosItem.css';

function CiclosItem({nombre, fecha}) {
    return (
        <div className='ciclos__item'>
            <h3>{nombre}</h3>
            <p>{fecha}</p>
        </div>
    )
}

export default CiclosItem;