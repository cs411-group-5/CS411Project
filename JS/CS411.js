db.createCollection("users",{ capped : true, autoIndexId : true, size : 
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
          latitude:{
            bsonType: "Double",
            description: "latitude location data",
        },
          longitude :{
              bsonType: "Double",
              description: "longitude location data",
          },
      }
   }
   }
   })

db.createCollection("spotify",{capped : true, autoIndexId : true, size : 
    6142800, max : 10000 },{
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
            },
            Genres : {
                bsonType: "String",
                description: "genres"
            }
        }}}})

