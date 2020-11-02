import React, {useState} from 'react';
import { 
  InputGroup,
  Button,
  TextInput
} from '@patternfly/react-core';
import PlusIcon from '@patternfly/react-icons/dist/js/icons/plus-icon';
import MinusIcon from '@patternfly/react-icons/dist/js/icons/minus-icon';
import './Touchspin.css';

const Touchspin: React.FunctionComponent = ({value, maxWidth}) => {

  console.log('what is maxwidth' + maxWidth);

  const [inputValue, setInputValue] = useState(value);

  const decreaseInput = () => {
    let newInput = inputValue - 1;
    setInputValue(newInput);
  }

  const increaseInput = () => {
    let newInput = inputValue + 1;
    setInputValue(newInput);
  }

  return (
    <>
      <InputGroup className={  maxWidth ? `pf-c-touchspin input-group-max-width`: `pf-c-touchspin input-group-fixed-width` }>
        <Button variant="control" aria-label="Minus" onClick={decreaseInput}>
          <MinusIcon />
        </Button>
        <TextInput name="textInput11" id="textInput11" type="search" value={inputValue} aria-label="search input example" />
        <Button variant="control" aria-label="Plus" onClick={increaseInput}>
          <PlusIcon />
        </Button>
      </InputGroup>
    </>
  )
}

export { Touchspin };
