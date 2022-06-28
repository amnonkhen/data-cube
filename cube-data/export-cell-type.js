db.getCollection("biomaterial").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
                'content.describedBy': { $regex : /cell_line/ },
                'content.cell_type.ontology_label': {$exists:1}
            }
        },

        // Stage 2
        {
            $project: {
                _id:0,    
                ontology: '$content.cell_type.ontology',
                ontology_label: '$content.cell_type.ontology_label',
                project_id: '$project.$id'
            }
        },

        // Stage 3
        {
            $group: {
                _id: {
                    ontology:'$ontology',
                    ontology_label:'$ontology_label',
                    project_id:'$project_id',        
                }
            }
        },

        // Stage 4
        {
            $project: {
                _id:0,
                ontology : '$_id.ontology',
                ontology_label : '$_id.ontology_label',
                project_id : '$_id.project_id',
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);