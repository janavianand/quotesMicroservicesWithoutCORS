const router = require('express').Router()
const Axios = require('axios')

router.get('/quote',async(req,res,next)=>{
  try {
    const {data} = await Axios.get('http://localhost:5001/api/quote')
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
module.exports = router
