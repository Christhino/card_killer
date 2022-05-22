import React, { useState, useContext } from 'react';
import {users as data}  from '../data'
const authContext = React.createContext();

export function useAuth() {
  return useContext(authContext)
}


export default function AuthProvider({children}) {

  const [user,setUser] = useState()
  const [users,setUsers] = useState(data)

  function signin (username,email, password){

      
      console.log('logged')
      
      const foundUser = users.filter((user) => user.username === username && user.email === email && user.password === password )
      if (foundUser.length)
       setUser(foundUser[0])
      else
       throw new Error('Wrong username or email or password')

    }

   function signup (username, email, password){

   
      console.log('sign up')

      const foundUserEmail = users.filter((user) => user.email === email)
      if (foundUserEmail.length)
        throw new Error('Email already exist')

      const foundUsername = users.filter((user) => user.username === username)
      if (foundUsername.length)     
        throw new Error('Username already exist')

      const newUser = {'username' : username, 'email' : email, 'password': password}
      users.push(newUser)
      setUsers(users)
      setUser(newUser)

    }

    function logout(){
      
      console.log('logout')

      setUser(false)
      
    }

   const value = {user, signin, signup, logout};

  return <authContext.Provider value={value} >
            {children}
         </authContext.Provider>
}
