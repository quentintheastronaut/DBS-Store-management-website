// Requiring modules 
var Branch = require('./branch.js')
const express = require('express'); 
const app = express(); 
const mssql = require("mssql"); 
const { lstat } = require('fs');
const { resolvePtr, resolveSoa } = require('dns');
const { concatSeries } = require('async');
const bodyParser = require('body-parser');
const alert = require('alert');



app.use(express.urlencoded());

var quanlist = [] 


const config = { 
    user: 'sa', 
    password: 'Password123@jkl#', 
    server: 'localhost', 
    database: 'CONG_TY'
}; 


app.get('/showroomlist', function (req, res) { 
  
    fetchData(res);
    console.log('Display done');

}); 
    
app.listen(5000, function () { 
    console.log('Server is listening at port 5000...'); 
}); 

function executeQuery(sql , cb){

    

    mssql.connect(config, function (err) { 
      
        // Create Request object to preform 
        // query operation 
        var request = new mssql.Request(); 
  
        // Query to the database and get the records 
        request.query(sql, 
            function (err, records) { 
  
                if (err) console.log(err) 
  
                // Send records as a response 
                // to browser 
                
               
        
        cb(records);

    }); 

    
}); 

}

app.get('/check', function (req, res) { 
  
    executeQuery('SELECT * FROM dbo.CHI_NHANH ORDER BY TEN_CHI_NHANH',function(result){
        console.log('hello')
        res.send(result)
    })
    console.log('Display done');

}); 

function fetchData(response){

    executeQuery('SELECT * FROM dbo.CHI_NHANH ORDER BY TEN_CHI_NHANH',function(result){
        // let count = 1;
        // response.writeHead(200,{"Content-Type" : "text/html"});
        
        // response.write('<head>')
        // response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        // response.write('</head>')

        // response.write('<style>')
        // response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');')
        // response.write('body { background: #FF6187; font-family: \'Gugi\', cursive;  }')
        // response.write('button { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 600px;margin:10px;    }')
        // response.write('input {font-family: \'Gugi\', cursive;margin: 0 auto; border-radius: 10px; width: 800px; height:70px;  font-size:30px;}')
        // response.write('#search { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 200px; }')
        // response.write('#sort { font-family: \'Gugi\', cursive;background-color: #eeb22c; border-radius: 10px; width: 200px; }')
        // response.write('#add { font-family: \'Gugi\', cursive;background-color: #eb2e6a; border-radius: 10px; width: 50px; }')
        // response.write('.center {font-family: \'Gugi\', cursive;align-items: center;justify-content: center;}')
        // response.write('a {font-family: \'Gugi\', cursive;text-decoration: none; }')
        // response.write('#table { margin: 0 auto; display: grid; grid-template-columns: repeat(3, 25%); grid-column-gap: 50px; grid-row-gap: 50px; grid-template-rows: repeat(4, auto); align-items: center;justify-content: center;grid-template-areas: "store1 store2 store3" "store4 store5 store6" "store7 store8 store9" "store10 store11 store12 "}')
        // response.write('#store1 { grid-area: store1}')
        // response.write('#store2 { grid-area: store2}')
        // response.write('#store3 { grid-area: store3}')
        // response.write('#store4 { grid-area: store4}')
        // response.write('#store5 { grid-area: store5}')
        // response.write('#store6 { grid-area: store6}')
        // response.write('#store7 { grid-area: store7}')
        // response.write('#store8 { grid-area: store8}')
        // response.write('#store9 { grid-area: store9}')
        // response.write('#store10 { grid-area: store10}')
        // response.write('#store11 { grid-area: store11}')
        // response.write('#store12 { grid-area: store12}')



        // response.write('.card { font-family: \'Gugi\', cursive;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border-radius: 10px; width:100%; background-color: #2b2b2b}')
        // response.write('.card:hover { box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  }')
        // response.write('.container { padding: 2px 16px;  }')
        // response.write('img { border-radius:5px 5px 0 0;width:100%;  }')
        // response.write('</style>')

        // response.write('<body>')
        // response.write('<br>')
        // response.write('<h1 style="text-align:center;font-family: \'Gugi\', cursive;">STORE MANAGEMENT</h1>')

        // response.write('<div class="center">')
        // response.write('<div style=" display: block; margin-left: 20%;">')
        // response.write('<input/>')
        // response.write('<a href="http://localhost:5000/showroomlist/"><button id="search"><h1> Search </h1></button></a>')
        // response.write('<a href="http://localhost:5000/showroomlist/add/"><button id="add"><h1> + </h1></button></a>')
        // response.write('</div>')

        // response.write('</div>'),
        // response.write('<br/>')

        // response.write('<div style=" display: block; margin-left: 20%;">')
        // response.write('<a href="http://localhost:5000/showroomlist/code"><button id="sort"><h1> Store\'s ID </h1></button></a>')
        // response.write('<a href="http://localhost:5000/showroomlist/address"><button id="sort"><h1> Address </h1></button></a>')
        // response.write('<a href="http://localhost:5000/showroomlist/name"><button id="sort"><h1> Store\'s name </h1></button></a>')
        // response.write('</div>')

        // response.write('<br/>')

        // response.write('<div id="table">')

        // result.recordset.forEach(element => {
        //     response.write('<a href="http://localhost:5000/showroomlist/update/'+element.MA_CHI_NHANH+'" style"text-decoration: none;">')
        //     response.write('<div id="store' + count +'">')
        //         response.write('<div class="card">')
        //             response.write('<img src="https://cnet3.cbsistatic.com/img/tcF1rKMFTtVjqjJkGJThLGV7IMI=/940x0/2020/03/04/4e78c947-fcf8-4c73-9623-0cb0620acaa6/screen-shot-2020-03-04-at-9-20-19-am.png" alt="branch"/>')
        //             response.write('<div class="container">')
        //                 response.write('<h4><b style="padding:0 10px 10px 10px; color: white;">'+ element.TEN_CHI_NHANH +'</b></h4>')
        //                 response.write('<p style="padding:0 10px 10px 10px;color: white;">' + element.DIA_CHI + '</p>')
        //             response.write('</div>')
        //         response.write('</div>')
        //     response.write('</div>')
        //     response.write('</a>')

        //     count++;
            
        // });
        // response.write('</div>')
       
        // response.write('</body>')

        // response.end();
        console.log('here')
        response.send(result)
    });
    console.log('here')
    console.log('Display done');
    
}


// sort by name, address, code

app.get('/showroomlist/name', function (req, response) { 
  
    executeQuery('SELECT * FROM dbo.CHI_NHANH ORDER BY TEN_CHI_NHANH',function(result){
        let count = 1;
        response.writeHead(200,{"Content-Type" : "text/html"});
        
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')

        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');')
        response.write('body { background: #FF6187; font-family: \'Gugi\', cursive;  }')
        response.write('button { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 600px;margin:10px;    }')
        response.write('input {font-family: \'Gugi\', cursive;margin: 0 auto; border-radius: 10px; width: 800px; height:70px;  font-size:30px;}')
        response.write('#search { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 200px; }')
        response.write('#sort { font-family: \'Gugi\', cursive;background-color: #eeb22c; border-radius: 10px; width: 200px; }')
        response.write('#add { font-family: \'Gugi\', cursive;background-color: #eb2e6a; border-radius: 10px; width: 50px; }')
        response.write('.center {font-family: \'Gugi\', cursive;align-items: center;justify-content: center;}')
        response.write('a {font-family: \'Gugi\', cursive;text-decoration: none; }')
        response.write('#table { margin: 0 auto; display: grid; grid-template-columns: repeat(3, 25%); grid-column-gap: 50px; grid-row-gap: 50px; grid-template-rows: repeat(4, auto); align-items: center;justify-content: center;grid-template-areas: "store1 store2 store3" "store4 store5 store6" "store7 store8 store9" "store10 store11 store12 "}')
        response.write('#store1 { grid-area: store1}')
        response.write('#store2 { grid-area: store2}')
        response.write('#store3 { grid-area: store3}')
        response.write('#store4 { grid-area: store4}')
        response.write('#store5 { grid-area: store5}')
        response.write('#store6 { grid-area: store6}')
        response.write('#store7 { grid-area: store7}')
        response.write('#store8 { grid-area: store8}')
        response.write('#store9 { grid-area: store9}')
        response.write('#store10 { grid-area: store10}')
        response.write('#store11 { grid-area: store11}')
        response.write('#store12 { grid-area: store12}')



        response.write('.card { font-family: \'Gugi\', cursive;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border-radius: 10px; width:100%; background-color: #2b2b2b}')
        response.write('.card:hover { box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  }')
        response.write('.container { padding: 2px 16px;  }')
        response.write('img { border-radius:5px 5px 0 0;width:100%;  }')
        response.write('</style>')

        response.write('<body>')
        response.write('<br>')
        response.write('<h1 style="text-align:center;font-family: \'Gugi\', cursive;">STORE MANAGEMENT</h1>')

        response.write('<div class="center">')
        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<input/>')
        response.write('<a href="http://localhost:5000/showroomlist/"><button id="search"><h1> Search </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/add/"><button id="add"><h1> + </h1></button></a>')
        response.write('</div>')

        response.write('</div>'),
        response.write('<br/>')

        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<a href="http://localhost:5000/showroomlist/code"><button id="sort"><h1> Store\'s ID </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/address"><button id="sort"><h1> Address </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/name"><button id="sort"><h1> Store\'s name </h1></button></a>')
        response.write('</div>')

        response.write('<br/>')

        response.write('<div id="table">')

        result.recordset.forEach(element => {
            response.write('<a href="http://localhost:5000/showroomlist/update/'+element.MA_CHI_NHANH+'" style"text-decoration: none;">')
            response.write('<div id="store' + count +'">')
                response.write('<div class="card">')
                    response.write('<img src="https://cnet3.cbsistatic.com/img/tcF1rKMFTtVjqjJkGJThLGV7IMI=/940x0/2020/03/04/4e78c947-fcf8-4c73-9623-0cb0620acaa6/screen-shot-2020-03-04-at-9-20-19-am.png" alt="branch"/>')
                    response.write('<div class="container">')
                        response.write('<h4><b style="padding:0 10px 10px 10px; color: white;">'+ element.TEN_CHI_NHANH +'</b></h4>')
                        response.write('<p style="padding:0 10px 10px 10px;color: white;">' + element.DIA_CHI + '</p>')
                    response.write('</div>')
                response.write('</div>')
            response.write('</div>')
            response.write('</a>')

            count++;
            
        });
        response.write('</div>')
       
        response.write('</body>')

        response.end();
    });
    console.log('Display done');

}); 

app.get('/showroomlist/code', function (req, response) { 
  
    executeQuery('SELECT * FROM dbo.CHI_NHANH ORDER BY MA_CHI_NHANH',function(result){
        let count = 1;
        response.writeHead(200,{"Content-Type" : "text/html"});
        
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')

        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');')
        response.write('body { background: #FF6187; font-family: \'Gugi\', cursive;  }')
        response.write('button { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 600px;margin:10px;    }')
        response.write('input {font-family: \'Gugi\', cursive;margin: 0 auto; border-radius: 10px; width: 800px; height:70px;  font-size:30px;}')
        response.write('#search { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 200px; }')
        response.write('#sort { font-family: \'Gugi\', cursive;background-color: #eeb22c; border-radius: 10px; width: 200px; }')
        response.write('#add { font-family: \'Gugi\', cursive;background-color: #eb2e6a; border-radius: 10px; width: 50px; }')
        response.write('.center {font-family: \'Gugi\', cursive;align-items: center;justify-content: center;}')
        response.write('a {font-family: \'Gugi\', cursive;text-decoration: none; }')
        response.write('#table { margin: 0 auto; display: grid; grid-template-columns: repeat(3, 25%); grid-column-gap: 50px; grid-row-gap: 50px; grid-template-rows: repeat(4, auto); align-items: center;justify-content: center;grid-template-areas: "store1 store2 store3" "store4 store5 store6" "store7 store8 store9" "store10 store11 store12 "}')
        response.write('#store1 { grid-area: store1}')
        response.write('#store2 { grid-area: store2}')
        response.write('#store3 { grid-area: store3}')
        response.write('#store4 { grid-area: store4}')
        response.write('#store5 { grid-area: store5}')
        response.write('#store6 { grid-area: store6}')
        response.write('#store7 { grid-area: store7}')
        response.write('#store8 { grid-area: store8}')
        response.write('#store9 { grid-area: store9}')
        response.write('#store10 { grid-area: store10}')
        response.write('#store11 { grid-area: store11}')
        response.write('#store12 { grid-area: store12}')



        response.write('.card { font-family: \'Gugi\', cursive;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border-radius: 10px; width:100%; background-color: #2b2b2b}')
        response.write('.card:hover { box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  }')
        response.write('.container { padding: 2px 16px;  }')
        response.write('img { border-radius:5px 5px 0 0;width:100%;  }')
        response.write('</style>')

        response.write('<body>')
        response.write('<br>')
        response.write('<h1 style="text-align:center;font-family: \'Gugi\', cursive;">STORE MANAGEMENT</h1>')

        response.write('<div class="center">')
        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<input/>')
        response.write('<a href="http://localhost:5000/showroomlist/"><button id="search"><h1> Search </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/add/"><button id="add"><h1> + </h1></button></a>')
        response.write('</div>')

        response.write('</div>'),
        response.write('<br/>')

        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<a href="http://localhost:5000/showroomlist/code"><button id="sort"><h1> Store\'s ID </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/address"><button id="sort"><h1> Address </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/name"><button id="sort"><h1> Store\'s name </h1></button></a>')
        response.write('</div>')

        response.write('<br/>')

        response.write('<div id="table">')

        result.recordset.forEach(element => {
            response.write('<a href="http://localhost:5000/showroomlist/update/'+element.MA_CHI_NHANH+'" style"text-decoration: none;">')
            response.write('<div id="store' + count +'">')
                response.write('<div class="card">')
                    response.write('<img src="https://cnet3.cbsistatic.com/img/tcF1rKMFTtVjqjJkGJThLGV7IMI=/940x0/2020/03/04/4e78c947-fcf8-4c73-9623-0cb0620acaa6/screen-shot-2020-03-04-at-9-20-19-am.png" alt="branch"/>')
                    response.write('<div class="container">')
                        response.write('<h4><b style="padding:0 10px 10px 10px; color: white;">'+ element.TEN_CHI_NHANH +'</b></h4>')
                        response.write('<p style="padding:0 10px 10px 10px;color: white;">' + element.DIA_CHI + '</p>')
                    response.write('</div>')
                response.write('</div>')
            response.write('</div>')
            response.write('</a>')

            count++;
            
        });
        response.write('</div>')
       
        response.write('</body>')

        response.end();
    });
    console.log('Display done');

}); 

app.get('/showroomlist/address', function (req, response) { 
  
    executeQuery('SELECT * FROM dbo.CHI_NHANH ORDER BY DIA_CHI',function(result){
        let count = 1;
        response.writeHead(200,{"Content-Type" : "text/html"});
        
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')

        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');')
        response.write('body { background: #FF6187; font-family: \'Gugi\', cursive;  }')
        response.write('button { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 600px;margin:10px;    }')
        response.write('input {font-family: \'Gugi\', cursive;margin: 0 auto; border-radius: 10px; width: 800px; height:70px;  font-size:30px;}')
        response.write('#search { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 200px; }')
        response.write('#sort { font-family: \'Gugi\', cursive;background-color: #eeb22c; border-radius: 10px; width: 200px; }')
        response.write('#add { font-family: \'Gugi\', cursive;background-color: #eb2e6a; border-radius: 10px; width: 50px; }')
        response.write('.center {font-family: \'Gugi\', cursive;align-items: center;justify-content: center;}')
        response.write('a {font-family: \'Gugi\', cursive;text-decoration: none; }')
        response.write('#table { margin: 0 auto; display: grid; grid-template-columns: repeat(3, 25%); grid-column-gap: 50px; grid-row-gap: 50px; grid-template-rows: repeat(4, auto); align-items: center;justify-content: center;grid-template-areas: "store1 store2 store3" "store4 store5 store6" "store7 store8 store9" "store10 store11 store12 "}')
        response.write('#store1 { grid-area: store1}')
        response.write('#store2 { grid-area: store2}')
        response.write('#store3 { grid-area: store3}')
        response.write('#store4 { grid-area: store4}')
        response.write('#store5 { grid-area: store5}')
        response.write('#store6 { grid-area: store6}')
        response.write('#store7 { grid-area: store7}')
        response.write('#store8 { grid-area: store8}')
        response.write('#store9 { grid-area: store9}')
        response.write('#store10 { grid-area: store10}')
        response.write('#store11 { grid-area: store11}')
        response.write('#store12 { grid-area: store12}')



        response.write('.card { font-family: \'Gugi\', cursive;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border-radius: 10px; width:100%; background-color: #2b2b2b}')
        response.write('.card:hover { box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  }')
        response.write('.container { padding: 2px 16px;  }')
        response.write('img { border-radius:5px 5px 0 0;width:100%;  }')
        response.write('</style>')

        response.write('<body>')
        response.write('<br>')
        response.write('<h1 style="text-align:center;font-family: \'Gugi\', cursive;">STORE MANAGEMENT</h1>')

        response.write('<div class="center">')
        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<input/>')
        response.write('<a href="http://localhost:5000/showroomlist/"><button id="search"><h1> Search </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/add/"><button id="add"><h1> + </h1></button></a>')
        response.write('</div>')

        response.write('</div>'),
        response.write('<br/>')

        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<a href="http://localhost:5000/showroomlist/code"><button id="sort"><h1> Store\'s ID </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/address"><button id="sort"><h1> Address </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/name"><button id="sort"><h1> Store\'s name </h1></button></a>')
        response.write('</div>')

        response.write('<br/>')

        response.write('<div id="table">')

        result.recordset.forEach(element => {
            response.write('<a href="http://localhost:5000/showroomlist/update/'+element.MA_CHI_NHANH+'" style"text-decoration: none;">')
            response.write('<div id="store' + count +'">')
                response.write('<div class="card">')
                    response.write('<img src="https://cnet3.cbsistatic.com/img/tcF1rKMFTtVjqjJkGJThLGV7IMI=/940x0/2020/03/04/4e78c947-fcf8-4c73-9623-0cb0620acaa6/screen-shot-2020-03-04-at-9-20-19-am.png" alt="branch"/>')
                    response.write('<div class="container">')
                        response.write('<h4><b style="padding:0 10px 10px 10px; color: white;">'+ element.TEN_CHI_NHANH +'</b></h4>')
                        response.write('<p style="padding:0 10px 10px 10px;color: white;">' + element.DIA_CHI + '</p>')
                    response.write('</div>')
                response.write('</div>')
            response.write('</div>')
            response.write('</a>')

            count++;
            
        });
        response.write('</div>')
       
        response.write('</body>')

        response.end();
    });
    console.log('Display done');
}); 



// home page
app.get('/', function (req, res) { 
  
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write('<head>')
        res.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
    res.write('</head>')
    res.write('<style>')
    res.write('button { background-color: #38c98d; border-radius: 10px; width: 600px;  }')
    res.write('input {margin: 0 auto; border-radius: 10px; width: 800px; height:50px  }')
    res.write('#search { background-color: #eeb22c; border-radius: 10px; width: 200px; }')
    res.write('.center {align-items: center;justify-content: center;}')
    res.write('a {text-decoration: none; }')
    

    res.write('</style>')
    res.write('<body>')
    res.write('<div class="center">')
    res.write('<div>')
    res.write('<input/>')
    res.write('</div>')
    res.write('<a href="http://localhost:5000/showroomlist/"><button><h1> Xem danh sách showroom </h1></button></a>')
    res.write('<a href="http://localhost:5000/showroomlist/"><button id="search"><h1> Tìm kiếm </h1></button></a>')
    res.write('</div>')
    res.end();

    console.log('Display done');

}); 


// home page
app.get('/homepage',function (req,response){
        response.writeHead(200,{"Content-Type" : "text/html"});
        
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')

        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');body {background: #FF6187; font-family: \'Gugi\', cursive; }#form { font-family: \'Gugi\', cursive;display: grid;align-items: center;justify-content: center;grid-template-columns: 15% repeat(3,20%);grid-template-rows    : repeat(6,auto);grid-column-gap: 0px;grid-row-gap: 10px;grid-template-areas: "label label label label""name input1 input1 input1""tele input2 input2 input2""address input3 input3 input3""manager input4 input4 input4""btn btn btn btn"};#manager {font-family: \'Gugi\', cursive;grid-area: manager;} #label {font-family: \'Gugi\', cursive;grid-area: label;text-align: center;}#name {font-family: \'Gugi\', cursive;grid-area: name;}#tele {font-family: \'Gugi\', cursive;grid-area: tele;}#address {font-family: \'Gugi\', cursive;grid-area: address;}#input1{grid-area: input1;font-size:25px;}#input2 {grid-area: input2;font-size:25px;}#input3 {grid-area: input3;font-size:25px;}#input4 {grid-area: input4;font-size:25px;}button {background-color: #eeb22c; border-radius: 10px; width: 200px;}#btn {grid-area: btn;font-family: \'Gugi\', cursive;}input {margin: 0 auto; border-radius: 10px; width: 500px;  height:50px; }')
        
        response.write('button { border-radius: 10px; width: 100%;  }')
        response.write('#btn1 { background-color: #38c98d; }')
        response.write('#btn2 { background-color: #ebb22c; }')
        response.write('#btn3 { background-color: #eb2e6a; }')

        response.write('#table { margin: 0 auto; display: grid; grid-template-columns: repeat(3, 25%); grid-column-gap: 50px; grid-row-gap: 50px; grid-template-rows: repeat(2, auto); align-items: center;justify-content: center;grid-template-areas: "store1 store1 store1" "store2 store3 store4" }')
        response.write('#store1 { grid-area: store1; }')
        response.write('#store2 { grid-area: store2;}')
        response.write('#store3 { grid-area: store3;}')
        response.write('#store4 { grid-area: store4;}')
        response.write('a { text-decoration: none; }')
        response.write('h1 { font-family: \'Gugi\', cursive;}')
        response.write('</style>')

        response.write('<body>')
        response.write('<div id="table">')

        response.write('<h1 id="store1" style="text-align:center;">WELCOME BACK , MANAGER</h1>')

        response.write('<a id="store2" href=""><button id="btn1"><h1>Staff</h1></button></a>')
        response.write('<a id="store3" href="http://localhost:5000/showroomlist"><button id="btn2"><h1>Store</h1></button></a>')
        response.write('<a id="store4" href=""><button id="btn3"><h1>Product</h1></button></a>')

        response.write('</div>')
       
        response.write('</body>')

        response.end();
    }
);


// insert
app.get('/showroomlist/add',function (req,response){

    response.writeHead(200,{"Content-Type" : "text/html"});
        
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')

        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');body {background: #FF6187; font-family: \'Gugi\', cursive; }#form { font-family: \'Gugi\', cursive;display: grid;align-items: center;justify-content: center;grid-template-columns: 15% repeat(3,20%);grid-template-rows    : repeat(7,auto);grid-column-gap: 0px;grid-row-gap: 10px;grid-template-areas: "btn1 label label label""id input0 input0 input0""name input1 input1 input1""tele input2 input2 input2""address input3 input3 input3""manager input4 input4 input4""btn btn btn btn"};#manager {font-family: \'Gugi\', cursive;grid-area: manager;} #label {font-family: \'Gugi\', cursive;grid-area: label;text-align: center;}#name {font-family: \'Gugi\', cursive;grid-area: name;}#id {font-family: \'Gugi\', cursive;grid-area: id;}#tele {font-family: \'Gugi\', cursive;grid-area: tele;}#address {font-family: \'Gugi\', cursive;grid-area: address;}#input0 {grid-area: input0;font-size:25px;size:8;}#input1{grid-area: input1;font-size:25px;size:8;}#input2 {grid-area: input2;font-size:25px;size:255;}#input3 {grid-area: input3;font-size:25px;size:255;}#input4 {grid-area: input4;font-size:25px;size:6;} button {background-color: #eeb22c; border-radius: 10px; width: 200px;} #btn {grid-area: btn;font-family: \'Gugi\', cursive;background-color: #eeb22c;}#btn1 {grid-area: btn1;font-family: \'Gugi\', cursive;width:100px;background-color: #eeb22c;} input {margin: 0 auto; border-radius: 10px; width: 500px;  height:50px; }')
        
        response.write('</style>')

        response.write('<body>')
        response.write('<form method="post" action="/showroomlist/add"> <div id="form"> <a href="http://localhost:5000/showroomlist/"><input id="btn1" type="button" name="back" onclick="return 1;" value="<="></a><h1 id="label">INSERT NEW STORE</h1><h2 id="id">STORE\'S ID</h2><input name="input0" id="input0"/><h2 id="name">NAME</h2><input name="input1" id="input1"/><h2 id="tele">TELEPHONE</h2><input name="input2" id="input2"/><h2 id="address">ADDRESS</h2><input name="input3" id="input3"/><h2 id="manager">MANAGER\'S ID</h2><input name="input4" id="input4"/><input id="btn" type="submit" value="Submit"></div> </form')       
        

        response.write('</body>')

        response.end();

    
});



app.post('/showroomlist/add', function(request, response){
    let id = request.body.input0;
    let name = request.body.input1;
    let tele = request.body.input2;
    let addr = request.body.input3;
    let manager = request.body.input4;
    let back = request.body.back;
    console.log(back);
    console.log('hello');

    if(back == 1){
        
        response.redirect('/showroomlist');
    }
    else if(id == '' || name == '' || addr == '' || manager == '' || tele ==''){
        alert('Please, fill all textbox');
        response.redirect('/showroomlist/add');
    }
    else {
        executeQuery('INSERT INTO [dbo].[CHI_NHANH] VALUES ('+ id +',\''+ name +'\','+tele +',\''+addr +'\',0,0,\''+ manager+'\' )', function(result){});
        console.log(request.body.input0);
        console.log(request.body.input1);
        console.log(request.body.input2);
        console.log(request.body.input3);
        console.log(request.body.input4);
        
        alert('Insert successfully');
        response.redirect('/showroomlist/');
    }



    
    
});


app.post('/showroomlist/search', function(request, response){
    let name = request.body.string;
    console.log(request.body.string);
   
    executeQuery('SELECT * FROM dbo.CHI_NHANH WHERE TEN_CHI_NHANH LIKE \'%'+ name +'%\' OR DIA_CHI LIKE \'%'+ name +'%\'',function(result){
        let count = 1;
        response.writeHead(200,{"Content-Type" : "text/html"});
        
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')

        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');')
        response.write('body { background: #FF6187; font-family: \'Gugi\', cursive;  }')
        response.write('button { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 600px; margin:10px;  }')
        response.write('input {font-family: \'Gugi\', cursive;margin: 0 auto; border-radius: 10px; width: 800px; height:70px;  font-size:30px; margin:10px;}')
        response.write('#search { font-family: \'Gugi\', cursive;background-color: #38c98d; border-radius: 10px; width: 200px; }')
        response.write('#sort { font-family: \'Gugi\', cursive;background-color: #eeb22c; border-radius: 10px; width: 200px; }')
        response.write('#add { font-family: \'Gugi\', cursive;background-color: #eb2e6a; border-radius: 10px; width: 50px; }')
        response.write('.center {font-family: \'Gugi\', cursive;align-items: center;justify-content: center;}')
        response.write('a {font-family: \'Gugi\', cursive;text-decoration: none; }')
        response.write('#table { margin: 0 auto; display: grid; grid-template-columns: repeat(3, 25%); grid-column-gap: 50px; grid-row-gap: 50px; grid-template-rows: repeat(4, auto); align-items: center;justify-content: center;grid-template-areas: "store1 store2 store3" "store4 store5 store6" "store7 store8 store9" "store10 store11 store12 "}')
        response.write('#store1 { grid-area: store1}')
        response.write('#store2 { grid-area: store2}')
        response.write('#store3 { grid-area: store3}')
        response.write('#store4 { grid-area: store4}')
        response.write('#store5 { grid-area: store5}')
        response.write('#store6 { grid-area: store6}')
        response.write('#store7 { grid-area: store7}')
        response.write('#store8 { grid-area: store8}')
        response.write('#store9 { grid-area: store9}')
        response.write('#store10 { grid-area: store10}')
        response.write('#store11 { grid-area: store11}')
        response.write('#store12 { grid-area: store12}')



        response.write('.card { font-family: \'Gugi\', cursive;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border-radius: 10px; width:100%; background-color: #2b2b2b}')
        response.write('.card:hover { box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  }')
        response.write('.container { padding: 2px 16px;  }')
        response.write('img { border-radius:5px 5px 0 0;width:100%;  }')
        response.write('</style>')

        response.write('<body>')
        response.write('<br>')
        response.write('<h1 style="text-align:center;font-family: \'Gugi\', cursive;">STORE MANAGEMENT</h1>')

        response.write('<div class="center">')
        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<form method="post" action="/showroomlist/search">')
        response.write('<input name="string">')
        response.write('<a href="http://localhost:5000/showroomlist/search/" ><input id="search" type="submit" value="search"></a>')
        response.write('<a href="http://localhost:5000/showroomlist/add/"><button id="add"><h1> + </h1></button></a>')
        response.write('</form>');
        response.write('</div>')

        response.write('</div>'),
        response.write('<br/>')

        response.write('<div style=" display: block; margin-left: 20%;">')
        response.write('<a href="http://localhost:5000/showroomlist/code"><button id="sort"><h1> Store\'s ID </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/address"><button id="sort"><h1> Address </h1></button></a>')
        response.write('<a href="http://localhost:5000/showroomlist/name"><button id="sort"><h1> Store\'s name </h1></button></a>')
        response.write('</div>')

        response.write('<br/>')

        response.write('<div id="table">')

        result.recordset.forEach(element => {
            
            response.write('<div id="store' + count +'">')
                response.write('<div class="card">')
                    response.write('<img src="https://cnet3.cbsistatic.com/img/tcF1rKMFTtVjqjJkGJThLGV7IMI=/940x0/2020/03/04/4e78c947-fcf8-4c73-9623-0cb0620acaa6/screen-shot-2020-03-04-at-9-20-19-am.png" alt="branch"/>')
                    response.write('<div class="container">')
                        response.write('<h4><b style="padding:0 10px 10px 10px; color: white;">'+ element.TEN_CHI_NHANH +'</b></h4>')
                        response.write('<p style="padding:0 10px 10px 10px;color: white;">' + element.DIA_CHI + '</p>')
                    response.write('</div>')
                response.write('</div>')
            response.write('</div>')

            count++;
            
        });
        response.write('</div>')
       
        response.write('</body>')

        response.end();
    });
    console.log('Display done');


});




app.get('/showroomlist/add/success',function (req,response){

    response.writeHead(200,{"Content-Type" : "text/html"});
        
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')

        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');body {background: #FF6187; font-family: \'Gugi\', cursive; }#form { font-family: \'Gugi\', cursive;display: grid;align-items: center;justify-content: center;grid-template-columns: 15% repeat(3,20%);grid-template-rows    : repeat(6,auto);grid-column-gap: 0px;grid-row-gap: 10px;grid-template-areas: "label label label label""name input1 input1 input1""tele input2 input2 input2""address input3 input3 input3""manager input4 input4 input4""btn btn btn btn"};#manager {font-family: \'Gugi\', cursive;grid-area: manager;} #label {font-family: \'Gugi\', cursive;grid-area: label;text-align: center;}#name {font-family: \'Gugi\', cursive;grid-area: name;}#tele {font-family: \'Gugi\', cursive;grid-area: tele;}#address {font-family: \'Gugi\', cursive;grid-area: address;}#input1{grid-area: input1;font-size:25px;}#input2 {grid-area: input2;font-size:25px;}#input3 {grid-area: input3;font-size:25px;}#input4 {grid-area: input4;font-size:25px;}button {background-color: #eeb22c; border-radius: 10px; width: 200px;}#btn {grid-area: btn;font-family: \'Gugi\', cursive;}input {margin: 0 auto; border-radius: 10px; width: 500px;  height:50px; }')
        
        response.write('</style>')

        response.write('<body>')
        response.write('<h1 style="label">Success</h1>')       
        response.write('</body>')

        response.end();
});


// update

app.post('/showroomlist/update/*', function(request, response){
   
    let id = request.body.input0;
    let name = request.body.input1;
    let tele = request.body.input2;
    let addr = request.body.input3;
    let manager = request.body.input4;

    executeQuery('UPDATE [dbo].[CHI_NHANH] SET TEN_CHI_NHANH = \''+ name +'\',SO_DIEN_THOAI = \''+ tele +'\', DIA_CHI = \''+ addr +'\',MA_NHAN_VIEN_QUAN_LY = \''+ manager +'\' WHERE MA_CHI_NHANH = \''+id+'\'',function(result){

    });

    console.log('DONE');
    response.redirect('/showroomlist/update/'+id);
});


app.get('/showroomlist/update/*',function (req,response){

    let url = req.url;
    let id = url.substring(21, url.length);

    executeQuery('SELECT MA_CHI_NHANH, TEN_CHI_NHANH, SO_DIEN_THOAI, DIA_CHI, MA_NHAN_VIEN_QUAN_LY FROM dbo.CHI_NHANH WHERE MA_CHI_NHANH = \'' + id + '\'',function(result){

        let name,id,manager,tele,addr;
        result.recordset.forEach(element => {
            name = element.TEN_CHI_NHANH;
            id = element.MA_CHI_NHANH;
            manager = element.MA_NHAN_VIEN_QUAN_LY;
            tele = element.SO_DIEN_THOAI;
            addr = element.DIA_CHI;
        });

        response.writeHead(200,{"Content-Type" : "text/html"});
        response.write('<head>')
        response.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />')
        response.write('</head>')
        response.write('<style>')
        response.write('@import url(\'https://fonts.googleapis.com/css2?family=Gugi&display=swap\');body {background: #FF6187; font-family: \'Gugi\', cursive; }#form { font-family: \'Gugi\', cursive;display: grid;align-items: center;justify-content: center;grid-template-columns: 15% repeat(3,20%);grid-template-rows    : repeat(7,auto);grid-column-gap: 0px;grid-row-gap: 10px;grid-template-areas: "btn1 label label label""id input0 input0 input0""name input1 input1 input1""tele input2 input2 input2""address input3 input3 input3""manager input4 input4 input4""btn btn btn btn"};#manager {font-family: \'Gugi\', cursive;grid-area: manager;} #label {font-family: \'Gugi\', cursive;grid-area: label;text-align: center;}#name {font-family: \'Gugi\', cursive;grid-area: name;}#id {font-family: \'Gugi\', cursive;grid-area: id;}#tele {font-family: \'Gugi\', cursive;grid-area: tele;}#address {font-family: \'Gugi\', cursive;grid-area: address;}#input0 {grid-area: input0;font-size:25px;size:8;}#input1{grid-area: input1;font-size:25px;size:8;}#input2 {grid-area: input2;font-size:25px;size:255;}#input3 {grid-area: input3;font-size:25px;size:255;}#input4 {grid-area: input4;font-size:25px;size:6;} button {background-color: #eeb22c; border-radius: 10px; width: 200px;} #btn {grid-area: btn;font-family: \'Gugi\', cursive;background-color: #eeb22c;}#btn1 {grid-area: btn1;font-family: \'Gugi\', cursive;width:100px;background-color: #eeb22c;} input {margin: 0 auto; border-radius: 10px; width: 500px;  height:50px; }')
        response.write('</style>')

        response.write('<body>')
        response.write('<form method="post" action="/showroomlist/update/*"> <div id="form"> <a href="http://localhost:5000/showroomlist/"><input id="btn1" type="button" name="back" onclick="return 1;" value="<="></a><h1 id="label">EDIT STORE\'S INFORMATION</h1><h2 id="id">STORE\'S ID</h2><input name="input0" id="input0" value="'+ id +'"/><h2 id="name">NAME</h2><input name="input1" id="input1" value="'+ name +'"/><h2 id="tele">TELEPHONE</h2><input name="input2" id="input2" value="'+ tele +'" /><h2 id="address" >ADDRESS</h2><input name="input3" id="input3" value="'+ addr +'"/><h2 id="manager">MANAGER\'S ID</h2><input name="input4" id="input4" value="'+ manager+'" /><input id="btn" type="submit" value="Submit"></div> </form')       
        response.write('</body>')

        response.end();

    });
});