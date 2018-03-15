#!/usr/bin/env babel-node

import fs from "fs";
import path from "path";
import { printSchema } from "graphql";
import schema from "../data/schema";

const schemaPath = path.resolve(__dirname, "../data/schema.graphql");
fs.writeFileSync(schemaPath, printSchema(schema));

console.log("Wrote " + schemaPath);
