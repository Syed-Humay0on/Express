import  express  from 'express';
import axios from 'axios';
const app = express()
const port = 3000


app.get('/', async (req, res)=> {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const firstFivePosts = response.data.slice(0, 5);
    res.json(firstFivePosts);
  }
  catch{
    res.status(500).send('error fetching posts');
  }
});
// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then (response => {
//   const firstFivePosts = response.data.slice(0, 5);
//   console.log(firstFivePosts);
//   })
// .catch(error =>{
//     console.log('error');
//   });
//
app.listen(port, () =>{
  console.log(`server running on http://localhost:${port}`);
})
