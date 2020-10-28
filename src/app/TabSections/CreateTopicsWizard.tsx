import React, {useState} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Divider,
  Form,
  FormGroup,
  TextInput,
  PageSection,
  PageSectionVariants,
  Title,
  TextContent,
  Text,
  TextVariants,
  Wizard
} from '@patternfly/react-core';

const CreateTopicsWizard: React.FunctionComponent = () => {

  const [ topicNameInput, setTopicNameInput ] = useState()

  const mainBreadcrumbs = (
    <Breadcrumb>
      <BreadcrumbItem to="#">OpenShift Streams</BreadcrumbItem>
      <BreadcrumbItem to="#">MK Cluster Instance</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Create topic
      </BreadcrumbItem>
    </Breadcrumb>
  );

  const handleTextInputChange1 = topicNameInput => {
    setTopicNameInput(topicNameInput)
  };

  const step1 = (
    <>
      <TextContent>
        <Text component={TextVariants.h4}>
          Topic name
        </Text>
        <Text component={TextVariants.p}>
          This is the unique name used to recognize your topic.
        </Text>
        <Text component={TextVariants.small}>
          It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize. 
        </Text>
      </TextContent>
      <Form>
        <FormGroup
          label="Name"
          isRequired
          fieldId="simple-form-name"
          helperText="Please enter your topic name"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name"
            name="simple-form-name"
            aria-describedby="simple-form-name-helper"
            value={topicNameInput}
            onChange={handleTextInputChange1}
          />
        </FormGroup>
      </Form>
    </>
  )

  const steps = [
    { name: 'Topic name', component: step1 },
    { name: 'Partitions', component: <p>Step 2 content</p> },
    { name: 'Message retention', component: <p>Step 3 content</p> },
    { name: 'Replicas', component: <p>Step 4 content</p>, nextButtonText: 'Finish' }
  ];

  const title = 'Create topics wizard';

  return (
    <>
    <section className="pf-c-page__main-breadcrumb">
      { mainBreadcrumbs }
    </section>
    <PageSection variant={PageSectionVariants.light}>
      <Title headingLevel="h1" size="lg">Create topic</Title>
      Switch goes here
    </PageSection>
    <Divider/>
    <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding' }}>
      <Wizard
        navAriaLabel={`${title} steps`}
        mainAriaLabel={`${title} content`}
        steps={steps}
        // height={400}
      />

    </PageSection>
  </>
  );
}

export { CreateTopicsWizard };
