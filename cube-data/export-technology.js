db.getCollection("project").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $unwind: {
                path: '$organ.ontologies',
                preserveNullAndEmptyArrays: false
            }
        },

        // Stage 2
        {
            $project: {
                _id:0,
                project_id: '$_id',
                project_short_name: '$content.project_core.project_short_name',
                ontology_label: '$organ.ontologies.ontology_label',
                ontology: '$organ.ontologies.ontology', 
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);