
### ๐ MongoDB Atlas ์ฐ๋  

<br/>

์งง์ ๋ด์ฉ์ด์ง๋ง ๋ค๋ฅธ ํญ๋ชฉ๋ค๊ณผ ๊ฐ์ด ์ฐ๊ธฐ์ ๋ด์ฉ์ด ๋ง์ง ์์ ๋ฐ๋ก ๋บ๋ค  
MongoDB๋ฅผ ์ค์นํ์ง ์๊ณ  Atlas ํด๋ผ์ฐ๋ ์๋น์ค๋ฅผ ํ๋ฆฌ ํฐ์ด๋ก ์ด์ฉํ๋ค  

<img width="1153" alt="แแณแแณแแตแซแแฃแบ 2021-07-18 แแฉแแฎ 11 00 21" src="https://user-images.githubusercontent.com/80666066/126070156-7a8fe3fa-7d87-427e-a912-4868159a327f.png">

<br/>

์์ฑ๋ DB์ ์ฐ๊ฒฐ URI์ ์๋ฒ๋จ์ ๋ค์๊ณผ ๊ฐ์ด ์ค์ ํด์ ์ฐ๊ฒฐํ์ผ๋ฉฐ,  
๋ณด์์ ์ํด git์๋ ํฌํจ์ํค์ง ์์๋ค  

<br/>

```javascript
module.exports = {
    mongoURI: 'mongodb+srv://๊ณ์ ๋ช:๋น๋ฐ๋ฒํธ@boilerplate.tq84y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}
```

<br/>

Mongoose ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํด ์ ์  ์คํค๋ง๋ฅผ ์์ฑํ๊ณ ,  
๋ชจ๋ธ ๊ฐ์ฒด์ ํจ์๋ฅผ ์ด์ฉํด ๋ฐ์ดํฐ๋ฅผ ๋ค๋ค๋ค  

<br/>

```javascript
//mongoose๋ก ์์ฑํ ์ ์  ์คํค๋ง 
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    }
    //์ดํ ์๋ต 
})
```

<br/>

```javascript
//์ ์  ์ ๋ณด๋ฅผ ์ ์ฅํ๋ ๋ถ๋ถ์ ์ฝ๋ 
user.save(function(err, user){
  if(err) return cb(err);
  cb(null, user)
})
```

<br/>

```javascript
//์ ์  ์์ด๋๋ฅผ ์ด์ฉํด ์ ์ ๋ฅผ ์ฐพ๋ ๋ถ๋ถ์ ์ฝ๋ 
 user.findOne({"_id": decoded, "token": token}, function(err, user){
  if(err) return cb(err);
  cb(null, user)
})
```

<br/>


