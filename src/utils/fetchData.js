import queryString from "query-string";

export const fetchData = async (query) => {
    const newsfeedUrlParams = '?' + queryString.stringify({
        q: query,
        apiKey: process.env.API_KEY
    });
    const newsfeedUrl = process.env.ENDPOINT;
    let responseData = {};
    try {
        let resp = await fetch(newsfeedUrl + newsfeedUrlParams);
        responseData = await resp.json();
    }
    catch (err) {
        console.log("Fetch Unsuccessful", err);
    }
    finally {
        return responseData;
    }
};
