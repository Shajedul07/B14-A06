
export const getAllCards = async() =>{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    return res.json();
}
export const getSingleCard = async(id) =>{
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
    return res.json();
}