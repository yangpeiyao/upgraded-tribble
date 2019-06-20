export const fetchData = async () => {
    try {
      const response = await fetch("https://interview.adpeai.com/api/v1/get-task");
      const data = await response.json();
      return data;
    } catch (e) {
     
      console.log(e);
      
    }
  };