import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from "./Componenets/Breadcrumb";
import SectionTitle from "./Componenets/SectionTitle";
import { AllPublication } from "./hocks/allPublication";
function Publications() {
  const publication = AllPublication();

  const imageUrl = 'https://blockchain.ubc.ca/sites/default/files/styles/hero_focal_point_325/public/landing-page-images/inaki-del-olmo-602632-unsplash.jpg?h=0e00dd96&itok=CBuvGU8R';

  const subPages = [

  ]
  const openUserDetails = (username) => {
    const userDetailsUrl = `/userdetails/${encodeURIComponent(username)}`;
    window.open(userDetailsUrl, '_blank');
  };



  return (<>
    <Breadcrumb title='Publications' subPages={subPages} imageUrl={imageUrl} />

    <SectionTitle title="Journal Publications" />


    <ol className="list-decimal pl-10 md:ml-[50px] md:max-w-[1100px] md:pb-10">
      {publication.map((data) => (
        <li key={data.id} className="p-2">
          {data.authors.split(',').map((author, index) => (
            <React.Fragment key={index}>
              <span
                className="cursor-pointer text-blue-700"
                onClick={() => openUserDetails(author.trim())}
              >
                {author.trim()}
              </span>
              {index < data.authors.split(',').length - 1 && ', '}
            </React.Fragment>
          ))}
          {' '}
          <Link to={`/singlePublication/${data._id}`} target='_blank'>{data.title}</Link>{' '}
          <a
            href={`https://doi.org/${data.doi}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`https://doi.org/${data.doi}`}
          </a>
        </li>
      ))}
    </ol>





    <SectionTitle title="Conference Proceedings" />
    <ol className=" list-decimal pl-10 md:ml-[50px]   md:max-w-[1100px] md:pb-10">
      {publication.map(data => (
        <li key={data.id} className="p-2">
          {data.authors}  {data.title} <a href={`https://doi.org/${data.doi}`}>{`https://doi.org/${data.doi}`}</a>
        </li>
      ))}



    </ol>







  </>);
}

export default Publications;