/**
 * Created by hp on 2018/2/2.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');        // 获取 uglify 模块（用于压缩 js）
var cleanCSS = require('gulp-clean-css'); // 获取 minify-css 模块（用于压缩 CSS）
var sass = require('gulp-ruby-sass');
//var htmlminify = require("gulp-html-minify");

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('src/main/webapp/script/**/*.js ')   //src/js/**/*.js
    // 2. 压缩文件
        .pipe(uglify())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('src/main/webapp/dist/js'))
})

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css',function () {
    gulp.src('src/main/webapp/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/main/webapp/dist/css'));
});


// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('src/main/webapp/css/*.css', ['css'])
});


// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function () {
    return sass('src/main/webapp/css/main.css')
        .on('error', sass.logError)
        .pipe(gulp.dest('src/main/webapp/css/'));
});





//压缩html
/*gulp.task('build-html' , function(){
    return gulp.src("vue/website/activity/spike/spike.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("vue/website/minify/spike.html"))
});*/
// 在命令行使用 gulp auto 启动此任务
/*gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('vue/src/css/hm.scss', ['sass'])
});*/