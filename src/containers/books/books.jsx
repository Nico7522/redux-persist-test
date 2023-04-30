import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from 'axios'

export default function Books() {
    const queryClient = new QueryClient()
    const listBooks = []
    const { isLoading, error, data } = useQuery('getbooks', async () => 
      await axios.get('http://localhost:8080/api/book/').then(res => (res.data))
        
    )
    if (isLoading) {
        return <p>{isLoading}</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <>
        {data.results.map(b => (
            <p>{b.title}</p>
        ))}
        </>
    )
}