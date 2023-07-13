// ---------------------
// ------- task 1 
// ---------------------

// 1- create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )
const personObj ={
    fname:"ahmed",
    lname:"hossam",
    age:20,
    city:"alex",
}


// 2- change object to json 
const personJSON = JSON.stringify(personObj)


// 3- store in file                 (file customer.json)
const fs =require ('fs')
fs.writeFileSync("customers.json",personJSON)


// 4- read file json                (file customer.json)
const readFileJSON = fs.readFileSync("customers.json").toString()


// 5- convert to object 
const convertPersonToObject = JSON.parse(readFileJSON)


// 6- update data to ( adel ahmed , 40 , cairo )
const updateData = {
    fname:"adel",
    lname:"ahmed",
    age:"40",
    city:"cairo",
}


// 7- convert object to json 
const updateDataJSON = JSON.stringify(updateData)


// // 8- store in file (writeFileSync)
fs.writeFileSync("customers.json",updateDataJSON)

// ---------------------
// ------- task 2
// ---------------------


// 1- to add 7 persons with ids from 1-7     file(data5.js)
const data5 =require ("./data5")
const yargs = require ("yargs")
yargs.command({
    command:"add",
    discribe:"to add person",
    builder:{
        
        fname:{
            discribe:"this is the id ",
            demandOption:true,
            type:"string"
        }, 
        lname:{
            discribe:"this is the id ",
            demandOption:true,
            type:"string"
        }, 
        age:{
            discribe:"this is the id ",
            demandOption:true,
            type:"string"
        },
        city:{
            discribe:"this is the id ",
            demandOption:true,
            type:"string"
        },
    },
    handler:(x)=>{
        data5.addcustomer (x.fname,x.lname,x.age,x.city)
    }
})


// 2- to delete id 4-6
yargs.command({
    command:"delete",
    discribe:"delet item from 4 to 6",
    handler:(x)=>{
        data5.deleteId(x.id)
    }
})


// 3- to list fname & lname & city for all 
yargs.command({
    command:"lists",
    discribe:"to list fname & lname & city for all ",
    handler:()=>{
        data5.listsForAll()
    }
})


// 4- to read all data for only the 5th person 
yargs.command({
    command:"find5",
    discribe:"to find the 5th person ",
    builder:()=>{
        data5.personfive()
    }
})


yargs.parse()

// -------------------------
// ------------ the end 
// -------------------------
///////////////////////////////////////////////////////////