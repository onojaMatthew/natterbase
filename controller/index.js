const {}

exports.createData = (req, res) => {
    const { type, crux, color, title } = req.body;

    if (!type || !crux || !color || !title) return res.status(400).json({
        error: "Incomplete data. Please enter all required in put"
    });

    let data = new DataCue({
        type, crux, color, title
    });
    
    return data.save((err, data) => {
        if (err || !data) return res.status(400).json({
            error: `Could not create data ${err.message}`
        });
        return res.json(data);
    });
}

// this function deletes an object from the database
exports.deleteData = (req, res) => {
    const { type } = req.params;

    if (!type) return res.status(400).json({
        error: "Bad request. No param was provided"
    });
    Data.findOneAndRemove({ type })
       .then(data => {
           if (!data) return res.status(400).json({
               error: "Invalid params"
           });
           res.json(data);
       })
       .catch(err => {
           res.status(400).json({ error: err.message });
       });
}