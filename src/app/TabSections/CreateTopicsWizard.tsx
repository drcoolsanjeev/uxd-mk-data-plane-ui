import React, {useState} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Divider,
  Flex,
  FlexItem,
  Form,
  FormGroup,
  InputGroup,
  TextInput,
  PageSection,
  PageSectionVariants,
  Radio,
  Select,
  SelectOption,
  SelectVariant,
  Switch,
  Title,
  TextContent,
  Text,
  TextVariants,
  Wizard
} from '@patternfly/react-core';
import { Touchspin } from '../CustomComponents/TouchSpin';
import './CreateTopicsWizard.css';
import { CreateTopicsWizardMoreOptions } from './CreateTopicsWizardMoreOptions';
import { CreateTopicStep4 } from './CreateTopicStep4';

const CreateTopicsWizard: React.FunctionComponent = () => {

  const [topicNameInput, setTopicNameInput] = useState();
  const [radio1Step3, setRadio1Step3] = useState(false);
  const [radio2Step3, setRadio2Step3] = useState(false);
  const [radio3Step3, setRadio3Step3] = useState(false);
  const [radio4Step3, setRadio4Step3] = useState(false);
  const [radio1Step4, setRadio1Step4] = useState(false);
  const [radio2Step4, setRadio2Step4] = useState(false);
  const [radio3Step4, setRadio3Step4] = useState(false);
  const [msgRetentionValue, setMsgRetentionValue] = useState('');
  const [msgTouchspinValue, setMsgTouchspinValue] = useState(7);
  const [partitionTouchspinValue, setPartitionTouchspinValue] = useState(1);
  const [isMsgSelectOpen, setIsMsgSelectOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  console.log('what is the msgReten' + msgRetentionValue);

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

  const handleChangeStep3 = (checked, event) => {
    setRadio1Step3(false);
    setRadio2Step3(false);
    setRadio3Step3(false);
    setRadio4Step3(false);

    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;

    if (name === "radio1") {
      setRadio1Step3(value)
      setMsgRetentionValue(value)
    }
    else if (name === "radio2") {
      setRadio2Step3(value)
      setMsgRetentionValue(value)
    }
    else if (name === "radio3") {
      setRadio3Step3(value)
      setMsgRetentionValue(value)
    }
  }

  const handleChangeStep4 = (checked, event) => {
    setRadio1Step4(false);
    setRadio2Step4(false);
    setRadio3Step4(false);

    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;

    if (name === "radio4") {
      setRadio1Step4(value)
      setMsgRetentionValue(value)
    }
    else if (name === "radio5") {
      setRadio2Step4(value)
      setMsgRetentionValue(value)
    }
    else if (name === "radio6") {
      setRadio3Step4(value)
      setMsgRetentionValue(value)
    }
  }

  const onMsgSelect = (event, selection, isPlaceholder) => {
    if (isPlaceholder) this.clearSelection();
    else {
      setSelected(selection);
      setIsMsgSelectOpen(false);
      console.log('selected:', selection);
    }
  };

  const onMsgToggle = (isMsgSelectOpen) => {
    setIsMsgSelectOpen(isMsgSelectOpen);
  }

  const handleSwitchChange = isSwitchChecked => {
    setIsSwitchChecked(isSwitchChecked);
  }

  const closeWizard = () => {
    console.log('close wizard');
  }

  const step1 = (
    <>
      <TextContent className="topics-wizard-content">
        <Text component={TextVariants.h2}>
          Topic name
        </Text>
        <Text component={TextVariants.p}>
          This is the unique name used to recognize your topic.
        </Text>
        <Text component={TextVariants.small}>
          It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize. 
        </Text>
        <Form>
          <FormGroup
            label="Topic name"
            fieldId="simple-form-name"
            // helperText="Please enter your topic name"
          >
            <TextInput
              isRequired
              type="text"
              id="simple-form-name"
              name="simple-form-name"
              aria-describedby="simple-form-name-helper"
              value={topicNameInput}
              onChange={handleTextInputChange1}
              placeholder="Enter topic name"
            />
          </FormGroup>
        </Form>
      </TextContent>
    </>
  )

  const step2 = (
    <>
      <TextContent className="topics-wizard-content">
        <Text component={TextVariants.h2}>
          Partitions
        </Text>
        <Text component={TextVariants.p}>
          One or more partitions make up a topic. A partition is an ordered list of messages.
        </Text>
        <Text component={TextVariants.small}>
          Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group.
        </Text>
        <Touchspin value={partitionTouchspinValue} maxWidth={true}/>
      </TextContent>
    </>
  )

  const step3 = (
    <>
      <TextContent className="topics-wizard-content">
        <Text component={TextVariants.h2}>
          Message retention
        </Text>
        <Text component={TextVariants.p}>
          This is how long messages are retained before they are deleted.
        </Text>
        <Text component={TextVariants.small}>
          If your messages are not read by a consumer within this time, they will be missed.
        </Text>
      </TextContent>
      <Form className="form-in-wizard">
          <FormGroup label="Message retention" className="form-group-radio">
            <Radio
              isChecked={radio1Step3}
              name="radio1"
              onChange={handleChangeStep3}
              label="A day"
              id="radio-controlled-1"
              value="day"
            />
            <Radio
              isChecked={radio2Step3}
              name="radio2"
              onChange={handleChangeStep3}
              label="A week"
              id="radio-controlled-2"
              value="week"
            />
            <Radio
              isChecked={radio3Step3}
              name="radio3"
              onChange={handleChangeStep3}
              label="A month"
              id="radio-controlled-3"
              value="month"
            />
            <Radio
              isChecked={radio4Step3}
              name="radio3"
              onChange={handleChangeStep3}
              label="h"
              id="radio-controlled-4"
              value="month"
            />
            <div className="radio-description radio-step-3">
              <Flex>
                <FlexItem>
                  <Touchspin value={msgTouchspinValue}/>
                </FlexItem>
                <FlexItem>
                  <Select
                    variant={SelectVariant.single}
                    aria-label="Select Input"
                    onToggle={onMsgToggle}
                    onSelect={onMsgSelect}
                    selections={selected}
                    isOpen={isMsgSelectOpen}
                    // aria-labelledby={titleId}
                  >
                    <SelectOption key={0} value="days" isPlaceholder/>
                    <SelectOption key={1} value="weeks" />
                    <SelectOption key={2} value="months" />
                  </Select>
                </FlexItem>
              </Flex>
            </div>
          </FormGroup>
        </Form>
    </>
  )

  const step4 = (
    <>
      <TextContent className="topics-wizard-content">
        <Text component={TextVariants.h2}>
          Replicas
        </Text>
        <Text component={TextVariants.p}>
          This is how many copies of a topic will be made for high availability.
        </Text>
        <Text component={TextVariants.small}>
          The partitions of each topic can be replicated across a configurable number of brokers.
        </Text>
        <Form>
          <FormGroup label="Replicas" className="form-group-radio">
            <Radio
              isChecked={radio1Step4}
              name="radio4"
              onChange={handleChangeStep4}
              label="Replication factor: 1"
              id="radio-controlled-4"
              value="radio4"
              description="Minimum in-sync replicas: 1"
            />
            <Radio
              isChecked={radio2Step4}
              name="radio5"
              onChange={handleChangeStep4}
              label="Replication factor: 2"
              id="radio-controlled-5"
              value="radio5"
              description="Minimum in-sync replicas: 2"
            />
            <Radio
              isChecked={radio3Step4}
              name="radio6"
              onChange={handleChangeStep4}
              label="Replication factor"
              id="radio-controlled-6"
              value="radio6"
            />
            <div className="radio-description">
              <Touchspin value={3} />
              <Text component={TextVariants.small}>
                Minimum in-sync replicas
              </Text>
              <Touchspin value={2} />
            </div>
          </FormGroup>
        </Form>
      </TextContent>
    </>
  )

  const steps = [
    { name: 'Topic name', component: step1 },
    { name: 'Partitions', component: step2 },
    { name: 'Message retention', component: step3 },
    { name: 'Replicas', component: <CreateTopicStep4 onClose={closeWizard} msgRetentionValue={msgRetentionValue}  setMsgRetentionValue={setMsgRetentionValue}/>, nextButtonText: 'Finish' }
  ];

  const title = 'Create topics wizard';

  return (
    <>
    <section className="pf-c-page__main-breadcrumb">
      { mainBreadcrumbs }
    </section>
    <PageSection variant={PageSectionVariants.light}>
      <Title headingLevel="h1" size="lg">Create topic</Title>
      <Switch
        id="simple-switch"
        label="Show all available options"
        labelOff="Show all available options"
        isChecked={isSwitchChecked}
        onChange={handleSwitchChange}
        className="create-topic-wizard"
      />
    </PageSection>
    <Divider/>
      { isSwitchChecked ? (
        <PageSection variant={PageSectionVariants.light}>
          <CreateTopicsWizardMoreOptions/>
          <Divider/>
        </PageSection>
      ) : (
        <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding' }}>
          <Wizard
          navAriaLabel={`${title} steps`}
          mainAriaLabel={`${title} content`}
          steps={steps}
          />
        </PageSection>
      )}
  </>
  );
}

export { CreateTopicsWizard };
