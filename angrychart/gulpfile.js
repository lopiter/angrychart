var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var watch = require('gulp-watch');
var tsProject = ts.createProject('tsconfig.json');

// Configuration for your project
var rootJsPath = '../sample/src/main/resources/static';
var baseJsPath = 'base';
var appPath = '../sample/src/main/resources/static/app';
var targetAppPath = '../sample/target/classes/static/app';


config = {
        baseJsToMove: [
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js'
        ],
        baseJsToFolders: {
            'rxjs': 'node_modules/rxjs/**/**.js',
            'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api/**/**.js',
            'angular': 'node_modules/@angular/**/**.js'
        },

        rootJsFolder  : rootJsPath,
        targetJsFolder: rootJsPath + '/' + baseJsPath,

        systemConfigJs: './systemjs.config.js'
    };

    gulp.task('baseJs-folders', ['move-baseJs' , 'move-systemConfigJs' , 'move-systemConfigJs'] , function() {
        gulp.src(config.baseJsToFolders.angular)
            .pipe(gulp.dest(config.targetJsFolder + '/@angular'));

        gulp.src(config.baseJsToFolders.rxjs)
            .pipe(gulp.dest(config.targetJsFolder + '/rxjs'));

        gulp.src(config.baseJsToFolders['angular2-in-memory-web-api'])
            .pipe(gulp.dest(config.targetJsFolder + '/angular2-in-memory-web-api'));
    });

    gulp.task('move-systemConfigJs' , function() {
        gulp.src(config.systemConfigJs)
        .pipe(gulp.dest(config.rootJsFolder))
    });

    gulp.task('move-baseJs', function() {
        gulp.src(config.baseJsToMove)
            .pipe(gulp.dest(config.targetJsFolder))
    });   

    gulp.task('lint', function() {
    return gulp.src([
    './source/**/**.ts'
    ]).pipe(tslint({
        formatter: "verbose"
        }))
        .pipe(tslint.report())
    });

    gulp.task('tsc', function() {
    return gulp.src('./source/**/**.ts')
            .pipe(ts(tsProject))           
            .js.pipe(gulp.dest(appPath)).pipe(gulp.dest(targetAppPath));
    });

    gulp.task('watch', function () {
        gulp.watch('./source/**/**.ts', ['build']);
    });    

    gulp.task('build', ['lint', 'tsc' ]);