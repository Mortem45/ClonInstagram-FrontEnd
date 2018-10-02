const yo = require('yo-yo'),
    translate =require('../translate');;

module.exports = function layout(content){
return yo`<span id="react-root">
<section class="contenedor-general">
    <main class="contenedor-main" role="main">
            ${content}
    </main>
    <nav class="navegacion">
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


                        
                            <div class="eyXLr wUAXj ">
                                <span class="_6RZXI coreSpriteSearchIcon">
                                </span><span class="TqC_a">${translate.message('search')}</span>
                            </div>

             

                        </div>
                    </div>
                    <div class="ctQZg">
                        <div class="_47KiJ">
                            <div class="XrOey"><a class="Szr5J kIKUG coreSpriteDesktopNavExplore" href="explore/">Buscar personas</a></div>
                            <div class="XrOey"><a href="" class="_0ZPOP kIKUG coreSpriteDesktopNavActivity  "><span class="Szr5J">Feed de actividades</span></a></div>
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

// <input class="XTCLo x3qfX " type="text" autocapitalize="none" placeholder="${translate.message('search')}" value="">
// <span class="mlrQa coreSpriteSearchIcon"></span>
// <div class="jLwSh" role="dialog"></div>
// <div class="aIYm8 coreSpriteSearchClear" role="button" tabindex="0"></div>