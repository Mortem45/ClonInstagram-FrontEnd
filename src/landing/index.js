const yo = require('yo-yo');

module.exports = function landing(box) {
    return yo` 
    <main class="contenedor-main ">
        <article class="contenedor">
            <div class="contenedor-imagen ">
                <div class="div-imagen">
                    <img class="imagen " src="screen1.jpg" alt="">
                </div>
            </div>
            ${box}
        </article>
    </main>`
}