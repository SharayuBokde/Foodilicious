const mysql = require('mysql');
const db = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

//Subcategory
exports.subCategory = (req,res)=>{
 const id=req.params.id
    db.query(`SELECT * FROM subcategory WHERE category_id = ${id}`, async(error,response)=>{
        if(error)
            console.log(error);
        else 
            return res.status(200).json(response);
    })
}
/*
{
    "review_body":"Very Good Ambience",
    "userid":"1",
    "restuarantid":"2"
}
*/
exports.postReview = (req,res) => {
    const {review_body,userid,restaurantid} = req.body;
    db.query(`insert into review (review_body, userid, restaurantid) values('${review_body}',${userid},${restaurantid})`,async (err,result) => {
        if(err)
            console.log(err);
        else
            res.status(200).json(result);
    })
}

exports.getReview = (req,res) => {
    const id = req.params.id;
    db.query(`select * from review where reviewid = ${id}`,async (err,result) => {
        if(err) 
            console.log(err);
        
        else
            res.status(200).json(result);
    })
}
/*
exports.restaurantInfo = (req,res)=>{
    const id=req.params.id
        db.query(`SELECT * FROM restaurant WHERE category_id = ${id}`, async(error,response)=>{
            if(error){
                console.log(error);
            }
            else
            {  
                return res.status(200).json(response);
            }
        })
    }
*/
