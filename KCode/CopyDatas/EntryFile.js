import fs from 'fs';
// import ToConfigJson from '../../srcByPath/ToConfig.json' assert { type: 'json' };
import ToConfigJson from '../../src/ToConfig.json' assert { type: 'json' };

let StartFunc = ({ inFromFolderName }) => {
    let LocalFromFolderName = inFromFolderName;
    fs.cpSync(`${LocalFromFolderName}`, ToConfigJson.JsonPath, { recursive: true });
};

export { StartFunc };