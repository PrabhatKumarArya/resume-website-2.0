import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";


export const loginAdmin = async (req, res, next) => {

  try {

    const {
      email,
      password
    } = req.body;


    if(!email || !password){

      return res.status(400).json({

        success:false,

        message:"Email and password required"

      });

    }



    const admin =
      await Admin.findOne({email});



    if(!admin){

      return res.status(401).json({

        success:false,

        message:"Invalid credentials"

      });

    }



    const isMatch =
      await admin.matchPassword(password);



    if(!isMatch){

      return res.status(401).json({

        success:false,

        message:"Invalid credentials"

      });

    }



    const token =
      generateToken(admin._id);



    res.status(200).json({

      success:true,

      message:"Login successful",

      token,

      admin:{
        id:admin._id,
        email:admin.email
      }

    });



  } catch(error){

    next(error);

  }

};