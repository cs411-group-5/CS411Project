use CS411;

db.createcollection("users",{ capped : true, autoIndexId : true, size : 
   6142800, max : 10000 },{
   validator: { $jsonSchema: {
      bsonType: "object", 
      properties: {
          autoIndexId :{ 
              bsonType: "integer",
              description: " autoIndexId",
          },
          spotifyId :{
              bsonType: "String",
              description: "spotifyId access key",
          },
          FacebookId : {
              bsonType: "String",
              description: "FacebookId Access key",
          },
          longitude :{
              bsonType: "String",
              description: "longitude location data",
          },
          latitude:{
              bsonType: "String",
              description: "latitude location data",
          },
      }
   }
   }
   })

db.createcollection("Spotify",{
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            autoindexID:{
                bsonType: "integer",
                description: " UserID from user table",
            },
            spotifyId :{
                bsonType: "String",
                description: "spotify access key",
            },
            spotifyRefresh :{
                bsonType: "String",
                description: "spotify refresh key",
            },
            Tracks:{
                bsonType: "String",
                description: "users most listened to tracks"
            },
            Artists :{
                bsonType: "String",
                description: "users most listened to artists"
            }

        }
    }
}
}
)
db.createcollection("Facebook",{
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            autoindexID:{
                bsonType: "integer",
                description: " UserID from user table",
            },
            FacebookId:{
                bsonType: "String",
                description:"facebook access id"
            },
            FacebookRefresh:{
                bsonType: "String",
                description: " Facebook refresh key"
            },
        }}}}
    )
