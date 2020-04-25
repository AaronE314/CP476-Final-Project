const isProd = (process.env.NODE_ENV || 'production') === 'production'

export const URLString = (process.env.NODE_ENV || 'production') === 'production'
? "https://cp476groupproject.herokuapp.com" : "http://localhost:3000"; 