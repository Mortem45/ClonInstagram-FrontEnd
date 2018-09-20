const yo = require('yo-yo');

module.exports = function layout(content){
return yo`<span id="react-root">
<section class="contenedor-general">
    <main class="contenedor-main" role="main">
        <section class="_1SP8R j9XKR ">
            <div class="cGcGK">
                <div>
                    <div style="flex-direction: column; padding-bottom: 5600px; padding-top: 0px;">
                        ${content}
                    </div>
                </div>
                <div class="Id0Rh">
                    <div class="W1Bne   ztp9m "></div>
                </div>
            </div>
            <div class="XmSS_"></div>
        </section>
    </main>
    <nav class="navegacion">
        <div class="div-nav"></div>
        <div class="">
            <div class="barra-naveg ">
                <div class="MWDvN ">
                    <div class="oJZym">
                        <div class="aU2HW"><a class="Szr5J coreSpriteDesktopNavLogoAndWordmark _7mese"
                                href="">Instagram</a><a class=" Szr5J efNlB coreSpriteGlyphBlack" href="">Instagram</a></div>
                    </div>
                    <div class="LWmhU _0aCwM"><input class="XTCLo x3qfX " type="text" autocapitalize="none"
                            placeholder="Buscar">
                        <div class="pbgfb Di7vw " role="button" tabindex="0">
                            <div class="eyXLr "><span class="_6RZXI coreSpriteSearchIcon"></span><span
                                    class="TqC_a">Buscar</span></div>
                        </div>
                    </div>
                    <div class="ctQZg">
                        <div class="_47KiJ">
                            <div class="XrOey"><a class="Szr5J kIKUG coreSpriteDesktopNavExplore" href="explore/">Buscar
                                    personas</a></div>
                            <div class="XrOey"><a href="" class="_0ZPOP kIKUG coreSpriteDesktopNavActivity  "><span
                                        class="Szr5J">Feed de actividades</span></a></div>
                            <div class="XrOey"><a class="Szr5J kIKUG coreSpriteDesktopNavProfile" href="">Perfil</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</section>
</span>`
}