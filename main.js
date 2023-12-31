var express=require("express")
var mysql=require("mysql")
var app=express()
app.use(express.json())

const con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'db1'
    })
con.connect((err)=>{
    if (err)
    {
        console.log(err)
    }
    else
    {
        console.log("connected")
    }
})
app.post('/post',(req, res)=>{
    const name = req.body.name;
    const id = req.body.id;
    const mark = req.body.mark;
    con.query("insert into student values(?,?,?)",[id,name,mark],(err, result)=>{
        if (err)
        {
            console.log(err)
        }
        else
        {
            res.send("POSTED")
        }
    })

})
app.listen(3000,(err)=>{
    if (err)
    {
        console.log(err)
    }
    else
    {
        console.log("POST on port 3000")
    }
})


app.get('/get',(req, res)=>{
    con.query("select * from student",function(err, result,fields){
        if (err)
        {
            console.log(err)
        }
        else
        {
            res.send(result)
        }
    })

})
app.listen(4000,(err)=>{
    if (err)
    {
        console.log(err)
    }
    else
    {
        console.log("GET on port 4000")
    }
})