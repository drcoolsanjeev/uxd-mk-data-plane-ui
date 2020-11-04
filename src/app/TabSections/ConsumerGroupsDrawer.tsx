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
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import './ClusterConnectionDrawer.css';

const ConsumerGroupsDrawer: React.FunctionComponent = ({onCloseClick, drawerRef, isExpanded }) => {


  return (
    <DrawerPanelContent className="cluster-connection-drawer" widths={{ default: 'width_50' }}>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>HIIIIIIIIIIII</span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>

      </DrawerPanelBody>
    </DrawerPanelContent>
  )
}

export { ConsumerGroupsDrawer };
