import { Link } from "react-router-dom"

function Registro() {
    return (
        <section>
            <input type="text" name="nombres" id="nombres" placeholder="Ingrese un Nombre" />
            <input type="text" name="apellidos" id="apellidos" placeholder="Ingrese un Apellido" />
            <input type="text" name="contraseña" id="contraseñas" placeholder="Ingrese una contraseña" />
            <input type="text" name="fecha" id="fecha" placeholder="Ingrese su fecha" />
            <input type="text" name="DNI" id="DNI" placeholder="Ingrese su DNI" />
            <input type="text" name="edad" id="edad" placeholder="Ingrese su Edad" />
            <input type="text" name="direccion" id="direccion" placeholder="Ingrese una Direccion" />
            <input type="text" name="correo" id="correo" placeholder="Ingrese un Correo" />
            <input type="text" name="telefono" id="telefono" placeholder="Ingrese un Telefono" />
            <p>Estoy de acuerdo con los <a href="#">Terminos y Condiciones</a></p>
            <Link to="/Registro">
                <button>Registrar</button>
            </Link>
            <p><a href="#">¿Ya tengo Cuenta?</a></p>
            <Link to="/Login">
                <button >Iniciar Sesion</button>
            </Link>
        </section>

    )

}
export default Registro