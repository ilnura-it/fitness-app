export const exerciseOptions = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key': 'cbe83abc80msh6534571ad0e40b4p153bebjsn38486569dd2d',
     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
 };

 export const youtubeOptions = {
  method: 'GET',
  params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
  headers: {
    'X-RapidAPI-Key': 'cbe83abc80msh6534571ad0e40b4p153bebjsn38486569dd2d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
   const response = await fetch(url, options);
   const data = await response.json()
   return data;
  ////console.log(data)
}