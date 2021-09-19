let mix = require('laravel-mix');

mix.js('src/app.js', 'public/js/app.js').vue()
    .sass('src/assets/sass/main.scss', 'public/css/app.css').options({
    processCssUrls: false
});