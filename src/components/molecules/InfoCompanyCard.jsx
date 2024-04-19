import React from 'react'
import Title from '../atoms/Title/Title'
import Icon from '../atoms/Icon/Icon'
import Text from '../atoms/Text/Text'

const InfoCompanyCard = ({company}) => {

    console.log(company);

  return (
    
    
    <div id='card-container' className='border rounded border-black p-4 mx-6 space-y-2 md:inline-block'>

    <Title type={"H3"} variant={"gray"} text={`ACERCA DE ${company.name.toUpperCase()}`} />   
    
    {company.web && 
      <div id='info-web' className='flex gap-4'> 
      <Icon type={"Glove"}/>
      <Text text={company.web} />  
      </div>
    }              
    <div id='info-mail' className='flex gap-4'>  
    <Icon type={"Mail"}></Icon>
    <Text text={company.email} /> 
    </div>

    {company.phone &&
      <div id='info-phone' className='flex gap-4'>  
      <Icon type={"Smartphone"}/>
      <Text text={company.phone} /> 
      </div> 
    }

</div>

    
  )
}

export default InfoCompanyCard


/*

* _id
* logo
* name
* email
* phone
* web

*/