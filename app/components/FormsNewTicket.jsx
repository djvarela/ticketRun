// import { PrismaClient } from "@prisma/client";
// import { Form } from "@remix-run/react";



export const FormsNewTicket = () => {
  return (
    <form method="POST" action="./">
      <div className="forms-elements">
        <span>
          <label htmlFor="titulo">Titulo: </label>
          <input type="text" name="titulo"  defaultValue='testtest' />
        </span>
      </div>
      <div className="forms-elements">
        <span>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" defaultValue='testtes@asdfñc.omc' required />
        </span>
        <span>
          <label htmlFor="">Apellido:</label>
          <input type="text" name="apellido" defaultValue='testtest' required />
        </span>
      </div>
      <div className="forms-elements">
        <span>
          <label htmlFor="">Email:</label>
          <input type="email" name="email" defaultValue='testtest@asf.com' required />
        </span>
      </div>
        <span>NIVEL DE URGENCIA</span>
      <div className="forms-elements">
      
        <span>
          <input type="radio" name="urgencia" id="alta"  defaultValue={'ALTA'}/>
          <label htmlFor="alta">ALTA</label>
        </span>
        <span>
          <input type="radio" id='baja' name="urgencia"  defaultValue={'BAJA'}/>
          <label htmlFor="baja">BAJA</label>
        </span>
        <span>
          <input type="radio" name="urgencia" id="critica"  defaultValue={'CRITICA'}/>
          <label htmlFor="critica">CRITICA</label>
        </span>

      </div>
      <div className="forms-elements">
        <span>
          <label htmlFor="">Descripcion:</label>
          <textarea name="contenido" id="" rows={6}></textarea>
        </span>
      </div>
      <button>Enviar</button>
    </form>
  );
};
