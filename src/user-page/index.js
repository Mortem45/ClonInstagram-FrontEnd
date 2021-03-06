import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'
import request from 'superagent'
import header from '../header';
import utils from '../utils'

page('/:username', utils.loadAuth, loadUser, header, function(ctx ,next){
    let main = document.getElementById('main-container');
    title(`ClonInstagram - ${ctx.params.username}`)
    empty(main).appendChild(template(ctx.user));
})

function loadUser(ctx, next) {
    request
        .get(`/api/user/${ctx.params.username}`)
        .end(function (err, res) {
            if (err) return console.log(err);
            ctx.user = res.body;
            next();
        })
}