import { useCallback  , useEffect, useState } from "react"

export const useFetch = (url) => { 

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState('')

    const fetchData = useCallback(async () => {
        console.log('Ocurre el fectch....')
        setLoading(true)
        try {
          const res = await fetch(url)    
          const data = await res.json()

          if(!res.ok) throw Error('Error al consumir la api')
          setData(data)

        } catch (error) {
            setError (error.message)            
            setData([])
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        console.log("ejecutado: useEffect")
         fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
     
    return {
        data,
        error,
        loading        
    }
}

