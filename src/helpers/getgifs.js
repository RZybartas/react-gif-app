export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=CJGoLjxWHtXcA0Xkw04Jtk7zqZWjc4pG`
    const res = await fetch( url );
    const {data} = await res.json();
    
    const gifs = data.map( img => {
        return {
        id: img.id,
        title: img.title,
        url: img.images.original.url,
        }
    })
    
    return gifs;
    }
