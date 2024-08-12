function generateCSV(headers, rowCount, dataTypes) {
  const rows = [];

  // Add headers to the first row
  rows.push(headers.join(','));

  for (let i = 0; i < rowCount; i++) {
      const row = headers.map((header, index) => {
          return generateData(dataTypes[index]);
      });
      rows.push(row.join(','));
  }

  return rows.join('\n');
}

function generateData(type) {
  if (isQuotedString(type)) {
      return extractQuotedString(type);
  }

  switch (type.trim()) {
      case 'string':
          return generateRandomString();
      case 'number':
          return generateRandomNumber();
      case 'boolean':
          return generateRandomBoolean();
      case 'null':
          return '';
      default:
          return '';
  }
}

function isQuotedString(type) {
  return type.startsWith('"') && type.endsWith('"');
}

function extractQuotedString(type) {
  return type.slice(1, -1); // Removes the leading and trailing quotes
}

function generateRandomString() {
  return Math.random().toString(36).substring(2, 10);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function generateRandomBoolean() {
  return Math.random() < 0.5;
}

function downloadCSV(content, filename = 'data.csv') {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

module.exports = {
  generateCSV,
  downloadCSV,
};

// Example usage:
const headers = ['Name', 'Age', 'IsStudent', 'Comment'];
const dataTypes = ['string', 'number', 'boolean', 'null'];
const rowCount = 10;

const csvContent = generateCSV(headers, rowCount, dataTypes);
downloadCSV(csvContent);

