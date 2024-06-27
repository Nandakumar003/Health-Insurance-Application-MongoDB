export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:5000${route}`, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        return await response.json();
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
}