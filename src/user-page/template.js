import yo from 'yo-yo'
import layout from '../layout'

export default function userPageTemplate(user) {
  let el = yo`<div class="v9tJq VfzDr">
  <header class="vtbgv ">
    <div class="XjzKX">
      <div class="_4dMfM">
        <div class="M-jxE">
          <button class="IalUJ " title="Cambiar foto del perfil">
            <img alt="Cambiar foto del perfil" class="be6sR" src="${user.avatar}">
          </button>
        </div>
      </div>
    </div>
    <section class="zwlfE">
      <div class="nZSzR">
        <h1 class="_7UhW9 fKFbl yUEEX  KV-D4 fDxYl">${user.name}</h1>
      </div>
      <ul class="k9GMp respoc">
        <li class="Y8-fY ">
          <span class="-nal3 "> <span class="g47SY ">000</span> publicaciones</span>
        </li>
        <li class="Y8-fY ">
          <a class="-nal3 " href="#"><span class="g47SY " >000</span> seguidores</a>
        </li>
        <li class="Y8-fY ">
          <a class="-nal3 " href="#"><span class="g47SY ">000</span> seguidos</a>
        </li>
      </ul>
      <div class="-vDIg respoc">
        <h1 class="rhpdm">${user.username}</h1>
        <br>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
    </section>
  </header>
  <div class="-vDIg respo">
    <h1 class="rhpdm">${user.username}</h1>
    <br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>
  <ul class=" _3dEHb respo">
    <li class=" LH36I">
      <span class=" _81NM2"><span class="g47SY lOXF2">000</span> publicaciones</span>
    </li>
    <li class=" LH36I"><a class=" _81NM2" href="#"><span class="g47SY lOXF2" title="000">000</span> seguidores</a>
    </li>
    <li class=" LH36I"><a class=" _81NM2" href="#"><span class="g47SY lOXF2">000</span> seguidos</a>
    </li>
  </ul>
  <div class=" _2z6nI">
    <article class="FyNDV">
      <div>

        <div style="flex-direction: column; padding-bottom: 2958px; padding-top: 0px;">

        <section class="post-list">
        ${user.pictures.map(function (picture) {
          return yo`<a href="" class="post">
              <figure class="post-image">
                <img src="${picture.src}" alt="">
              </figure>
              <span class="post-overlay">
                <p>
                  <span class="post-likes">${picture.likes || 0}</span>
                  <span class="_1p1TY coreSpriteHeartSmall"></span>
                </p>
              </span>
            </a>`
          })}

        </section>

        </div>

      </div>
    </article>
  </div>
</div>`;

window.scrollTo(0,0)
return layout(el)
}

