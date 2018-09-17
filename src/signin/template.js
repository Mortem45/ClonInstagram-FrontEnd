const yo = require('yo-yo');
let landing = require('../landing');

let signinForm = yo`<div class="contenedor-forms ">
<div class="signup-box ">
    <h1 class=" titulo  coreSpriteLoggedOutWordmark">Instagram</h1>
    <div class="cont_form-signup">
        <form class="form-signup" method="post">
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                        <input class=" input-signup" id="email-tel" aria-label="Telefono, usuatio o correo electronico"
                            aria-required="true" autocapitalize="off" autocorrect="off"
                            autocomplete="tel" name="emailOrPhone" type="text" placeholder="Telefono, usuatio o correo electronico">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                        <input
                            class=" input-signup    " id="password" aria-label="Contraseña"
                            aria-required="true" autocapitalize="off" autocorrect="off"
                            autocomplete="new-password" name="password" type="password" value="" placeholder="Contraseña">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>
            
            <div>
                <span class=" span-btn">
                    <button class="botones  color-btns KUBKM cursor ">Iniciar sesion</button>
                </span>
            </div>
            <p class="ter_y_cond">Al registrarte, aceptas nuestras <a target="_blank" href="">Condiciones</a>,
                la <a target="_blank" href="">Política de datos</a> y la
                <a target="_blank" href="">Política de cookies</a>.</p>
        </form>
    </div>
</div>
<div class="login-box">
    <p class="texto-login">¿No tienes una cuenta?
        <a href="/signup">Registrate</a>
    </p>
</div>
<div class="">
    <p class="texto-descarga">Descargar aplicación</p>
    <div class="contenedor-logos-tiendas">
        <a class="a-descargas" href="">
            <img class="logos-tienda" alt="Disponible en App Store" src="appStore.png">
        </a>
        <a class="a-descargas" href="">

            <img class="logos-tienda" alt="Disponible en Google Play" src="playStore.png">
        </a>
    </div>
</div>
</div>`

module.exports = landing(signinForm);