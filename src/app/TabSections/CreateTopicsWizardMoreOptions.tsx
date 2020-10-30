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
  Popover,
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
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

const CreateTopicsWizardMoreOptions: React.FunctionComponent = () => {

  const [value1, setValue1] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [selected1, setSelected1] = useState(null);

  const onToggle1 = isOpen1 => {
    setIsOpen1(isOpen1);
  }

  const onSelect1 = (event, selection, isPlaceholder) => {
    setSelected1(selection);
    setIsOpen1(false);
  }

  const handleTextInputChange1 = value1 => {
    setValue1(value1);
  }

  return (
    <>
      <div className="topics-wizard-content">
      <TextContent>
        <Text component={TextVariants.h2}>
          Core configuration
        </Text>
        <Text component={TextVariants.p}>
          We recommend you fill out and evaluate these details at a minimum before deploying your topic.
        </Text>
      </TextContent>

      <Form>
          <FormGroup
            label="Topic name"
            labelIcon={
              <Popover
                headerContent={<div>Test</div>}
                bodyContent={<div>Test</div>}
              >
                <button
                  aria-label="More info for name field"
                  onClick={e => e.preventDefault()}
                  aria-describedby="simple-form-name"
                  className="pf-c-form__group-label-help"
                >
                  <HelpIcon noVerticalAlign />
                </button>
              </Popover>
            }
          >
            <TextInput
              isRequired
              type="text"
              id="input-1"
              name="Topic name"
              value={value1}
              onChange={handleTextInputChange1}
              label="Topic name"
              placeholder="Test topic name"
            />
          </FormGroup>
          <FormGroup
            label="Partitions"
            labelIcon={
              <Popover
                headerContent={<div>Test</div>}
                bodyContent={<div>Test</div>}
              >
                <button
                  aria-label="More info for name field"
                  onClick={e => e.preventDefault()}
                  aria-describedby="simple-form-name"
                  className="pf-c-form__group-label-help"
                >
                  <HelpIcon noVerticalAlign />
                </button>
              </Popover>
            }
          >
            <Touchspin value={1} maxWidth />
          </FormGroup>
          <FormGroup
            label="Replicas"
            labelIcon={
              <Popover
                headerContent={<div>Test</div>}
                bodyContent={<div>Test</div>}
              >
                <button
                  aria-label="More info for name field"
                  onClick={e => e.preventDefault()}
                  aria-describedby="simple-form-name"
                  className="pf-c-form__group-label-help"
                >
                  <HelpIcon noVerticalAlign />
                </button>
              </Popover>
            }
          >
            <Touchspin value={3} maxWidth />
          </FormGroup>
          <FormGroup
            label="Minimum in-sync replicas"
            labelIcon={
              <Popover
                headerContent={<div>Test</div>}
                bodyContent={<div>Test</div>}
              >
                <button
                  aria-label="More info for name field"
                  onClick={e => e.preventDefault()}
                  aria-describedby="simple-form-name"
                  className="pf-c-form__group-label-help"
                >
                  <HelpIcon noVerticalAlign />
                </button>
              </Popover>
            }
          >
            <Touchspin value={3} maxWidth />
          </FormGroup>
          <FormGroup
            label="Retention time"
            labelIcon={
              <Popover
                headerContent={<div>Test</div>}
                bodyContent={<div>Test</div>}
              >
                <button
                  aria-label="More info for name field"
                  onClick={e => e.preventDefault()}
                  aria-describedby="simple-form-name"
                  className="pf-c-form__group-label-help"
                >
                  <HelpIcon noVerticalAlign />
                </button>
              </Popover>
            }
          >
            <Flex>
              <FlexItem>
                <Touchspin value={7} maxWidth />
              </FlexItem>
              <FlexItem>
                <Select
                  variant={SelectVariant.single}
                  aria-label="Select Input"
                  onToggle={onToggle1}
                  onSelect={onSelect1}
                  selections={selected1}
                  isOpen={isOpen1}
                  // aria-labelledby={titleId}
                >
                  <SelectOption key={0} value="days" isPlaceholder/>
                  <SelectOption key={1} value="weeks" />
                  <SelectOption key={2} value="months" />
                </Select>
              </FlexItem>
            </Flex>
          </FormGroup>
        </Form>

      <TextContent>
        <Text component={TextVariants.h2}>
          Messages
        </Text>
        <Text component={TextVariants.p}>
          These details control how your messages will be handled in the cluster.
        </Text>
      </TextContent>
      <Form>
        <FormGroup
          className="topics-wizard-content"
          label="Topic name"
          labelIcon={
            <Popover
              headerContent={<div>Test</div>}
              bodyContent={<div>Test</div>}
            >
              <button
                aria-label="More info for name field"
                onClick={e => e.preventDefault()}
                aria-describedby="simple-form-name"
                className="pf-c-form__group-label-help"
              >
                <HelpIcon noVerticalAlign />
              </button>
            </Popover>
          }
        >
          <Touchspin value={1} maxWidth />
        </FormGroup>
          <FormGroup
            label="Partitions"
            labelIcon={
              <Popover
                headerContent={<div>Test</div>}
                bodyContent={<div>Test</div>}
              >
                <button
                  aria-label="More info for name field"
                  onClick={e => e.preventDefault()}
                  aria-describedby="simple-form-name"
                  className="pf-c-form__group-label-help"
                >
                  <HelpIcon noVerticalAlign />
                </button>
              </Popover>
            }
          >
            <Touchspin value={1} maxWidth />
          </FormGroup>
        </Form>
      </div>
    </>
  );
}

export { CreateTopicsWizardMoreOptions };
