import './Loader.css';

function Loader() {
    return (
        <div className='cargando'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;