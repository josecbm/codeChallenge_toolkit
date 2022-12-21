import express from 'express'
import axios from 'axios'
const router = express.Router()
const config = {
    headers: { Authorization: `Bearer aSuperSecretKey` }
};
router.get('/data', async (req, res) => {
    const { data } = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', config);
    const { fileName } = req.query;
    let contenedor = [];
    let contLineas = [];
    let fileNameRaw;
    let flagError = false;
    const files = data.files;

    if (fileName != undefined) {
        contLineas = [];
        try {
            const { data } = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`, config);
            const dataParse = CSVToArray(data);
            for (let i = 1; i < dataParse.length; i++) {
                const element = dataParse[i];
                fileNameRaw = element[0]
                contLineas.push({
                    text: element[1] !== undefined ? element[1] : '',
                    number: element[2] !== undefined ? element[2] : '',
                    hex: element[3] !== undefined ? element[3] : ''
                })
            }
            if (contLineas.length > 0) contenedor.push({ file: fileNameRaw, lines: contLineas })
        } catch (error) {
            console.log(`el archivo ${fileName} no tiene data`);
            flagError = true;
        }
    } else {
        for (let file of files) {
            contLineas = [];
            try {
                const { data } = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, config);
                const dataParse = CSVToArray(data);
                for (let i = 1; i < dataParse.length; i++) {
                    const element = dataParse[i];
                    fileNameRaw = element[0]
                    contLineas.push({
                        text: element[1] !== undefined ? element[1] : '',
                        number: element[2] !== undefined ? element[2] : '',
                        hex: element[3] !== undefined ? element[3] : ''
                    })
                }
                if (contLineas.length > 0) contenedor.push({ file: fileNameRaw, lines: contLineas })
            } catch (error) {
                console.log(`el archivo ${file} no tiene data`);
            }
        }
    }
    if(flagError) res.status(500).json(`el archivo ${fileName} no tiene data`)
    else res.status(200).json(contenedor)
})

const CSVToArray = (strData, strDelimiter) => {
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

export const echoRouter = router