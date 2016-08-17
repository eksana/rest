var gulp = require('gulp'),
scss = require('gulp-scss');

gulp.task('scss', function(){ // Создаем таск "scss"
    return gulp.src('app/scss/main.scss') // Берем источник
        .pipe(scss()) // Преобразуем Scss в CSS посредством gulp-scss
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});
gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});