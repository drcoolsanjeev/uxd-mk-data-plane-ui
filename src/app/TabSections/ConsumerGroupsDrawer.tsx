import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardActions,
  CardTitle,
  ClipboardCopy,
  DrawerPanelContent,
  DrawerHead,
  DrawerPanelBody,
  DrawerActions,
  DrawerCloseButton,
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Tabs,
  Tab,
  TabTitleText,
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants
} from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import './ConsumerGroupsDrawer.css';

const ConsumerGroupsDrawer: React.FunctionComponent = ({onCloseClick, drawerRef, isExpanded, isTopics, consumergroupID }) => {

  const consumerGroupData = [
    {
      "partition": 0,
      "id": "consumer-1 consumer-1-02207915-3ab4-43cb547-4567c6fe87e1",
      "currentOffset": 2,
      "logendOffset": 0,
      "offsetLag": 1
    },
    {
      "partition": 1,
      "id": "consumer-1 consumer-1-02207915-3ab4-43cb547-4567c6fe87e1",
      "currentOffset": 0,
      "logendOffset": 0,
      "offsetLag": 0
    },
    {
      "partition": 2,
      "id": "consumer-1 consumer-1-02207915-3ab4-43cb547-4567c6fe87e1",
      "currentOffset": 0,
      "logendOffset": 0,
      "offsetLag": 0
    },


  ]

  const columns = (
    [
      'Partition',
      'Client ID + Customer ID',
      'Current offset',
      'Log end offset',
      'Offset lag',
      {
        title: '',
        dataLabel: 'Action'
      }
    ]
  )

  const rows = consumerGroupData.map(consumergroup => (
    [
      consumergroup.partition,
      consumergroup.id,
      consumergroup.currentOffset,
      consumergroup.logendOffset,
      consumergroup.offsetLag,
      { title: <a href="#">Reset offset</a> }
    ]
  )
);

  return (
    <DrawerPanelContent widths={{ default: 'width_50' }}>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          <TextContent className="pf-drawer-top">
            <Text component={TextVariants.small}>Consumer group ID</Text>
            <Text component={TextVariants.h3}>{consumergroupID}</Text>
          </TextContent>
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <TextContent>
        <Flex>
          <FlexItem>
            <Text component={TextVariants.small}>Active members { isTopics && " for this topic"}</Text>
            <Text component={TextVariants.h3}>2</Text>
          </FlexItem>
          <FlexItem>
            <Text component={TextVariants.small}>Unconsumed partitions { isTopics && " for this topic"}</Text>
            <Text component={TextVariants.h3}>2</Text>
          </FlexItem>
          <FlexItem>
            <Text component={TextVariants.small}>State</Text>
            <Text component={TextVariants.h3}>Stable</Text>
          </FlexItem>
        </Flex>
        </TextContent>
      </DrawerPanelBody>

      <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>

    </DrawerPanelContent>
  )
}

export { ConsumerGroupsDrawer };
