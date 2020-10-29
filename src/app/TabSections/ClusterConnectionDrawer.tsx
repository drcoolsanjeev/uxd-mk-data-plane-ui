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
import './ClusterConnectionDrawer.css';

const ClusterConnectionDrawer: React.FunctionComponent = ({onCloseClick, drawerRef, isExpanded }) => {

  const [activeTabKey, setActiveTabKey] = useState(0);

  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  const resourcesTab = (
    <TextContent>
      <Text component={TextVariants.small}>
        To connect an application or tool to this cluster, you will need the address of a bootstrap server, a certificate and generated credentials.
      </Text>
      <Text component={TextVariants.h5}>
        Bootstrap servers and credentials
      </Text>
      <Text component={TextVariants.small}>
        Your application or tool will make its initial connection to the cluster using the bootstrap server, and authenticate with credentials specific to the server if required.
      </Text>
      <Text component={TextVariants.h5}>
        External servers
      </Text>
      <Stack hasGutter>
        <StackItem>
          <Split hasGutter>
            <SplitItem isFilled>
              <ClipboardCopy>
                strimzi-external-bootstrap-01 : 1234
              </ClipboardCopy>
            </SplitItem>
            <SplitItem>
              <Button variant="secondary">Generate credential</Button>
            </SplitItem>
          </Split>
        </StackItem>
        <StackItem>
          <ClipboardCopy>
            strimzi-external-bootstrap-02 : 1234
          </ClipboardCopy>
        </StackItem>
      </Stack>
      <Text component={TextVariants.h5}>
        Certificates
      </Text>
      <Text component={TextVariants.small}>
        A certificate is required by your Kafka clients to connect securely to this cluster.
      </Text>
      <Split hasGutter>
        <SplitItem isFilled>
          <Card isFlat isCompact>
            <CardHeader>
              <CardActions>
                <Button variant="plain" aria-label="Download">
                  <DownloadIcon/>
                </Button>
              </CardActions>
              <CardTitle>
                Java trustore
              </CardTitle>
            </CardHeader>
            <CardBody>
              Use this for a Java client.
            </CardBody>
          </Card>
        </SplitItem>
        <SplitItem isFilled>
          <Card isFlat isCompact>
            <CardHeader>
              <CardActions>
                <Button variant="plain" aria-label="Download">
                  <DownloadIcon/>
                </Button>
              </CardActions>
              <CardTitle>
                PEM certificate
              </CardTitle>
            </CardHeader>
            <CardBody>
              Use this for anything else.
            </CardBody>
          </Card>
        </SplitItem>
      </Split>
      <Text component={TextVariants.h5}>
        API endpoint
      </Text>
      <Text component={TextVariants.small}>
        Applications and tools that use the REST producer API will need the API endpoint to connect to Strimzi.
      </Text>
      <ClipboardCopy>
        https : // : 30123
      </ClipboardCopy>
    </TextContent>
  )

  const sampleCodeTab = (
    <TextContent>
      <Text component={TextVariants.h5}>
        Sample connection code
      </Text>
      <Text component={TextVariants.p}>
        Use this snippet of code to set the properties in your Kafka client to connect securely. Replace the values in &lt;brackets&gt;.
      </Text>
    </TextContent>
  )

  return (
    <DrawerPanelContent className="cluster-connection-drawer">
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>Cluster connection</span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick}>
          <Tab eventKey={0} title={<TabTitleText>Resources</TabTitleText>}>
            {resourcesTab}
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Sample code</TabTitleText>}>
            {sampleCodeTab}
          </Tab>
        </Tabs>
      </DrawerPanelBody>
    </DrawerPanelContent>
  )
}

export { ClusterConnectionDrawer };
