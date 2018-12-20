const yo = require('yo-yo'),
    translate = require('../translate'),
    empty = require('empty-element');


let authCard = function (ctx) {

    let authenticated = yo `<div class="_47KiJ">
      <div class="XrOey mov" onclick=${showInfPerfil}>
        <a class="Szr5J kIKUG coreSpriteDesktopNavProfile" href="">Perfil</a>
      </div>
      <div class="XrOey cursor" onclick=${showInfPerfil}>
        <span style="padding-top: 4px"><strong>${ctx.auth.name}</strong></span>
      </div>
      <div class="publicar _0aCwM XrOey" onclick=${showShare}>
        <div class="pbgfb Di7vw btn-public">
          <div class="eyXLr wUAXj ">
            <span class="_6RZXI "></span>
            <span class="TqC_a">share</span>
          </div>
        </div>
      </div>
      <div class="XrOey pubmov" onclick=${showShare}>
        <span class="Szr5J kIKUG glyphsShare"></span>
      </div>
    </div>`

    let signin = yo `<div class="ZcHy5">
      <div class="Igw0E IwRSH eGOV_ _4EzTm qD5Mv pos">
        <section class="bR_3v Fzijm " id="popup2">
          <div class="w03Xk">
            <button class="Ls00D coreSpriteDismissLarge Jx1OT" onclick=${showShare2} >
              <span class="Szr5J " >Cerrar</span>
            </button>
            <div class="pHxcJ">
              <div class="gAoda coreSpriteLoggedOutGenericUpsell"></div>
              <span class="_0DvBq">
                <div class="gAo1g">${translate.message('alert.title')}</div>
                <div class="nwq6V">${translate.message('alert.text')}</div>
              </span>
              <span class="DZiHE">
                  <span class="aPBwk  _1OSdk">
                    <button class="_5f5mN jIbKX KUBKM yZn4P" onclick=${showShare2}>${translate.message('get-it')}</button>
                  </span>
              </span>
            </div>
          </div>
        </section>
      </div>
      <span class="r9-Os">
        <a class="tdiEy" href="/signin">
          <button class="_0mzm- sqdOP L3NKy" type="button">${translate.message('signin')}</button>
        </a>
        <a class="tdiEy" href="/signup">${translate.message('signup.call-to-action')}</a>
      </span>
    </div>`

    if (ctx.auth) {
        return authenticated
    } else {
        return signin
    }


}

let renderHeader = function (ctx) {
    return yo `<nav class="navegacion">
      <div class="div-nav"></div>
      <div class="">
          <div class="barra-naveg ">
              <div class="MWDvN ">
                  <div class="oJZym">
                      <div class="aU2HW">
                          <a class="Szr5J coreSpriteDesktopNavLogoAndWordmark _7mese" href="/">Instagram</a>
                          <a class=" Szr5J efNlB coreSpriteGlyphBlack" href="/">Instagram</a>
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

function showShare2() {
    document.getElementById('popup2').classList.add('oculto');
}

function showInfPerfil() {
    document.getElementById('infPerfil').classList.toggle('oculto');
}


module.exports = function header(ctx, next) {
    let container = document.getElementById('header-container');
    empty(container).appendChild(renderHeader(ctx));
    next()
}