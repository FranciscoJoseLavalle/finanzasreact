import './CategoriasItems.css';

function CategoriasItems({ tipo, texto, ejemplo, img }) {
    return (
        <>
            <img src={img} alt="Imagen de categoria" className='categorias__img' />
            <div>
                <h3>{tipo}</h3>
                <p>{texto}</p>
                <small>{ejemplo}</small>
            </div>
        </>
    )
}

export default CategoriasItems;