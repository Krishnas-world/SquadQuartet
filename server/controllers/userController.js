const signout = (req,res,next)=>{
    try {
        res
        .clearCookie('access_token')
        .status(200)
        .json("User has signed out");
    } catch (error) {
        next(error)
    }
}

module.exports = {signout}