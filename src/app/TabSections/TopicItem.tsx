import * as React from 'react';
import {
  Button,
  PageSection,
  PageSectionVariants,
  Title 
} from '@patternfly/react-core';

const TopicItem: React.FunctionComponent = () => {

  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <Title headingLevel="h1" size="lg">MissingMan_East_Topic_1</Title>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding'}}>
        Tabs go here
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        Wizard goes here
      </PageSection>
    </>
  )
}

export { TopicItem };
