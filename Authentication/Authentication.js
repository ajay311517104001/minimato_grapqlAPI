const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

 const GenerateToken = (payload) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    console.log("the payload is ", payload)
    // let data = {
    //     time: Date(),
    //     userId: 12,
    // }

    const token = jwt.sign(payload, jwtSecretKey);
    console.log("validated token" , token)
    // res.send(token);
    return(token)
}


const ValidateToken =(token)=>{
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        // const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
          console.log("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
}

module.exports={GenerateToken,ValidateToken}