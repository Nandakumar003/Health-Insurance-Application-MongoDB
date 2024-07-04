export async function fetchData(route = '', data = {}, methodType) {
    const url = `http://localhost:5000${route}`
    const options = {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
    }
    if (methodType !== 'GET') {
        options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    if (response.ok) {
        return await response.json();
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
}