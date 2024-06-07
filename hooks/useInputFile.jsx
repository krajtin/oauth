/*===================================================================================
=   Fichero: useInputFile.js                                                   =
=   Hook: useInputFile                                                   =
=   Descripción: Hook para validar los requisitos de un fichero
=   Fecha: Agosto 2023                                                             =
=   Dev: Daniel Fernández                                                              =
=   Versión: 1.0                                                                    =
=====================================================================================*/
import { useState, useRef } from "react";
import { isValSize, isCorrectType } from "../components/common/Validations";
import { getTypeFile } from "../components/common/Utils";
import { MAX_SIZE_IMG, MAX_SIZE_PDF, MAX_SIZE_VIDEO, TYPE_FILE } from "../components/common/Global";

const useInputFile = (avalTypes, id = null) => {

    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const _id = useRef(id); //Para la edición
    const isOkSize = useRef(true);
    const isOkType = useRef(true);
    const SIZES = {
        [TYPE_FILE.IMAGEN.value]: MAX_SIZE_IMG,
        [TYPE_FILE.EXTERNA.value]: 0,
        [TYPE_FILE.PDF.value]: MAX_SIZE_PDF,
        [TYPE_FILE.VIDEO.value]: MAX_SIZE_VIDEO,
    }
    const handleChange = (event) => {
        if (!event.target.files || event.target.files.length == 0)
            return;

        const selectedFile = event.target.files[0];
        isOkSize.current = isValidationSize(selectedFile.size);
        isOkType.current = isValdationType(getTypeFile(selectedFile.name));
        setFile(selectedFile);
        setName(selectedFile.name);
    };

    const isValidationSize = (size) => {
        for (let i = 0; i < avalTypes.length; i++) {
            const _type = avalTypes[i];
            if (!isValSize(size, SIZES[_type]))
                return false;

        }
        return true;
    }

    const isValdationType = (type) => {
        return isCorrectType(avalTypes, type);
    }

    return {
        file,
        name: name,
        isOkSize: isOkSize.current,
        isOkType: isOkType.current,
        _id: _id.current,
        handleChange,
    };
};

export default useInputFile;