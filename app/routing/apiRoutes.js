// THIS IS FOR THINGS THAT RETURN JSON

module.exports = function(app) {
    app.get("#"), function(req, res) {
        //whatever
    }

    app.get()

    app.post()
}

// we export a function def that takes in app, because we need to use the SAME APP VAR that
// exists in the other file. If we linked express and defined app here, the name would be
// the same, but it would be a different var

// We can use this 1 function to pass all the gets and posts and whatever