const fs = require("fs");
const csvParser = require("csv-parser");

const files = ["src/data/Level5.csv", "src/data/Level5.csv", "src/data/Level5.csv"];

const jsonData = {};

// Function to push a value to the jsonData object
const pushValueToData = (module, category, value) => {
    // Initialize the module and category if not present
    if (!jsonData[module]) {
        jsonData[module] = {};
    }

    if (!jsonData[module][category]) {
        jsonData[module][category] = [];
    }

    // Push the value to the appropriate category and module
    jsonData[module][category].push(value);
};

// Function to process a CSV file
const processFile = file => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(file)
            .pipe(csvParser())
            .on("data", data => {
                // Iterate through each column (except the timestamp)
                for (const columnName in data) {
                    // Iterate through each column (except the timestamp)
                    if (columnName !== "Timestamp") {
                        const regex = /^(\w+)\s*\[(.*?)\]$/;
                        const matches = columnName.match(regex);

                        if (matches) {
                            const category = matches[1];
                            const module = matches[2];

                            const value = data[columnName];
                            if (value) {
                                // Push the value to the jsonData object
                                pushValueToData(module, category, value);
                            }
                        }
                    }
                }
            })
            .on("end", () => {
                console.log(`CSV data from ${file} parsed.`);
                resolve();
            })
            .on("error", error => {
                reject(error);
            });
    });
};

Promise.all(files.map(file => processFile(file)))
    .then(() => {
        const finalParsedData = JSON.stringify(jsonData, null, 2);
        fs.writeFileSync("src/parsedData.json", finalParsedData);
        console.log("Merged and combined data saved to parsedData.json.");
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
