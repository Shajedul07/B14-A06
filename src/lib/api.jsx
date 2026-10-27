
export const getAllCards = async() =>{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    return res.json();
}
export const getSingleCard = async() =>{
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${Card.id}`);
    return res.json();
}