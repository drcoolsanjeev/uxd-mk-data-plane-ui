import * as React from 'react';
import {
  Button,
  PageSection,
  PageSectionVariants,
  Title 
} from '@patternfly/react-core';

const CreateTopicsWizard: React.FunctionComponent = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <Title headingLevel="h1" size="lg">Create topic</Title>
    </PageSection>
    <PageSection variant={PageSectionVariants.light}>
      Wizard goes here
    </PageSection>
  </>
)

export { CreateTopicsWizard };
