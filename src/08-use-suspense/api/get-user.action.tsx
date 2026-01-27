export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}
export const getUserAction = async (id:number)=>{
    console.log('called function component')
    await new Promise(resolve=>setTimeout(resolve,2000));
    console.log('resolved function')
    return {
        id:id,
        name: 'Fabio Fernandez',
        location:'Colcapirhua, Cochabamba',
        role: 'software engineer'
    }
}