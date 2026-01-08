import userModel from '../model/userModel.js';
export const registerController = async(req,res) =>{
    try{
        const {name,email,password}= req.body   
        //validation
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        } 
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!phone){
            return res.send({message:'Phone number must be at least 10 digits long'})
        }

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })

    }
}