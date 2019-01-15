const yo = require('yo-yo'),
    translate = require('../translate'),
    request = require('superagent');

module.exports = function layout(content) {
    let el = yo `<span id="react-root">
            <section class="contenedor-general">
                <main class="contenedor-main" role="main">
                        ${content}
                        <div id="modaloverlay" class="RnEpo Yx5HN oculto" role="presentation">
                        <div class="pbNvD fPMEg " role="dialog">
                            <div class="piCib">
                                    <form enctype="multipart/form-data" class="form-upload" id="formupload" onsubmit=${onSubmit}>
                                    <div class="file-upload publicar _0aCwM XrOey" onclick="${preview}">
                                        <div class="pbgfb Di7vw btn-public">
                                            <div class="eyXLr wUAXj ">
                                                <span class="_6RZXI "></span>
                                                <input name="post" id="file" type="file" class="upload" value="">
                                                <span class="TqC_a">${translate.message('upload')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="image-carga">
                                            <figure class="post-image" id="preview">
                                            </figure>
                                    </div>
                                    <div class="cont-input">
                                            <div class="cont2-input ">
                                                <div class="cont3-input ">
                                                    <input class="description input-signup" id=""
                                                     name="description" type="text" placeholder="Description">
                                                    </div>
                                                <div class="div-soport"></div>
                                            </div>
                                        </div>
                                    <div class="mt3GC">
                                        <div class="options">
                                            <div class="file-upload publicar _0aCwM XrOey">
                                                <div class="pbgfb Di7vw btn-public">
                                                    <div class="eyXLr wUAXj ">
                                                        <span class="_6RZXI "></span>
                                                        <button name="btnUpload" type="submit" class="btnUpload"></button>
                                                        <span class="TqC_a">${translate.message('share')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="file-upload publicar _0aCwM XrOey" onclick="${showShare}">
                                                <div class="pbgfb Di7vw btn-public">
                                                    <div class="eyXLr wUAXj ">
                                                        <span class="_6RZXI "></span>
                                                        <button name="btnUpload" type="button" class="btnCancel"></button>
                                                        <span class="TqC_a">${translate.message('cancel')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        <div>
        <div id="infPerfil" class="RnEpo Yx5HN oculto" role="presentation">
            <button aria-hidden="true" class="yvwbg" tabindex="-1"></button>
            <div class="pbNvD fPMEg " role="dialog">
            <div class="piCib">
                <div class="mt3GC">
                <a href="/logout" rel="external">
                <button class="aOOlW   HoLwm " tabindex="0">Salir</button>
                </a>
                <a href="#">
                <button class="aOOlW   HoLwm "tabindex="0">Cancelar</button>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
        </span>`;



    function showShare() {
        document.getElementById('modaloverlay').classList.toggle('showShare');
        document.getElementById('body').classList.toggle('hidden');
        document.getElementById('formupload').reset();
        preview()
    }

    function onSubmit(ev) {
        ev.preventDefault();
        let data = new FormData(this);
        request
            .post('/api/posts')
            .send(data)
            .end(function (err, res) {
                console.log(err, res);
                console.log(err);
                console.log(res);
            })
        showShare();
    }

    function preview() {
        document.getElementById("file").onchange = function(e) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function(){
              let preview = document.getElementById('preview'),
                      image = document.createElement('img');
              image.src = reader.result;
              preview.innerHTML = '';
              preview.append(image);
            };
          }
    }

    return el;
}