import React from "react";

export const LinkCard = ({link}) => {
    console.log(link);
    return (
    <>
    <h2>Ссылка</h2>
     <p>Ваша ссылка: <a href={link.to} target={"_blank"}  rel="noopener noreferrer">{link.to}</a></p>
     <p>Откуда: <a href={link.form} target={"_blank"}  rel="noopener noreferrer">{link.form}</a></p>
     <p>Количесвто кликов по ссылке: <strong>{link.clicks}</strong></p>
     <p>:Дата создания <strong>{new Date(link.date).toLocaleString()}</strong></p>
    </>
    )
};