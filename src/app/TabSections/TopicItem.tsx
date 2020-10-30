import * as React from 'react';
import {
  Button,
  PageSection,
  PageSectionVariants,
  Title 
} from '@patternfly/react-core';

const TopicItem: React.FunctionComponent = ({topicName}) => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <Title headingLevel="h1" size="lg">{topicName}</Title>
    </PageSection>
    <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding'}}>
      Tabs go here
    </PageSection>
    <PageSection variant={PageSectionVariants.light}>
      Wizard goes here
    </PageSection>
  </>
)

export { TopicItem };
