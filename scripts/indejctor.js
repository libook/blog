const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

// For donation qrcode.
hexo.extend.injector.register('body_end', () => {
    return js('/js/qrcode.js');
});
hexo.extend.injector.register('body_end', () => {
    return js('/js/hexo-theme-icarus-donate-hack.js');
});

// My style
hexo.extend.injector.register('head_end', () => {
    return css('/css/my.css');
});
