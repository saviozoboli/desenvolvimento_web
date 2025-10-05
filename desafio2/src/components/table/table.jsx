import React from "react";
import './table.css'

const Table = (dados)=>{
    dados = dados.dados
    return (
        <table cellSpacing={0}>
            <thead>
                <tr>
                    {dados.cabecalho.map((coluna,index)=>{
                        return(<th key={index}>{coluna}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {dados.linhas.map((linha,i)=>{
                    return(
                        <tr className="tableRow" key={i}>
                            {linha.map((valor,j)=>{
                                return(<td key={j}>{valor}</td>)
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;