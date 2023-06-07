
//creating token and saving in cookie


const sendToken = (user,statusCode, res) =>{
    const token = user.getJWTToken();

    //options for cookie
  const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 *1000
        ),
       secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    sameSite: req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'none' : 'lax',
        
    };

    res.status(statusCode).cookie("token", token,options).json({
        success:true,
        user,
        token,
    })
}

module.exports = sendToken;
