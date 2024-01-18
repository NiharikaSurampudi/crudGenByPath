import {
    PostFunc as PostFuncRepo,
    PostFromModalFunc as PostFromModalFuncRepo,
    PostUploadFunc as PostUploadFuncRepo,
    PostGetSelectColumnsFunc as PostGetSelectColumnsFuncRepo,
    PostUploadFromModalFunc as PostUploadFromModalFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

import {
    ColumnsPullFunc
} from '../../DataColumns.js';

import { ClassSample } from '../../ModalClass.js';

let PostFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalModalObject });
    res.json(LocalFromRepo);
};

let PostFromModalFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostFromModalFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let PostUploadFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalModalObject = LocalFromArray({ inArray: LocalBodyData });

    let LocalFromRepo = PostUploadFuncRepo({ LocalBodyAsModal: LocalModalObject });
    res.json(LocalFromRepo);
};

let LocalFromArray = ({ inArray }) => {
    let LocalNewAray = [];

    LocalNewAray = inArray.map(element => {
        return new ClassSample({ ...element });
    });

    return LocalNewAray;
};

let PostUploadFromModalFunc = (req, res) => {
    let LocalBodyData = req.body;

    let LocalFromRepo = PostUploadFromModalFuncRepo({ LocalBodyAsModal: LocalBodyData });
    res.json(LocalFromRepo);
};

let PostGetSelectColumnsFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostGetSelectColumnsFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
};