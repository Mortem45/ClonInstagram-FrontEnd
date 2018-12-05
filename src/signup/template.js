const yo = require('yo-yo'),
     landing = require('../landing'),
     translate = require('../translate');

let signupForm = yo`<div class="contenedor-forms ">
<div class="signup-box ">
    <h1 class=" titulo  coreSpriteLoggedOutWordmark">Instagram</h1>
    <div class="cont_form-signup">
            <h2 class="slogan ">${translate.message('signup.subheading')}</h2>
            <a href="/auth/facebook" rel="external">
                <span class=" span-btn">
                    <button class="botones  color-btns  KUBKM  cursor ">
                        <span class="coreSpriteFacebookIconInverted det-btn"></span>${translate.message('signup.facebook')}
                    </button>
                </span>
            </a>
                <div class="divform ">
                    <div class="linea"></div>
                    <div class="letdiv">${translate.message('or')}</div>
                    <div class="linea"></div>
                </div>
        <form class="form-signup" method="post" action="/signup">
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                        <input class=" input-signup" id="email-tel" aria-label="${translate.message('email')}"
                            aria-required="true" autocapitalize="off" autocorrect="off"
                            autocomplete="tel" name="email" type="text" placeholder="${translate.message('email')}">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                        <input class=" input-signup " id="name" aria-label="${translate.message('fullname')}"
                            aria-required="false" autocapitalize="sentences" autocorrect="off" name="name"
                            type="text" placeholder="${translate.message('fullname')}">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                            <input class=" input-signup" id="username"
                            aria-label="${translate.message('username')}" aria-required="true" autocapitalize="off"
                            autocorrect="off" maxlength="30" name="username" type="text" placeholder="${translate.message('username')}">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>
            <div class="cont-input">
                <div class="cont2-input   ">
                    <div class="cont3-input ">
                        <input
                            class=" input-signup    " id="password" aria-label="${translate.message('password')}"
                            aria-required="true" autocapitalize="off" autocorrect="off"
                            autocomplete="new-password" name="password" type="password" value="" placeholder="${translate.message('password')}">
                        </div>
                    <div class="div-soport"></div>
                </div>
            </div>

            <div>
                <span class=" span-btn">
                    <button class="botones  color-btns KUBKM cursor " type="submit" >${translate.message('signup.call-to-action')}</button>
                </span>
            </div>
            <p class="ter_y_cond">
            Al registrarte, aceptas nuestras <a target="_blank" href="">Condiciones</a>,
                la <a target="_blank" href="">Política de datos</a> y la
                <a target="_blank" href="">Política de cookies</a>.</p>
        </form>
    </div>
</div>
<div class="login-box">
    <p class="texto-login">${translate.message('signup.have-account')}
        <a href="/signin">${translate.message('signin')}</a>
    </p>
</div>
<div class="">
    <p class="texto-descarga">${translate.message('download')}</p>
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