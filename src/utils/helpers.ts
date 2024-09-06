export const capitalizeFirstLetter= (string: string) => {
  if (!string) return ""; 

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const formatDate = (date: Date | string | undefined | null) => {
  if (!date) return "";
  const d = new Date(date);

  const day: string = String(d.getDate()).padStart(2, "0");
  const month: string = String(d.getMonth() + 1).padStart(2, "0");
  const year: number = d.getFullYear();

  const hours: string = String(d.getHours()).padStart(2, "0");
  const minutes: string = String(d.getMinutes()).padStart(2, "0");
  const seconds: string = String(d.getSeconds()).padStart(2, "0");

  
  const formattedDay = (day.length < 2 ? "0" : "") + day.slice(-2);
  const formattedMonth = (month.length < 2 ? "0" : "") + month.slice(-2);
  const formattedHours = (hours.length < 2 ? "0" : "") + hours.slice(-2);
  const formattedMinutes = (minutes.length < 2 ? "0" : "") + minutes.slice(-2);
  const formattedSeconds = (seconds.length < 2 ? "0" : "") + seconds.slice(-2);

  return `${formattedDay}/${formattedMonth}/${year} в ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};




