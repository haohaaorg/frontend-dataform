
const getMonthName = (num: number) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
    return months[num];
  };
  
  export const formatDate = (d: any) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = getMonthName(date.getMonth());
    const day = ('0' + date.getDate()).slice(-2);
    // const hour = ('0' + date.getHours()).slice(-2);
    // const minutes = ('0' + date.getMinutes()).slice(-2);
  
    return `${month} ${day}, ${year}`;
  };