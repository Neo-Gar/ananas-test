export const innFetch = async (query: string) => {
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_DADATA_URL}`,
        {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${process.env.NEXT_PUBLIC_DADATA_TOKEN}`
            },
            body: JSON.stringify({
                query: query,
                branch_type: "MAIN",
                count: 1,
                type: "LEGAL"
            })
        }
    )

    if (!response.ok) {
        console.error('Fetch error code:', response.status)
        return null
    }

    const data = await response.json()
    return data;
}