const catchAsyncError = require('../middleware/catchAsyncError');
const Variety = require('../models/varietyModel');
const ErrorHandler = require('../utils/errorhandler');


//add varities 
exports.addVarieties = catchAsyncError(async (req, res, next) => {
    try {
      const varieties = await Variety.create(req.body);

      res.status(201).json({
          success: true,
          varieties,
      });
      } catch (error) {
        next(error);
      }
    });
  
  
//single varities  detail
exports.getVaritiesDetails =  catchAsyncError(async(req,res,next)=>{
  const variety = await Variety.findById(req.params.id);

  if(!variety){
      return next(new ErrorHandler("variety Not found",404))
  }

  res.status(200).json({
      success:true,
      variety
  })
})

//Update Varieties -- Admin

exports.updateVarieties =catchAsyncError( async (req,res)=>{
  let variety = Variety.findById(req.params.id);

  if(!variety){
      return next(new ErrorHandler("product Not found",404))
  }


  variety =  await Variety.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false
  });

  res.status(200).json({
      success:true,
      variety
  })
})



//delete varieties --admin

exports.deleteVarieties = catchAsyncError(async (req,res,next)=>{

  const variety = await Variety.findById(req.params.id);

  if(!variety){
      return next(new ErrorHandler("variety Not found",404))
  }
  else{
    await Variety.findByIdAndRemove(req.params.id)
  }


 res.status(200).json({
  sucess:true,
  message:"variety deleted succesfully"
 })
})

