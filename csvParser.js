const fs = require("fs");
const csvParser = require("csv-parser");

const inputFile = "src/data/Level5.csv";

const jsonData = {};

fs.createReadStream(inputFile)
    .pipe(csvParser())
    .on("data", data => {
        // Iterate through each column (except the timestamp)
        for (const columnName in data) {
            if (columnName !== "Timestamp") {
                const value = data[columnName];
                if (!jsonData[columnName]) {
                    jsonData[columnName] = { Difficulty: [], Quality: [] };
                }
                if (value) {
                    jsonData[columnName]["Difficulty"].push(value);
                }
            }
        }
    })
    .on("end", () => {
        const parsedData = JSON.stringify(jsonData, null, 2);

        fs.writeFileSync("src/parsedData.json", parsedData);
        console.log("CSV data parsed and saved.");
    });
