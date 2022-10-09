const baseUrl = process.env.NODE_ENV === "production" 
? 'https://api.sendgrid.com'
: 'https://fishcreekpark.homes';

export default baseUrl;