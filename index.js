var express = require('express');
var app = express();

// 设置handlebars 视图引擎
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({
	layoutsDir: 'views/layouts',
	defaultLayout: 'main',
	extname: '.handlebars'
}));

app.set('view engine', 'handlebars');

app.set('port',process.env.PORT || 80);
app.set('x-powered-by',false)

app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( '服务器已启动，地址： http://localhost:' + app.get('port') + '; 按 Ctrl-C 终止.' );
});
