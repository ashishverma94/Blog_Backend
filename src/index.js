import dotenv from 'dotenv' ;
import connectDB from "./db/index.js" ;


dotenv.config({
    path:'./env'
})


connectDB( ) ;




















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