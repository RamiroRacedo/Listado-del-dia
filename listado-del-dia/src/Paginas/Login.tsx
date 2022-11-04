import { Link } from "react-router-dom"

function Login() {
    return (
        <section>
        <input type="text" name="nombres" id="nombres" placeholder="Ingrese un Nombre" />
        <input type="text" name="apellidos" id="apellidos" placeholder="Ingrese un Apellido"/>
        <input type="text" name="contraseña" id="contraseñas" placeholder="Ingrese una contraseña"/>
        <input type="text" name="correo" id="correo" placeholder="Ingrese un Correo"/>
        <Link to="/Registro">
        <button>Registrar</button></Link>
        <Link to="/Login">
        <button >Iniciar Sesion</button>
        </Link>
    </section>

    )
    
}
export default Login