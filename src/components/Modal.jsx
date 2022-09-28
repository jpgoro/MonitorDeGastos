import CerrarBtn from "../img/cerrar.svg";
const Modal = ({setModal, animarModal,setAnimarModal}) => {
    const ocultarModal = ()=>{
        //oculta el modal con con un tiempo de espera
        
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
        }, 300);
    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
