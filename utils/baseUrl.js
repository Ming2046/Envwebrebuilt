const baseUrl = process.env.NODE_ENV === "production" 
? 'https://fishcreekpark.homes'
: 'https://localhost:3000';

export default baseUrl;