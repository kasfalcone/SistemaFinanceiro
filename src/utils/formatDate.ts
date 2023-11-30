/* função de formatação de data */
const formatDate = (date: string): string => {

    const dateFormatted = new Date(date);
    const year = dateFormatted.getFullYear();
  
    const day = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
  
    // mês começa com 0 por isso adiciona o + 1 
    const month = dateFormatted.getMonth() + 1 > 9 ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1 }`;
  
    return `${day}/${month}/${year}`;
  };
  
  export default formatDate;
  