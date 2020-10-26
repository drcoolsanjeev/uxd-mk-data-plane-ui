import * as React from 'react';
import {
  Card,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
  Gallery,
  GalleryItem
} from '@patternfly/react-core';

const Home: React.FunctionComponent = () => {

  const cardDetails = [
    {
      "title":"Kafka basics",
      "description": "Learn the basics of Apache Kafka, the heart of Strimzi, in 6 steps"
    },
    {
      "title":"Create a topic",
      "description": "Topics are a named stream of messages. You can create a topic using the UI."
    },
    {
      "title":"Documentation",
      "description": "View product documentations, as well as Quickstarts and community content."
    },
    {
      "title":"Connect to this cluster",
      "description": "Get connection details and sample code to connect your applications."
    }
  ];

  return (
    <>
      <Gallery hasGutter>
        { cardDetails.map(cardDetail => (
          <GalleryItem>
            <Card>
              <CardHeader>
                <CardHeaderMain>
                  {/* <Brand src={pfLogo} alt="PatternFly logo" style={{ height: '50px' }}/> */}
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
