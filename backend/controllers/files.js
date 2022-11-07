import axios from 'axios'


function CSVToArray(strData, strDelimiter) {
    strDelimiter = (strDelimiter || ",");

    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    );

    var arrData = [[]];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(strData)) {
        var strMatchedDelimiter = arrMatches[1];
        if (
            strMatchedDelimiter.length &&
            (strMatchedDelimiter != strDelimiter)
        ) {
            arrData.push([]);
        }
        if (arrMatches[2]) {
            var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"),
                "\""
            );

        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }

    return (arrData);
}
async function getFiles(req, res) {
    let contenedor = []
    let contLineas = []
    let fileName 
    const config = {
        headers: { Authorization: `Bearer aSuperSecretKey` }
    };
    const { data } = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', config);
    const files = data.files;
    for (let file of files) {
        contLineas = [];
        try {

            const { data } = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, config);
            const dataParse = CSVToArray(data);
            for (let i = 1; i < dataParse.length; i++) {
                const element = dataParse[i];
                fileName = element[0]
                contLineas.push({
                    text: element[1] !== undefined ? element[1] : '',
                    number: element[2] !== undefined ? element[2] : '',
                    hex: element[3] !== undefined ? element[3] : ''
                })
            }
            if(contLineas.length > 0) contenedor.push({file: fileName,lines: contLineas })
            
            // console.log('________________________');
        } catch (error) {
            console.log(`el archivo ${file} no tiene data`)
        }
    }
    // console.log(contenedor)
    res.status(200).json(contenedor)
}


export const files = {
    getFiles
}