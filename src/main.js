const { generateCSV, downloadCSV } = require('./lipsum-csv');

document.getElementById('generate-button').addEventListener('click', function() {
    const headersInput = document.getElementById('headers').value;
    const typesInput = document.getElementById('types').value;
    const rowCount = parseInt(document.getElementById('rowCount').value);

    const headers = headersInput.split(',').map(h => h.trim());
    const dataTypes = typesInput.split(',').map(t => t.trim());

    if (headers.length !== dataTypes.length) {
        alert('Headers and data types must have the same number of elements!');
        return;
    }

    const csvContent = generateCSV(headers, rowCount, dataTypes);
    downloadCSV(csvContent);
});


function generateUserImportCsv() {
    const headersInput = "Employee ID,Active,Full Name,Nick Name,Username,Password,MD5 Password,User Type,Email,Language,Hire Date,Job Title,Department,Team,Line Of Business,Areas Of Interest,Suspended,Role Start Date,Access Type,Custom Access Group,Birth Year,Gender,Termination Date,Team Code,Managed Business Unit Codes,Manager Notifications Employee ID,Custom Access Teams,At Work Required,On the Clock Required";
    const typesInput = `"testUser",null,"test User","test User","testUser",null,null,"User","test@email.com",null,"2024-03-25","Reseller Sales",null,"Resellers",null,"Capability Group |Reseller Sales|Reseller Customer Support",null,null,null,null,null,null,null,null,null,null,null,null,`

    const rowCount = parseInt(document.getElementById('rowCount').value);

    const headers = headersInput.split(',').map(h => h.trim());
    const dataTypes = typesInput.split(',').map(t => t.trim());

    if (headers.length !== dataTypes.length) {
        alert('Headers and data types must have the same number of elements!');
        return;
    }

    const csvContent = generateCSV(headers, rowCount, dataTypes);
    downloadCSV(csvContent);
}


document.getElementById('generate-user-import-button').addEventListener('click', generateUserImportCsv);
