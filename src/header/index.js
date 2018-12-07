const yo = require('yo-yo'),
      translate = require('../translate'),
      empty = require('empty-element');

let el = yo `<nav class="navegacion">
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
                      <div class="_47KiJ">
                          <div class="XrOey">
                              <a class="Szr5J kIKUG coreSpriteDesktopNavExplore" href="explore/">Buscar personas</a>
                          </div>
                          <div class="XrOey mov">
                              <a href="" class="_0ZPOP kIKUG coreSpriteDesktopNavActivity"><span class="Szr5J">Feed de actividades</span></a>
                          </div>
                          <div class="XrOey">
                              <a class="Szr5J kIKUG coreSpriteDesktopNavProfile" href="">Perfil</a>
                          </div>

                          <div class="publicar _0aCwM XrOey" onclick="${showShare}">
                              <div class="pbgfb Di7vw btn-public">
                                  <div class="eyXLr wUAXj ">
                                      <span class="_6RZXI "></span>
                                      <span class="TqC_a">${translate.message('share')}</span>
                                  </div>
                              </div>
                          </div>

                          <div class="XrOey pubmov" onclick="${showShare}">
                              <span class="Szr5J kIKUG glyphsShare" ></span>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
      </nav>`;

    function showShare() {
        document.getElementById('modaloverlay').classList.toggle('showShare');
        document.getElementById('body').classList.toggle('hidden');
        document.getElementById('formupload').reset();
    }

module.exports = function header (ctx, next) {
  let container = document.getElementById('header-container');
  empty(container).appendChild(el);
  next()
}