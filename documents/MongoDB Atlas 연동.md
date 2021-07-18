
### 🍃 MongoDB Atlas 연동  

<br/>

짧은 내용이지만 다른 항목들과 같이 쓰기엔 내용이 맞지 않아 따로 뺐다  
MongoDB를 설치하지 않고 Atlas 클라우드 서비스를 프리 티어로 이용했다  

<img width="1153" alt="스크린샷 2021-07-18 오후 11 00 21" src="https://user-images.githubusercontent.com/80666066/126070156-7a8fe3fa-7d87-427e-a912-4868159a327f.png">

<br/>

생성된 DB의 연결 URI을 서버단에 다음과 같이 설정해서 연결했으며,  
보안을 위해 git에는 포함시키지 않았다  

<br/>

```javascript
module.exports = {
    mongoURI: 'mongodb+srv://계정명:비밀번호@boilerplate.tq84y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}
```

<br/>

Mongoose 라이브러리를 이용해 유저 스키마를 생성하고,  
모델 객체의 함수를 이용해 데이터를 다뤘다  

<br/>

```javascript
//mongoose로 생성한 유저 스키마 
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
    //이하 생략 
})
```

<br/>

```javascript
//유저 정보를 저장하는 부분의 코드 
user.save(function(err, user){
  if(err) return cb(err);
  cb(null, user)
})
```

<br/>

```javascript
//유저 아이디를 이용해 유저를 찾는 부분의 코드 
 user.findOne({"_id": decoded, "token": token}, function(err, user){
  if(err) return cb(err);
  cb(null, user)
})
```

<br/>


