db.getCollection("project").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $unwind: {
                path: '$technology.ontologies',
                preserveNullAndEmptyArrays: false
            }
        },

        // Stage 2
        {
            $project: {
                _id:0,
                project_id: '$_id',
                project_short_name: '$content.project_core.project_short_name',
                ontology_label: '$technology.ontologies.ontology_label',
                ontology: '$tecnology.ontologies.ontology', 
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);