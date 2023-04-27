import { React, useState, useEffect } from "react";
import './Api.css';

const Api = () => {
    const [quote, setQuote] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const url = 'https://api.api-ninjas.com/v1/quotes?category=education'

    useEffect(() => {
        const getData = async() => {
            setLoading(true);
            try {
                const info = await fetch(url, {
                    method: 'GET',
                    headers: { 'X-Api-Key': 'noBnuNSk9Y7nMcGbfViJ4w==PWXKkcudBTJzUy1X' },
                })
                const finalInfo = await info.json();
                setQuote(finalInfo)
            } catch (error) {
                setError(true);
            }
            setLoading(false)
        }
        getData();
    }, [setQuote, setLoading])

    if (error) return <div>Site not responding at the moment!</div>

    if (loading) return <div className="wait-message">Please wait a moment...</div>

    return (
        <div className="quote-wrapper">
            {quote.map((item) => {
              return(
              <p key={item.author}>
                {item.author} -
                {' '}
                {item.quote}
              </p>
              )  
            })}
        </div>
    )
}

export default Api