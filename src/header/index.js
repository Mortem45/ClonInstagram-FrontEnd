const yo = require('yo-yo'),
      translate = require('../translate'),
      empty = require('empty-element');


let authCard = function (ctx) {

  let authenticated = yo`<div class="_47KiJ">
      <div class="XrOey mov">
        <a class="Szr5J kIKUG coreSpriteDesktopNavProfile" href="">Perfil</a>
      </div>
      <div class="XrOey ">
        <span style="padding-top: 4px"><strong>${ctx.auth.name}</strong></span>
      </div>
      <div class="publicar _0aCwM XrOey" onclick="showShare">
        <div class="pbgfb Di7vw btn-public">
          <div class="eyXLr wUAXj ">
            <span class="_6RZXI "></span>
            <span class="TqC_a">share</span>
          </div>
        </div>
      </div>
      <div class="XrOey pubmov" onclick="showShare">
        <span class="Szr5J kIKUG glyphsShare"></span>
      </div>
    </div>`

  let signin = yo`<div class="ZcHy5">
      <div class="Igw0E IwRSH eGOV_ _4EzTm qD5Mv pos">
        <section class="bR_3v Fzijm ">
          <div class="w03Xk">
            <button class="Ls00D coreSpriteDismissLarge Jx1OT">
              <span class="Szr5J">Cerrar</span>
            </button>
            <div class="pHxcJ">
              <div class="gAoda coreSpriteLoggedOutGenericUpsell"></div>
              <span class="_0DvBq">
                <div class="gAo1g">Iniciar sesión en ClonInstagram</div>
                <div class="nwq6V">Inicia sesión para ver las fotos y los
                  videos de tus amigos y descubrir otras cuentas que te
                  encantarán.</div>
              </span>
              <span class="DZiHE">
                <a href="/signin">
                  <span class="aPBwk  _1OSdk">
                    <button class="_5f5mN jIbKX KUBKM yZn4P">Iniciar sesión</button>
                  </span>
                </a>
                <a href="/signup">
                  <span class=" G2rOZ _1OSdk">
                    <button class="_5f5mN tA8g2 KUBKM yZn4P">Registrarte</button>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
      <span class="r9-Os">
        <a class="tdiEy" href="/signin">
          <button class="_0mzm- sqdOP L3NKy" type="button">Iniciar sesión</button>
        </a>
        <a class="tdiEy" href="/signup">Registrarte</a>
      </span>
    </div>`

  if (ctx.auth) {
    return authenticated
  } else {
    return signin
  }
}

let renderHeader = function(ctx) {
  return yo`<nav class="navegacion">
      <div class="div-nav"></div>
      <div class="">
          <div class="barra-naveg ">
              <div class="MWDvN ">
                  <div class="oJZym">
                      <div class="aU2HW">
                          <a class="Szr5J coreSpriteDesktopNavLogoAndWordmark _7mese" href="">Instagram</a>
                          <a class=" Szr5J efNlB coreSpriteGlyphBlack" href="">Instagram</a>
                      </div>
                  </div>
                  <div class="LWmhU _0aCwM">
                      <div class="pbgfb Di7vw " role="button" tabindex="0">
                          <div class="eyXLr wUAXcj ">
                              <span class="_6RZXI coreSpriteSearchIcon"></span>
                              <span class="TqC_a">${translate.message('search')}</span>
                          </div>
                      </div>
                  </div>
                  <div class="ctQZg">
                    ${authCard(ctx)}
                  </div>
              </div>
          </div>
      </div>
      </nav>`;
    }

    function showShare() {
        document.getElementById('modaloverlay').classList.toggle('showShare');
        document.getElementById('body').classList.toggle('hidden');
        document.getElementById('formupload').reset();
    }

module.exports = function header (ctx, next) {
  let container = document.getElementById('header-container');
  empty(container).appendChild(renderHeader(ctx));
  next()
}