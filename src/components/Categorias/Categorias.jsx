import './Categorias.css';
import comida from '../../assets/img/diet.png';
import casa from '../../assets/img/casa.png';
import deuda from '../../assets/img/deuda.png';
import dog from '../../assets/img/dog.png';
import factura from '../../assets/img/factura.png';
import gimnasio from '../../assets/img/gimnasio.png';
import popcorn from '../../assets/img/popcorn.png';
import yoga from '../../assets/img/yoga.png';
import gift from '../../assets/img/gift.png';
import ropa from '../../assets/img/ropa.png';
import salud from '../../assets/img/salud.png';
import tarjeta from '../../assets/img/tarjeta.png';
import bus from '../../assets/img/bus.png';
import restaurant from '../../assets/img/restaurant.png';
import CategoriasItems from '../CategoriasItems/CategoriasItems';

function Categorias() {

  let categorias = [
    { tipo: 'Comida', texto: "Alimentación básica del individuo o grupo familiar.", ejemplo: 'Ej: Compra en tienda, almacén y/o supermercado.', img: comida },
    { tipo: 'Deportes', texto: "Elementos deportivos o cuotas de instituciones deportivas.", ejemplo: 'Ej: Compra de bicicleta fija ; Cuota 2 de 12 del club.', img: yoga },
    { tipo: 'Deudas', texto: "Pago a terceros de deudas pendientes.", ejemplo: 'Ej: Pago a mafiosos, familiares, otros.', img: deuda },
    { tipo: 'Entretenimiento', texto: "Salidas de distraccion u ocio.", ejemplo: 'Ej: Salida al cine, teatro, conciertos, otros.', img: popcorn },
    { tipo: 'Facturas', texto: "Servicios contratados por el individuo o grupo familiar.", ejemplo: 'Ej: Netflix, Luz, Internet, Gas.', img: factura },
    { tipo: 'Gimnasio', texto: "Pago de cuota del gimnasio.", ejemplo: 'Ej: Cuota gimnasio X.', img: gimnasio },
    { tipo: 'Hogar', texto: "Mejoras o reparaciones para el hogar.", ejemplo: 'Ej: Pinturas para el cuarto ; Reparación de línea telefónica.', img: casa },
    { tipo: 'Mascotas', texto: "Gastos / inversiones realizadas en las mascotas del hogar.", ejemplo: 'Ej: Aplicación de vacuna X ; Alimento balanceado', img: dog },
    { tipo: 'Regalos', texto: "Obsequios a terceros o propios.", ejemplo: 'Ej: Perfume 212 ; Regalo de navidad a padres.', img: gift },
    { tipo: 'Restaurantes', texto: "Gastos de alimentación en restaurantes.", ejemplo: 'Ej: Almuerzo en Fogón Asado Experience.', img: restaurant },
    { tipo: 'Ropa', texto: "Gastos / inversiones en indumentaria y calzado.", ejemplo: 'Ej: Zapatilla para running ; Camisa de vestir para el trabajo.', img: ropa },
    { tipo: 'Salud', texto: "Gastos / inversiones en la cobertura de salud o medicamentos.", ejemplo: 'Ej: Cuota 8 de 12 prepaga A123 ; Paracetamol 60u.', img: salud },
    { tipo: 'Tarjeta de crédito', texto: "Egresos de las tarjetas de crédito.", ejemplo: 'Ej: Cuota 8 de 12 prepaga A123 ; Paracetamol 60u.', img: tarjeta },
    { tipo: 'Transporte', texto: "Gastos relacionados con movilidad.", ejemplo: 'Ej: Carga de nafta ; Recarga tarjeta Sube.', img: bus }
  ]

  return (
    <>
      <h2 className='categorias__title'>Categorías</h2>
      <ul className='categorias'>
        { categorias.map(categoria => <li><CategoriasItems tipo={categoria.tipo} texto={categoria.texto} ejemplo={categoria.ejemplo} img={categoria.img} /></li>) }
      </ul>
    </>
  )
}

export default Categorias;