export const getDate = function() {
    
    const date = new Date();
    const years = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    
    const monthText = month.padStart(2, "0");
    const dayText = day.padStart(2,"0");

    const yearMonthDay = years + monthText + dayText
    return yearMonthDay 
}

