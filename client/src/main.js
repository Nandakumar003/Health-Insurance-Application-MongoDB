import { response } from "express";
export async function fetchData(route = '', data = {}, methodType) {
    const repsonse = await fetch(`http://localhost:5000${route}`, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        return await repsonse.json();
    } else {
        throw response.json();
    }
}