var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
    title:'Article One | Pranshu Pathak',
    heading:'Article One',
    date:'Sep 5, 2016',
    content:`
                <p>This is my first Article Content.This is my first Article Content.This is my first Article Content.This is my first Article Content.This is my first Article Content.
                </p>
                <p>This is my first Article Content.This is my first Article Content.This is my first Article Content.This is my first Article Content.This is my first Article Content.
                </p>
                <p>This is my first Article Content.This is my first Article Content.This is my first Article Content.This is my first Article Content.This is my first Article Content.
                </p>
    `
    },
    'article-two':{
    title:'Article Two | Pranshu Pathak',
    heading:'Article Two',
    date:'Sep 5, 2016',
    content:`
                <p>This is my second Article Content.</p>
    `},
    'article-three':{
    title:'Article Three | Pranshu Pathak',
    heading:'Article Three',
    date:'Sep 5, 2016',
    content:`
                <p>This is my Third Article Content.</p>
    `}
    
};
    
function createTemplate(data){
    
    var title = data.title;
    var date = data.date;
    var heading =data.heading;
    var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){
    //articalName == article-one
    //articles[articalName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


/*

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
*/
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
