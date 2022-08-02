const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data,
    });
    // response.text() – читает ответ и возвращает как обычный текст 
    // response.json() – декодирует ответ в формате JSON
    return await res.json();
};

export { postData };