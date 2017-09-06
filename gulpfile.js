const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const settings = {
    sass: {
        sourceFile: './resources/sass/main.scss',
        destinationFolder: './app/assets/css',
        paths: [
            'node_modules/normalize.css'
        ]
    }
};

gulp.task('sass', function() {
    return gulp.src(settings.sass.sourceFile)
        .pipe(sass({includePaths: settings.sass.paths}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(settings.sass.destinationFolder));
});
