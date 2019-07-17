const fetchData = async url => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // fetch api does not throw 404 errors by default
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default fetchData;
  