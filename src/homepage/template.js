const yo = require('yo-yo'),
    layout = require('../layout'),
    post = require('../post-card');


    module.exports  = function (posts){
    let template = yo` <section class="_1SP8R j9XKR ">
        <div class="cGcGK">
            <div>
                <div id="post-container" class=" post-container ">
                    ${posts.map(function (pos){
                        return post(pos);
                    })}
                </div>
            </div>
            <div class="Id0Rh">
                <div class="W1Bne   ztp9m "></div>
            </div>
        </div>
        <div class="XmSS_"></div>
        </section>`;
        return layout(template);
}

