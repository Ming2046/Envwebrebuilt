const baseUrl = process.env.NODE_ENV === "production" 
? 'https://fishcreekpark.homes'
: 'http://fishcreekpark.homes';

export default baseUrl;