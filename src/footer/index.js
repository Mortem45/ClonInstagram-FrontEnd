import yo from 'yo-yo'
import translate from '../translate'

let el = yo`<footer class="_8Rna9  _3Laht " role="contentinfo">
    <div class="iseBh  VWk7Y " style="max-width: 935px;">
      <nav class="uxKLF">
        <ul class="ixdEe">
          <li class="K5OFK"><a class="l93RR" href="#">Información</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">Ayuda</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">Prensa</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">API</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">Empleo</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">Privacidad</a></li>
          <li class="K5OFK"><a class="l93RR _vfM2" href="#">Condiciones</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">Directorio</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">Perfiles</a></li>
          <li class="K5OFK"><a class="l93RR" href="#">Hashtags</a></li>
          <li class="K5OFK"><span class="_3G4x7 l93RR">Idioma
          <select id="idioma" class="hztqj" onchange="lang()">
                <option value="en-US">${translate.message('english')}</option>
                <option value="es">${translate.message('spanish')}</option>
              </select></span></li>
        </ul>
      </nav><span class="DINPA">© 2018 Instagram</span>
    </div>
    </footer>`;



    function lang() {
      let locale = document.getElementById("idioma")
      loc = locale.value;
      localStorage.locale = loc;
      location.reload();
      console.log('idioma');

    }

    document.body.appendChild(el);