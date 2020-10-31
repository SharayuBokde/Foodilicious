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

//Add Review
exports.addReview = (req,res) => {
    const {review_body,userid,restaurantid} = req.body;
    db.query(`insert into review (review_body, userid, restaurantid) values('${review_body}',${userid},${restaurantid})`,async (err,result) => {
        if(err)
            console.log(err);
        else
            res.status(200).json(result);
    })
}

//View Review by id
exports.viewReview = (req,res) => {
    const id = req.params.id;
    db.query(`select * from review where reviewid = ${id}`,async (err,result) => {
        if(err) 
            console.log(err);
        
        else
            res.status(200).json(result);
    })
}

//View all reviews of particular User
exports.allUserReviews = (req,res) => {
    const id = req.params.id;
    db.query(`select * from review where userid = ${id}`,async (err,result) => {
        if(err) 
            console.log(err);
        
        else
            res.status(200).json(result);
    })
}

//View all reviews of particular Restaurant
exports.allRestaurantReviews = (req,res) => {
    const id = req.params.id;
    db.query(`select * from review where restaurantid = ${id}`,async (err,result) => {
        if(err) 
            console.log(err);
        
        else
            res.status(200).json(result);
    })
}

//View all reviews
exports.allReviews = (req,res) => {
    db.query(`select * from review`,async (err,result) => {
        if(err) 
            console.log(err);
        
        else
            res.status(200).json(result);
    })
}