const isProd = (process.env.NODE_ENV || 'production') === 'production'

export const URLString = (process.env.NODE_ENV || 'production') === 'production'
? "https://aarone314.github.io/CP476-Final-Project/" : "http://localhost:3000"; 