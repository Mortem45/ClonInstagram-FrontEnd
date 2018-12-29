const yo = require('yo-yo'),
    translate =require('../translate'),
    $   = require('jquery');

module.exports = function postCard(post) {
    let el;
    let auth = false;

    function render(post) {
        return yo `<article id=${post.publicId} class="_8Rm4L M9sTE  L_LMM SgTZ1   ">
        <header class="Ppjfr UE9AK ">
            <div class="RR-M-  mrq0Z" role="button" tabindex="0">
                <canvas class="CfWVH" style="position: absolute; top: -5px; left: -5px; width: 40px; height: 40px;" width="36"
                    height="36"></canvas>
                <a class="_2dbep qNELH kIKUG" style="width: 30px; height: 30px;" href="/${post.user.username}">
                    <img class="_6q-tv" src="${post.user.avatar}"
                        alt="Foto del perfil"></a>
            </div>

            <div class="o-MQd  ">
                <div class=" ">
                    <div class="e1e1d"><a class="FPmhX notranslate nJAzx" title="${post.user.name}" href="/${post.user.username}">${post.user.name}</a></div>
                </div>
                <div class="M30cS"></div>
            </div>
        </header>

        <div class="_97aPb ">
            <div role="button" tabindex="0">
                <div class="eLAPa kPFhm">
                    <div style="padding-bottom:  84.1333%;" class="KL4Bh">
                        <img class="FFVAD" decoding="auto" sizes="613.7666625976562px" src="${post.src}"></div>
                    <div class="_9AhH0"></div>
                </div>
            </div>
        </div>

        <div class="eo2As ">

            <!-- botones -->
            <section class="ltpMr Slqrh">
                <input id=${post.publicId}54 class="ocult" value=${post.publicId} name="id">
                    <span class="fr66n" onclick=${post.liked ? like.bind(null, false) : like.bind(null, true)}>
                        <button class="coreSpriteHeartOpen oF4XW dCJp8"  onclick=${name}>
                            <span class="${post.liked ? 'glyphsSpriteHeart__filled__24__red_5' : 'glyphsSpriteHeart__outline__24__grey_9' } u-__7" aria-label="Me gusta"></span>
                        </button>
                    </span>
            <span class="_15y0l ocult">
                <button class="oF4XW dCJp8">
                    <span class="glyphsSpriteComment__outline__24__grey_9 u-__7" aria-label="Comentar"></span>
                </button>
            </span>
            <span class="_5e4p ocult">
                    <button class="oF4XW dCJp8">
                        <span class="glyphsSpriteShare__outline__24__grey_9 u-__7" aria-label=""></span>
                    </button>
                </span>
                <span class="wmtNn ocult">
                    <button class="oF4XW dCJp8">
                        <span class="glyphsSpriteSave__outline__24__grey_9 u-__7" aria-label="Guardar"></span>
                    </button>
                </span>
            </section>
            <!-- me gustas -->
            <section class="EDfFK ygqzn">
                <div class="HbPOm y9v3U">
                    <a class="zV_Nj" ><span>${translate.message('likes' , {likes: post.likes || 0})}</span></a>
                </div>
            </section>
            <section class="EDfFK ygqzn">
                <div class="HbPOm y9v3U">
                    ${post.description}
                </div>
            </section>
            <div class="k_Q0X NnvRN">
                <a class="c-Yi7" href="/p/BoKkK8tnSCB/">
                    <time class="_1o9PC Nzb55" datetime="" title="">${translate.date.format(new Date(post.createdAt).getTime())}</time>
                </a>
            </div>

            <!-- agrega un comentario -->
            <section class="sH9wk  _JgwE ocult">
                <div class="RxpZH">

                        <textarea aria-label="Agrega un comentario..." placeholder="${translate.message('comment')}" class="Ypffh"
                            autocomplete="off" autocorrect="off"></textarea>

                </div>
            </section>
        </div>
        <div class="MEAGs">
            <button class="oF4XW dCJp8" >
                <span class="glyphsSpriteMore_horizontal__outline__24__grey_9 u-__7" aria-label="Más opciones">
                </span>
            </button>
        </div>
        </article>`;
    }

    function like(liked) {
    fetch('/whoami2')
      .then(data =>   data.json())
      .then(data =>  {
          if (data.auth) {
            post.liked = liked;
            post.likes += liked ? 1 : -1;
            let newEl = render(post);
            yo.update(el, newEl);
            return false;
          }
    })
}

  function name() {
      fetch('/whoami2')
      .then(data =>   data.json())
      .then(data =>  {
          if (data.auth) {
              auth = true
            $.ajax({
                url: `/api/post/${post.publicId}/like`,
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify( { "id": `${post.publicId}` }),
                aprocessData: false,
                statusCode:{
                    404: (xhr) => {
                        if (window.console) console.log(xhr.responseText)
                    },
                    200: (xhr) => {
                        if (window.console) {
                            console.log(xhr.responseText)
                        }
                    }
                },
                success: (data) => console.log(" like :) ")
              });
          } else {
              auth = false
              console.log("no estas autenticado, no se hace like");
          }
      })
  }
  el = render(post);
    return el;
}