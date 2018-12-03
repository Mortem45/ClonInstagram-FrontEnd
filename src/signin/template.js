const yo = require('yo-yo'),
     landing = require('../landing'),
    translate = require('../translate');

let signinForm = yo`<div class="contenedor-forms ">
<div class="signup-box">
    <h1 class=" titulo  coreSpriteLoggedOutWordmark">Instagram</h1>
    <div class="cont_form-signup">
        <form class="form-signup" method="post" action="/login">
            <div class="cont-input">
                <div class="cont2-input ">
                    <div class="cont3-input ">
                        <input class=" input-signup" id="email-tel" aria-label="${translate.message('signin.email')}"
                            aria-required="true" autocapitalize="off" autocorrect="off"
                            autocomplete="tel" name="username" type="text" placeholder="${translate.message('signin.email')}">
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
                    <button class="botones  color-btns KUBKM cursor " type="submit">${translate.message('signin')}</button>
                </span>
            </div>
            <p class="ter_y_cond"> <a href="">${translate.message('recover')}</a></p>
        </form>
    </div>
</div>
<div class="login-box">
    <p class="texto-login">${translate.message('signin.not-have-account')}
        <a href="/signup">${translate.message('signup')}</a>
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

module.exports = landing(signinForm);