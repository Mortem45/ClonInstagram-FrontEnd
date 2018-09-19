const yo = require('yo-yo');
let landing = require('../landing');

let signupForm = yo`<div class="contenedor-forms ">
<div class="signup-box ">
    <h1 class=" titulo  coreSpriteLoggedOutWordmark">Instagram</h1>
    <div class="cont_form-signup">
        <form class="form-signup" method="post">
            <h2 class="slogan ">Regístrate para ver fotos y videos de tus amigos.</h2>
            <span class=" span-btn">
                <button class="botones  color-btns  KUBKM  cursor ">
                    <span class="coreSpriteFacebookIconInverted det-btn"></span>Iniciar
                    sesión con Facebook</button>
            </span>
            <div class="divform ">
                <div class="linea"></div>
                <div class="letdiv">o</div>
                <div class="linea"></div>
            </div>
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                        <input class=" input-signup" id="email-tel" aria-label="Número de celular o correo electrónico"
                            aria-required="true" autocapitalize="off" autocorrect="off"
                            autocomplete="tel" name="emailOrPhone" type="text" placeholder="Número de celular o correo electrónico">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                        <input class=" input-signup " id="name" aria-label="Nombre completo"
                            aria-required="false" autocapitalize="sentences" autocorrect="off" name="fullName"
                            type="text" placeholder="Nombre completo">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                            <input class=" input-signup    " id="username"
                            aria-label="Nombre de usuario" aria-required="true" autocapitalize="off"
                            autocorrect="off" maxlength="30" name="username" type="text" placeholder="Nombre de usuario">
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
                    <button class="botones  color-btns KUBKM cursor ">Registrarte</button>
                </span>
            </div>
            <p class="ter_y_cond">Al registrarte, aceptas nuestras <a target="_blank" href="">Condiciones</a>,
                la <a target="_blank" href="">Política de datos</a> y la
                <a target="_blank" href="">Política de cookies</a>.</p>
        </form>
    </div>
</div>
<div class="login-box">
    <p class="texto-login">¿Tienes una cuenta?
        <a href="/signin">Inicia sesión</a>
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

module.exports = landing(signupForm);