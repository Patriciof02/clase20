const mongoose = require('mongoose')

const User = mongoose.model('User')

const signup = async (req, res) => {
    try{
        const user = new User(req.body)
        const resp = await user.Save()
        return res.status(201).json({
            message : 'User Created',
            detail : resp,
        })
    }catch(error){
        return res.status(500).json({
            message:'internal servel error',
            detail: error,
        })
        
    }
    
}

const getUsers = async (req, res) => {
    try {
        const resp = await User.find()
        return res.status(200).json({
            message:'ok',
            detail: resp
        })

    }catch(error){
        return res.status(500).json({
            message:'internal servel error',
            detail: error,

    })
}
}

module.exports ={
    signup,
    getUsers,
}