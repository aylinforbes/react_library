const token = "Bearer d0f4654c79ed95b66ab4472899a45242296e81083242be7b"

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://library-app-urrd.onrender.com/api/books`,
        {
            method: 'GET',
            //mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': token
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

create: async (data: any = {}) => {
    const response = await fetch(`https://library-app-urrd.onrender.com/api/books`,
    {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': token
        }

    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
},

update: async (id: string, data:any = {}) => {
    const response = await fetch(`https://library-app-urrd.onrender.com/api/books/${id}`,
    {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': token
        }

    })

    if (!response.ok) {
        throw new Error('Failed to update data on the server')
    }

    return await response.json()
},

delete: async (id: string) => {
    const response = await fetch(`https://library-app-urrd.onrender.com/api/books/${id}`,
    {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': token
        }
        

    })

    if (!response.ok) {
        throw new Error('Failed to delete data from the server')
    }

    return;
},
}

  