export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://library-app-urrd.onrender.com/api/books`,
        {
            method: 'GET',
            mode: 'no-cors'
            
      

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
        mode: 'no-cors',
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
},

update: async (id: string, data:any = {}) => {
    const response = await fetch(`https://library-app-urrd.onrender.com/api/books${id}`,
    {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)

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
        mode: 'no-cors'
        

    })

    if (!response.ok) {
        throw new Error('Failed to delete data from the server')
    }

    return;
},
}