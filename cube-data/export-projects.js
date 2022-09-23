var x = db.getCollection("project").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
                // enter query here
               "$expr":{"$ne":["$organs", []]}
            }
        },

        // Stage 2
        {
            $project: {
                // specifications
                project_short_name: '$content.project_core.project_short_name',
                totalCellCount:'$cellCount',
                estimatedCellCount:'$content.estimated_cell_count',
                organ_count: { $cond: { if: { $isArray: "$organ.ontologies" }, then: { $size: "$organ.ontologies" }, else: 0} },
                technology_count: { $cond: { if: { $isArray: "$technology.ontologies" }, then: { $size: "$technology.ontologies" }, else: 0} },
                primaryWrnagler:1,
                wranglingState:1,
                contentLastModified:1,
                isInCatalogue:1,
                authors: '$publicationsInfo.authors',    
            }
        },

        // Stage 3
        {
            $addFields: {
                // specifications
                    cellCount:
                        {$cond: {
            //                average the cell count between each organ-tech pair
                            if: {$ne: [0, {$multiply:['$organ_count', '$technology_count']}]},
                            then: {$divide: ['$totalCellCount',{$multiply:['$organ_count', '$technology_count']}]},
                            else: 0}},
                    x: {
                        $first: '$publicationsInfo.authors'
                    }
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);

printjson(x);