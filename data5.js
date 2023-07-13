const fs = require ('fs')

// to add customer in data 
const addcustomer =(fname,lname,age,city)=>{
    const alldata =loadInfo()

    if (alldata.length<7){
        alldata.push({
            id:(alldata.length + 1),
            fname:fname,
            lname:lname,
            age:age,
            city:city,
        })
        saveData(alldata)
    }else{
        console.log("you allredy added 7 persons")
    }
}


/////////////////////////////
const loadInfo = ()=>{
    try{
        const dataJSON=fs.readFileSync("sevenData.json").toString()
        return JSON.parse(dataJSON)
    }catch{
        return[]
    }
}
///////////////////////////////////
const saveData =(alldata)=>{
    const datajsonSaveing = JSON.stringify(alldata)
    fs.writeFileSync("sevenData.json", datajsonSaveing)
}
/////////////////////////////////////////////

// 2- to delete id 4-6
const deleteId =(id)=>{
    const alldata =loadInfo()
    const datatoSplice = alldata.splice(3,3)
    const datatokeep =alldata.filter((obj)=>{
        return obj !== datatoSplice
    })
    saveData(datatokeep)
}
////////////////////////////////

// 3- to list fname & lname & city for all 
const listsForAll = ()=>{
    const alldata = loadInfo()
    alldata.forEach(obj => {
        console.log(obj.fname,obj.lname,obj.city,)
    });
}

// 4- to read all data for only the 5th person 
const personfive = ()=>{
    const alldata = loadInfo()
    const onlyfiveman =alldata.filter((obj)=>{
        return obj.id === 5 
    })
    console.log(onlyfiveman)
}

module.exports ={
    addcustomer,
    deleteId,
    listsForAll,
    personfive
}
// -------------------------
// ------------ the end 
// -------------------------
///////////////////////////////////////////////////////////