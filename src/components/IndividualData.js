import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.titulo}</th>
            <th>{individualData.contenido}</th>
            <th>{individualData.fechaPublicacion}</th>
            <th>{individualData.autor}</th>
        </tr>
    )
}