const excelJS = require('exceljs')
const workbook1 = new excelJS.Workbook()
workbook1.xlsx.readFile("C:/Playwright automation Manasa/Manasa.xlsx")
    .then(() => {
        const worksheet = workbook1.getWorksheet("Man")
        worksheet.eachRow((row, rowNumber) =>
        {
            row.eachCell((cell, colNumber) =>
            {
                if (cell.value === "mans")
                {
                    console.log("coords are " + rowNumber, colNumber)
                    cell.value = "renamed"
                    workbook1.xlsx.writeFile("C:/Playwright automation Manasa/Manasa.xlsx")
                }
            })

        })

    console.log("manasa")
})
//const worksheet = workbook1.getWorksheet("Manasa")

/*const ExcelJS = require('exceljs');

async function alternateThen() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('C:/Playwright automation Manasa/Manasa.xlsx')
    const worksheet = workbook.getWorksheet("Man")
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            console.log(cell.value)
        })

    })
        console.log('Excel file opened successfully!');
}

alternateThen()*/
    
