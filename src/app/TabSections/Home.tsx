import React, {useState} from 'react';
import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
  Gallery,
  GalleryItem
} from '@patternfly/react-core';
import Connect from '@app/bgimages/Connect.svg';
import Education from '@app/bgimages/Education.svg';
import Create from '@app/bgimages/Create.svg';
import Documentation from '@app/bgimages/Documentation.svg';
import './Home.css';


const Home: React.FunctionComponent = ({isExpanded, setIsExpanded, setIsCreateTopic}) => {

  const [selected, setSelected] = useState(null);

  const onClick = event => {
    const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;
    setSelected(newSelected);

    if(event.currentTarget.id === "card-1") {
      setIsCreateTopic(true);
    }

    if(event.currentTarget.id === "card-3") {
      setIsExpanded(!isExpanded)
    }
  };

  const cardDetails = [
    {
      "title":"Kafka basics",
      "description": "Learn the basics of Apache Kafka, the heart of Strimzi, in 6 steps",
      "icon": Education
    },
    {
      "title":"Create a topic",
      "description": "Topics are a named stream of messages. You can create a topic using the UI.",
      "icon": Create
    },
    {
      "title":"Documentation",
      "description": "View product documentations, as well as Quickstarts and community content.",
      "icon": Documentation
    },
    {
      "title":"Connect to this cluster",
      "description": "Get connection details and sample code to connect your applications.",
      "icon": Connect
    }
  ];

  return (
    <>
      <Gallery hasGutter className="card-gallery">
        { cardDetails.map((cardDetail, index) => (
          <GalleryItem>
            <Card id={`card-${index}`} onClick={onClick} isSelectable isSelected={selected === `card-${index}`}>
              <CardHeader>
                <CardHeaderMain>
                  <Brand src={cardDetail.icon} alt="Icon" style={{ height: '30px' }}/>
                </CardHeaderMain>
              </CardHeader> 
              <CardTitle>
                {cardDetail.title}
              </CardTitle>
              <CardBody>
                {cardDetail.description}
              </CardBody>
            </Card>
          </GalleryItem>
        ))}
      </Gallery>
    </>
  )
}

export { Home };
