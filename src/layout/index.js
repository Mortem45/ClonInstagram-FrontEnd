const yo = require('yo-yo'),
    translate =require('../translate'),
    request = require('superagent');

module.exports = function layout(content){
            let el = yo`<span id="react-root">
            <section class="contenedor-general">
                <main class="contenedor-main" role="main">
                        ${content}
                        <div class="modal-overlay" id="modaloverlay">
                            <form enctype="multipart/form-data" class="form-upload" id="formupload" onsubmit=${onSubmit}>
                                <div class="file-upload publicar _0aCwM XrOey">
                                    <div class="pbgfb Di7vw btn-public" role="button" >
                                        <div class="eyXLr wUAXj ">
                                            <span class="_6RZXI "></span>
                                            <input name="post" id="file" type="file" class="upload" value="">
                                            <span class="TqC_a">${translate.message('upload')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="options">
                                    <div class="file-upload publicar _0aCwM XrOey">
                                        <div class="pbgfb Di7vw btn-public"  >
                                            <div class="eyXLr wUAXj ">
                                                <span class="_6RZXI "></span>
                                                    <button name="btnUpload" type="submit" class="btnUpload"></button>
                                                <span class="TqC_a">${translate.message('share')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="file-upload publicar _0aCwM XrOey" onclick="${showShare}">
                                        <div class="pbgfb Di7vw btn-public"  >
                                            <div class="eyXLr wUAXj ">
                                                <span class="_6RZXI "></span>
                                                <button name="btnUpload" type="button" class="btnCancel"></button>
                                                <span class="TqC_a">${translate.message('cancel')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                </main>
            </section>
            </span>`;


            function showShare() {
                document.getElementById('modaloverlay').classList.toggle('showShare');
                document.getElementById('body').classList.toggle('hidden');
                document.getElementById('formupload').reset();
            }

            function onSubmit(ev){
                ev.preventDefault();
                let data = new FormData(this);
                request
                    .post('/api/posts')
                    .send(data)
                    .end(function (err, res) {
                        console.log(err,res);

                    })
                    showShare();
            }
            return el;
        }


