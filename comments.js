// Create web server
// HTTP method: POST
// Request: { "comment": "string", "id": "string" }
// Response: { "id": "string", "comment": "string" }
app.post('/comment', function (req, res) {
  var id = req.body.id;
  var comment = req.body.comment;

  var response = {
    "id": id,
    "comment": comment
  };

  res.send(response);
});