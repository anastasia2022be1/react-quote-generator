import { useState, useEffect } from "react";

import './QuoteGenerator.css'

export default function RandomQuoteGenerator() {

    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState([]);

    useEffect(() => {
        fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
        .then(res => res.json())
        .then(data => {
            setQuotes(data.quotes)
        })
        .catch(err => {
            console.log(err);
            setQuotes([])
        })
    }, []);

    function getRandomQuote(quotesArr) {
        const randomIndex = Math.floor(Math.random() * quotesArr.length);
        setCurrentQuote(quotesArr[randomIndex]);
    }


    return (

        <div className="quote-container">
            <h1>My quote</h1>

            <p>{currentQuote.quote}</p>
            <p>{currentQuote.author}</p>

            <button onClick={() => getRandomQuote(quotes)}>New quote</button>
        </div>
    

    )
}