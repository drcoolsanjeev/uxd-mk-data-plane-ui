import * as React from 'react';
import {
  PageSection,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  Title
  } from '@patternfly/react-core';
import ExclamationTriangle from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <EmptyState> 
      <EmptyStateIcon icon={ExclamationTriangle} />
      <Title headingLevel="h4" size="lg">
        Before you start
      </Title>
      <EmptyStateBody>
        This is not a fully functional UI. It is a prototype for user testing.
      </EmptyStateBody> 
    </EmptyState>
  </PageSection>
)

export { Dashboard };
