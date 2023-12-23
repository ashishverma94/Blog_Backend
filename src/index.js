import dotenv from 'dotenv' ;
import connectDB from "./db/index.js" ;
import { app } from './app.js';


dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log( `Server is running at PORT : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed :", error)
})




















// ;( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERROR:",error) ;
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log('app is listening on PORT ${process.env.PORT}')
//         })
//     } catch( error ){
//         console.log("error:", error )
//         throw error ;
//     }
// })()