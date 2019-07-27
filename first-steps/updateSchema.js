#!/usr/bin/env node
// This file will print a human readable graphql schema
const fs = require('fs');
const path = require('path');
const {schema} = require('./graphql_backend/javascript_schema');
const {printSchema} = require('graphql');

const schemaPath = path.resolve(__dirname, 'schema.graphql');

fs.writeFileSync(schemaPath, `
# this file was autogenerated by updateSchema.js
# yarn update:schema

${printSchema(schema)}
`);

console.log('Wrote schema to: ' + schemaPath);
