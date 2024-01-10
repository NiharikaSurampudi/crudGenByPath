import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/{{ksSample}}readFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from '../../kLowDb/{{ksSample}}writeFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from '../../kLowDb/{{ksSample}}writeFileFromModal.js';
import { StartFunc as StartFuncImportToFile } from '../../kLowDb/{{ksSample}}ImportToFile.js';
import { StartFunc as StartFuncUploadToFile } from '../../kLowDb/{{ksSample}}UploadToFile.js';


let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return StartFuncwriteFile({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return StartFuncImportToFile({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncUploadToFile({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return StartFuncReadFileFromModal();
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
};