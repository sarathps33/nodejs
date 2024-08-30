// write file
const fs =require("fs");
// fs.writeFile("message.txt","have a good day",(error)=>{
//     if(error){
//         console.log("unable to write");
        

//     }
// })
// append file
// fs.appendFile("message.txt","hello world",(error)=>{
//     if(error){
//         console.log("unable to write");
        

//     }
// })
// read file
// fs.readFile("message.txt","utf-8",(error,data)=>{
//         if(error){
//             console.log("unable to write");
//         }
//         else{
//             console.log(data);
            
//         }
//  })
// delete file
// fs.unlink("message.txt",(error)=>{
//     if(error){
//         console.log("unable to delete");
        
//     }
// });
// create folder
// fs.mkdir("hello",(error)=>{
//     if(error){
//         console.log("unable to create");
        
//     }
// });
// read files from folder
fs.readdir("hello",(error,data)=>{
    if(error){
        console.log("unable to delete");
        
    }
    else{
        console.log(data);
        
    }
});

