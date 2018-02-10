const gulp = require('gulp');
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();


//TASKS
gulp.task('sass', function () {
    return gulp.src(['src/scss/*.scss', 'node_modules/bootstrap/scss/bootstrap.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

//JAVASCRIPT TASK

gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
}); //end task

// Move Fonts Folder to src/fonts
gulp.task('fonts', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest("src/fonts"));
});

// Move Font Awesome CSS to src/css
gulp.task('fa', function () {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest("src/css"));
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});





gulp.task('default', ['js', 'serve', 'fa', 'fonts']);