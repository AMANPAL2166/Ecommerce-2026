import userModel from '../models/userModel.js';
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
        if(!address){
            return res.send({message:'Address is required'})
        }   
        //checking user
        const existingUser = await userModel.findOne({email})

        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Already registered please login'
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = new userModel({name,email,phone,address,password:hashedPassword}).save()
        res.status(201).send({
            success:true,
            message:'User registered successfully',
            user
        })


    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })

    }
}