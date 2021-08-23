

export const getGifs = async(category)=>{
    const maxIMG = 10;
    const url=`https://api.giphy.com/v1/gifs/search?limit=${maxIMG}&q=${encodeURI(category)}&api_key=oOshRJG6CqJ9EDinaoqirm6367kGQAIJ`;
    const resp = await fetch (url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return  {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,

        }
    })
    return gifs;
    
}