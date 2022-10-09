const baseUrl = process.env.NODE_ENV === "production" 
? 'https://api.sendgrid.com'
: 'http://fishcreekpark.homes';

export default baseUrl;