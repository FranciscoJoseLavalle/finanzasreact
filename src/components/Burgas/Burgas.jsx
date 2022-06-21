import './Burgas.css';

function Burgas({openNav}) {

    return (
        <div className="burga" onClick={openNav}>
            <div className="burgas"></div>
            <div className="burgas"></div>
            <div className="burgas"></div>
        </div>
    )
}

export default Burgas;