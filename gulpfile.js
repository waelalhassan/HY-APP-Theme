let gulp = require("gulp"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    autoprefixer = require("gulp-autoprefixer"),
    connect = require("gulp-connect"),
    uglify = require("gulp-uglify"),
    sourcemaps = require("gulp-sourcemaps"),
    zip = require("gulp-zip");


gulp.task("css", ()=> {
    return gulp.src("sass/style.scss")
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: "pretty"}))//compressed 
            .pipe(autoprefixer())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("dist/css"))
            // .pipe(connect.reload())
})

// html
gulp.task("html", ()=> {
    return gulp.src(["pug/*.pug", "!pug/footer.pug"])
            .pipe(pug({pretty:true}))
            .pipe(gulp.dest("dist/"))
            // .pipe(connect.reload())
})

//js
gulp.task("js", ()=> {
    return gulp.src("js/main.js")
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("dist/js"))
            // .pipe(connect.reload())
})

// compress dist
gulp.task("zip", ()=> {
    return gulp.src("dist**/*")
            .pipe(zip("design-1-(1.0.0).zip"))
            .pipe(gulp.dest("."))
})

// live server & reload
// gulp.task("server", ()=> {
//     connect.server({
//         root: "dist",
//         port: 4000,
//         livereload: true
//     })
// })

// watch files
gulp.task("default", ()=> {
    gulp.watch("sass/style.scss", gulp.series("css"));
    gulp.watch("pug/*.pug", gulp.series("html"));
    gulp.watch("js/main.js", gulp.series("js"));
    // gulp.watch("dist/index.html", gulp.series("server"))
})