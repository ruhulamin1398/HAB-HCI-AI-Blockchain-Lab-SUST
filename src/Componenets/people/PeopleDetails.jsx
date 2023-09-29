import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';

function PeopleDetails() {


    const imageUrl = 'https://carleton.ca/healthequity/wp-content/uploads/research-team-header-1600w-1.jpg';
 
    const subPages = [
      {
        title: 'People',
        link: '/people'
  
      }
 
    ]



    const {name} = useParams()

    return (
        

        <>
            <Breadcrumb title={name} subPages={subPages} imageUrl={imageUrl} />
        
        
        
        
        
        
        </>
    );
}

export default PeopleDetails;