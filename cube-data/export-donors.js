db.getCollection("biomaterial").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
                'content.describedBy' : {
                    $regex : /donor_organism/,
                }
            }
        },

        // Stage 2
        {
            $project: {
                _id:0,
                donor_id: '$_id',
                project_íd: '$project',
                sex: '$content.sex',
                is_living: '$content.is_living',
                
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);