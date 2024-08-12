# CSV Generator JavaScript Program

This JavaScript program dynamically generates a CSV file of any specified size. It allows users to define custom headers and data types for each column, producing random data accordingly. The generated CSV can then be downloaded directly to the user's machine.

## Features

- **Customizable Headers**: Define your own headers for the CSV file.
- **Dynamic Data Generation**: Generate random data for each column based on the specified data type (`string`, `number`, `boolean`, or `null`).
- **Scalable**: Generate a CSV file with any number of rows.
- **CSV Download**: Automatically prompts the user to download the generated CSV file.

## Getting Started

### Prerequisites

- A modern web browser that supports JavaScript.

### Usage

1. **Define Headers and Data Types:**
   Customize the headers and data types in the `headers` and `dataTypes` arrays respectively.

   ```javascript
   const headers = ['Name', 'Age', 'IsStudent', 'Comment'];
   const dataTypes = ['string', 'number', 'boolean', 'null'];
   ```

   - `headers`: An array of strings representing the column names in the CSV.
   - `dataTypes`: An array of strings specifying the data type for each corresponding column in the `headers` array. Possible values:
     - `'string'` - Random string data
     - `'number'` - Random number data
     - `'boolean'` - Random boolean data (`true` or `false`)
     - `'null'` - Empty cell in the CSV
     - `"Any String"` - Double quoted strings will print exactly whats between them for all rows

2. **Set Row Count:**
   Define the number of rows you want in your CSV file by setting the `rowCount` variable.

   ```javascript
   const rowCount = 10;
   ```

3. **Generate and Download CSV:**
   Call the `generateCSV` function with the defined `headers`, `rowCount`, and `dataTypes` arrays. The `downloadCSV` function will trigger the download of the generated CSV file.

   ```javascript
   const csvContent = generateCSV(headers, rowCount, dataTypes);
   downloadCSV(csvContent);
   ```

### Example

Here is an example that generates a CSV file with 10 rows, where:
- The first column (`Name`) contains random strings.
- The second column (`Age`) contains random numbers.
- The third column (`IsStudent`) contains random boolean values.
- The fourth column (`Comment`) is left empty.

```javascript
const headers = ['Name', 'Age', 'IsStudent', 'Comment'];
const dataTypes = ['string', 'number', 'boolean', 'null'];
const rowCount = 10;

const csvContent = generateCSV(headers, rowCount, dataTypes);
downloadCSV(csvContent);
```

## How It Works

You can use the simple frontend by running `npm run build` and opening the index.html

## Author

Brian Best
