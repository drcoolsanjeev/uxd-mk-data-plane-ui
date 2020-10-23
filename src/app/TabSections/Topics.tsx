import * as React from 'react';
import {
  Button,
  PageSection,
  Title 
} from '@patternfly/react-core';

const Topics: React.FunctionComponent = ({isCreateTopic, setIsCreateTopic, isTopicExpanded, setIsTopicExpanded}) => {

  const createTopic = () => {
    setIsCreateTopic(!isCreateTopic);
  }

  const openTopicItem = () => {
    setIsTopicExpanded(!isTopicExpanded);
  }

  return (
    <>
      <Title headingLevel="h1" size="lg">Topics component - table go here</Title>
      <Button variant="primary" onClick={() => createTopic()}>
        Create topic
      </Button>
      <Button variant="link" onClick={() => openTopicItem()}>Example topic</Button>
    </>
  )
}

export { Topics };
