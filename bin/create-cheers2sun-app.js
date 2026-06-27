#!/usr/bin/env node

try {
    require("../dist/cli/index.js");
} catch (error) {
    console.error("Failed to start create-cheers2sun-app.");
    console.error(error);
    process.exit(1);
}
