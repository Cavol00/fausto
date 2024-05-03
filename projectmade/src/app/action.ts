export const fetchAPI = async () => {
    const res = await fetch('http://localhost:1337/api/schools');
    const {data} = await res.json();
    return data;
  } 