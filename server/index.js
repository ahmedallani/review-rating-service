const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;
var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11001',
  headers: { 
    'Authorization': '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'
  }
};
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.get("/api", async (req,res)=>{
try {
  let response= await axios(config);
  console.log(response.data)
  res.send(response.data)
} catch (error) {
  res.send(error)
}
}
)
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
