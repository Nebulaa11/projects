async function fetchData()
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f4a14e7a39msha6b65f3193ad2b0p15dbc9jsnb9fee3a608ae',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=delhi&minDate=2023-02-07&maxDate=2023-02-24&page=1', options)
    const record = await res.json()

    console.log('record', record)
}
fetchData();