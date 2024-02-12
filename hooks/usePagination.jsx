/*===================================================================================
=   Fichero: usePagination.js                                                   =
=   Hook: usePagination                                                   =
=   Descripción: Hook para controllar la paginación  =
=   Fecha: Febrero 2022                                                             =
=   Dev: Daniel Fernández                                                              =
=   Versión: 1.0                                                                    =
=====================================================================================*/

import { useState, useEffect, useContext, useRef } from "react";
import { isEmpty, isValStatus } from '../components/common/Validations';
import useUnMount from "./useUnmount";
import { beforeConfirm } from "../components/common/Alerts";

const usePagination = ({
    apiList,
    apiDelete,
    filter,
    order = "name",
    storedPrevius = false,
    ipp: _ipp,
}) => {

    let isMounted = true;
    const canCallList = useRef(true);
    const listRef = useRef([]);

    const [state, setState] = useState({
        list: [],
        total: 0
    });
    const [ipp, setIPP] = useState(_ipp);
    const [dir, setDir] = useState("asc");
    const [orderBy, setOrderby] = useState(order);
    const [pageIndex, setPageIndex] = useState(0);
    const [rowsPerPageOptions] = useState([ipp, 10, 50, 100]); //Opciones de elementos a mostrar

    const handleChangePage = (event, numPage) => {
        getList({ cp: numPage + 1, ipp: ipp, dir: dir, order: orderBy, filter: filter });
        setPageIndex(numPage);
    };

    const handleChangeRowsPerPage = (event) => {
        canCallList.current = true;
        getList({ cp: 1, ipp: event.target.value, dir: dir, order: orderBy, filter: filter });
        setIPP(event.target.value);
        setPageIndex(0);
    };

    //Borra un elemento del listado
    const onDeleteItem = async (event, _id, showConfirm = false) => {
        event.stopPropagation();
        var isConfirmed = true;
        //Si se quiere enviar ventana de confirmiación
        if (showConfirm) {
            const resConfirm = await beforeConfirm('warning', "¿Seguro que quiere borrar el registro?", "", "¡Sí, adelante!");

            isConfirmed = resConfirm.value;
        }

        if (isConfirmed) {

            var res = await apiDelete(_id);
            if (isValStatus(res.status)) {
                let list = state.list;
                var newList = list.filter((item) => item._id !== _id);
                setPageIndex(0);
                setState({ total: newList.length, list: newList });
            }
        }
    }

    const selectAllItems = (bool) => {
        let list = listRef.current.map((item) => {
            return {
                ...item,
                checked: bool
            }
        });
        listRef.current = list;
        setState({ total: state.total, list: list });
    }

    const selectOneItem = (_id, bool) => {
        //Buscar el item
        for (let i = 0; i < listRef.current.length; i++) {
            const element = listRef.current[i];
            if (element._id == _id) {
                listRef.current[i].checked = bool;
                break;
            }

        }
        setState({ total: state.total, list: listRef.current });
    }

    const onPressHeaderTable = (fieldName) => {
        if (isEmpty(orderBy) || isEmpty(dir))
            return;

        canCallList.current = true;
        if (fieldName == orderBy) {
            let newDir;
            if (dir == 'asc') {
                newDir = 'desc';
                setDir(newDir);
            }
            else {
                newDir = 'asc';
                setDir(newDir);
            }
            getList({ cp: 1, ipp: ipp, dir: newDir, order: orderBy, filter: filter });
        } else {
            let newDir;
            setOrderby(fieldName);
            setDir(newDir);
            setDir('asc');
            getList({ cp: 1, ipp: ipp, dir: newDir, order: fieldName, filter: filter });
        }
    }

    const getList = ({ cp, ipp, dir, order, filter }) => {

        if (!canCallList.current)
            return;

        //Número de index página del paginator
        setPageIndex(cp - 1);
        //Obtener el listado
        (async () => {
            const res = await apiList({ cp: cp, ipp: ipp, dir: dir, order: order, advancedSearch: filter });
            if (isValStatus(res.status) && isMounted) {
                var { total, list: newItems } = res.data;
                if (total - newItems.length <= 0 && storedPrevius) {
                    canCallList.current = false;
                }
                if (storedPrevius && cp > 1) {
                    listRef.current = [...listRef.current, ...newItems];
                }
                else {
                    listRef.current = newItems;
                }
                setState({ total, list: listRef.current });
            }
        })();
    }

    useEffect(() => {

        canCallList.current = true;
        getList({ cp: 1, ipp: ipp, dir: dir, order: orderBy, filter: filter });

    }, [filter]);

    useUnMount(() => {
        isMounted = false;
    });

    return {
        list: state.list,
        pagTotalItems: state.total,
        orderBy,
        dir,
        ipp,
        pageIndex,
        rowsPerPageOptions,
        handleChangePage,
        handleChangeRowsPerPage,
        onDeleteItem,
        selectAllItems,
        selectOneItem,
        onPressHeaderTable
    };
};

export default usePagination;
