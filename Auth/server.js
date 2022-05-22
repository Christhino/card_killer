const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./database.json')
const userdb = JSON.parse(fs.readFileSync('./data.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());
/**
 * Signature
 * HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
 * 
 */
const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Creation token
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}
/**
 * playload{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
} */
// Verification  token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Verification user login
function isAuthenticated({email,username ,password}){
  return userdb.users.findIndex(user => user.username === username && user.email === email && user.password === password) !== -1
}

// Creation user login
server.post('/auth/register', (req, res) => {
  console.log("register endpoint ; requete body:");
  console.log(req.body);
  const {email, password,username} = req.body;

  if(isAuthenticated({email,username, password}) === true) {
    const status = 401;
    const message = 'User existe deja';
    res.status(status).json({status, message});
    return
  }

fs.readFile("./data.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    };

    // Get  users login
    var data = JSON.parse(data.toString());

    // Get dernier  id connecter
    var der_id = data.users[data.users.length-1].id;

    //Get nouveau user login
    data.users.push({id: der_id + 1, username: username ,email: email, password: password}); 
    var wData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({status, message})
          return
        }
    });
});

// Creation nouveau token pour le nouveau user
  const access_token = createToken({email, username, password})
  console.log("Access Token:" + access_token);
  res.status(200).json({access_token})
})

// Login
server.post('/auth/login', (req, res) => {
  console.log("login endpoint ; requete body:");
  console.log(req.body);
  const {email, password,username} = req.body;
  if (isAuthenticated({email, password,username}) === false) {
    const status = 401
    const message = 'Mot de passe incorect ou bien nom d`utilisateur errone'
    res.status(status).json({status, message})
    return
  }
  const access_token = createToken({email, password,username})
  console.log("Access Token:" + access_token);
  res.status(200).json({access_token})
})

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Erreur d`authorization'
    res.status(status).json({status, message})
    return
  }
  try {
    let verifyTokenResult;
     verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

     if (verifyTokenResult instanceof Error) {
       const status = 401
       const message = 'Access token erroner'
       res.status(status).json({status, message})
       return
     }
     next()
  } catch (err) {
    const status = 401
    const message = 'Acces token annuler'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(8080, () => {
  console.log('Run Auth API Server')
})

/**
  const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};
test
 */