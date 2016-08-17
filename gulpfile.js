var gulp = require('gulp'),
scss = require('gulp-scss'),
 browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('scss', function(){ // Создаем таск "scss"
    return gulp.src('app/scss/**/*.scss') // Берем источник
        .pipe(scss()) // Преобразуем Scss в CSS посредством gulp-scss
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице 
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['scss']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});


gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'scss'], function() {
    gulp.watch('app/scss/**/*.scss', ['scss']); // Наблюдение за scss файлами
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS 
});