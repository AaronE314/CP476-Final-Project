

const headers = (req, res, next) => {

    console.log("headers");

    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Accept, Content-Type, Authorization"
    });

    // // Allow Origins
    // res.header("Access-Control-Allow-Origin", "*");
    // console.log("headers1");
    // // Allow Methods
    // res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // console.log("headers2");
    // // Allow Headers
    // res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization");
    // console.log("headers3");
    // Handle preflight, it must return 200
    if (req.method === "OPTIONS") {
        // Stop the middleware chain
        return res.status(200).end();
    }
    console.log("headers4");
    // Next middleware 
    next();

}

export default headers;