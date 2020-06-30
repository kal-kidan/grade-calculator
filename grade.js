function calculate(arr) {
    let total = 0; 
    let totalCreditHour=0;
    for (let i=0;i<arr.length;i++) {
        totalCreditHour+=arr[i].creditHour;
    }
    for (let i=0;i<arr.length;i++) {
        e=arr[i]; 
        if (e.grade.toUpperCase() == "A") {
            total+=e.creditHour*4;
        } 
        else if (e.grade.toUpperCase() == "A+") {
            total+=e.creditHour*4;
        } 
        else if (e.grade.toUpperCase() == "A-") {
            total+=e.creditHour*3.7;
        }
        else if (e.grade.toUpperCase() == "B") {
            total+=e.creditHour*3;
        } 
        else if (e.grade.toUpperCase() == "B+") {
            total+=e.creditHour*3.5;
        }
        else if (e.grade.toUpperCase() == "B-") {
            total+=e.creditHour*2.7;
        } 
        else if (e.grade.toUpperCase() == "C") {
            total+=e.creditHour*2;
        }
        else if (e.grade.toUpperCase() == "C-") {
            total+=e.creditHour*1.7;
        } 
        else if (e.grade.toUpperCase() == "C+") {
            total+=e.creditHour*2.5;
        }
        else if (e.grade.toUpperCase() == "D") {
            total+=e.creditHour*1;
        } 
        else if (e.grade.toUpperCase() == "F") {
            total+=e.creditHour*0;
        }
    }
    return total/totalCreditHour;
}
 async function calculateFromDb (databaseName, tableName,columnName,gradeId,callback){
     let returnedValue;
    const {MongoClient, ObjectId}= require('mongodb');
    MongoClient.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },async (err, client)=>{
      if(err){
        return "unable to connect to the database";
      }
      db=client.db(databaseName);
      var collection=db.collection(tableName);
      var myPromise = () => {
        return new Promise((resolve, reject) => {
            db.
         collection(tableName)
           .find(new ObjectId(gradeId))
           .limit(1)
           .toArray(function(err, data) {
              err 
                 ? reject(err) 
                 : resolve(data[0]);
            });
        });
       
        }
        var grade = await myPromise();
        var res = calculate(grade[columnName]);
        callback(res);
     
    }
 
    );
  
   
 }


 
module.exports={calculate,calculateFromDb};