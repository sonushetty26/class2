import React, { useState } from 'react'
import Personal from './sub/Personal'
import Edu from './sub/Edu'
import Address from './sub/Address'

function  Ex8(props) {
      const [user,setUser] = useState({
        name:"David",
        email:"David@gmail.com",
        mobile: "9876543210",
         address :{
            city:"Mangalore",
            zip:592255
         },
         edu:{
            type:"Degree",
            title:"Bsc",
            year:2021
         }
      })
      return(
        <div>
            <h1>Props in Functional Component  </h1>
            <Personal fName={user.name} fEmail={user.email} fMobile={user.mobile}/>
            <Address fCity={user.address.city} fZip={user.address.zip}/>
            <Edu fType={user.edu.type} fTitle={user.edu.title} fYear={user.edu.year}/>
        </div>
      )
}

export default Ex8