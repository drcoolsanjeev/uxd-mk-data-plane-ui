import React, {useState} from 'react';
import {
  Form,
  FormGroup,
  Radio,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { Touchspin } from '../CustomComponents/TouchSpin';
import './CreateTopicsWizard.css';
import { CreateTopicsWizardMoreOptions } from './CreateTopicsWizardMoreOptions';

const CreateTopicStep4: React.FunctionComponent = () => {

  const [radio1Step4, setRadio1Step4] = useState(false);
  const [radio2Step4, setRadio2Step4] = useState(false);
  const [radio3Step4, setRadio3Step4] = useState(false);

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

  return (
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
  );
}

export { CreateTopicStep4 };
