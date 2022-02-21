cube(`Project`, {
  sql: `SELECT * FROM ingest.project`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [projectShortName]
    },
    
    cellCount: {
      sql: `cell_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    organ1: {
      sql: `organ1`,
      type: `string`
    },
    
    organ2: {
      sql: `organ2`,
      type: `string`
    },
    
    organ3: {
      sql: `organ3`,
      type: `string`
    },
    
    organ4: {
      sql: `organ4`,
      type: `string`
    },
    
    projectShortName: {
      sql: `project_short_name`,
      type: `string`
    },
    wranglingState: {
      sql: `wranglingState`,
      type: `string`
    },

    cataloguedDate: {
      sql: `cataloguedDate`,
      type: 'time'
    },
    contentLastModified: {
      sql: `contentLastModified`,
      type: 'time'
    },
    submissionDate: {
      sql: `submissionDate`,
      type: 'time'
    },
    updateDate: {
      sql: `updateDate`,
      type: 'time'
    },
    isInCatalogue: {
      sql: `isInCatalogue`,
      type: 'boolean'
    }
  },
  
  segments: {
    isInCatalogue: {
      sql: `${CUBE}.isInCatalogue = true`
    },
  },
  dataSource: `default`
});
