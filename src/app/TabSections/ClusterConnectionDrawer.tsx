import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardActions,
  CardFooter,
  CardTitle,
  ClipboardCopy,
  DrawerPanelContent,
  DrawerHead,
  DrawerPanelBody,
  DrawerActions,
  DrawerCloseButton,
  Flex,
  FlexItem,
  FormGroup,
  Grid,
  GridItem,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Title,
  TitleSizes,
  Tabs,
  Tab,
  TabTitleText,
  TextContent,
  Text,
  TextInput,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants
} from '@patternfly/react-core';
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';
import '@patternfly/react-styles/css/utilities/Alignment/alignment.css';
import './ClusterConnectionDrawer.css';
import { GenerateCredential } from './GenerateCredential';

const ClusterConnectionDrawer: React.FunctionComponent = ({onCloseClick, drawerRef, isExpanded }) => {

  const [activeTabKey, setActiveTabKey] = useState(0);

  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  const resourcesTab = (
    <>
      <TextContent className="pf-u-pb-sm">
        <Text component={TextVariants.small}>
          To connect an application or tool to this Kafka instance, you will need the address of a Kafka listener, a certificate to authenticate with, and generated credentials.
        </Text>
        <Text component={TextVariants.h5}>
          Kafka listener and credentials
        </Text>
        <Text component={TextVariants.small}>
          Your application or tool will make its initial connection to the Kafka instance using the bootstrap server, and authenticate with credentials specific to the server if required.
        </Text>
        <Text component={TextVariants.p} className="pf-u-mt-md">
          External server
        </Text>
      </TextContent>
      <Flex>
        <FlexItem className="pf-m-grow pf-m-spacer-none pf-u-mb-xs">
          <ClipboardCopy>
            strimzi-external-bootstrap-01 : 1234
          </ClipboardCopy>
        </FlexItem>
        <GenerateCredential />
      </Flex>
      <TextContent>
        <Text component={TextVariants.h5}>
          Certificates
        </Text>
        <Text component={TextVariants.small}>
          A certificate is required by your Kafka clients to connect securely to this Kafka instance.
        </Text>
        <Grid hasGutter>
          <GridItem span={6}>
            <Card isFlat isCompact className="card-certificate">
              <CardHeader>
                <CardTitle className="pf-u-pt-0">
                  PKCS12 certificate
                </CardTitle>
              </CardHeader>
              <CardBody>
                Use this for a Java client.
              </CardBody>
              <CardBody>
                <FormGroup label="Certificate password" fieldId="cert-password">
                  <TextInput
                    type="password"
                    id="cert-password"
                    name="cert-password"
                  />
                </FormGroup>
              </CardBody>
              <CardFooter className="pf-u-text-align-right">
                <Button variant="primary">Download certificate</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem span={6}>
            <Card isFlat isCompact className="card-certificate pf-u-h-100">
              <CardHeader>
                <CardTitle className="pf-u-pt-0">
                  PEM certificate
                </CardTitle>
              </CardHeader>
              <CardBody>
                Use this for anything else.
              </CardBody>
              <CardFooter className="pf-u-text-align-right">
                <Button variant="primary">Download certificate</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Text component={TextVariants.h5}>
          Producer endpoint and credentials
        </Text>
        <Text component={TextVariants.small}>
          Applications and tools that use the REST producer API will need the REST producer endpoint to connect.
        </Text>
        <ClipboardCopy>
          https : // : 30123
        </ClipboardCopy>
      </TextContent>
    </>
  )

  const sampleCodeTab = (
    <>
    <TextContent className="pf-u-pb-sm">
      <Text component={TextVariants.h5}>
        Sample connection code
      </Text>
      <Text component={TextVariants.small}>
        Use this snippet of code to set the properties in your Kafka client to connect securely. Replace the values in &lt;brackets&gt;.
      </Text>
      </TextContent>
      <div className="pf-c-code-editor pf-m-read-only">
        <div className="pf-c-code-editor__header">
          <div className="pf-c-code-editor__controls">
            <Button variant="control" aria-label="Action">
              <CopyIcon />
            </Button>
          </div>
          <div className="pf-c-code-editor__tab">
            <span className="pf-c-code-editor__tab-text">Java</span>
          </div>
        </div>
        <div className="pf-c-code-editor__main">
          <div className="pf-c-code-editor__code">
            <pre className="pf-c-code-editor__code-pre">import java.util.Properties;</pre>
          </div>
        </div>
      </div>

      <TextContent className="pf-u-pb-sm">
        <Text component={TextVariants.h5}>
          Sample connection code
        </Text>
        <Text component={TextVariants.small}>
          Use this snippet of code to set the properties in your Kafka client to connect securely. Replace the values in &lt;brackets&gt;.
        </Text>
      </TextContent>
      <div className="pf-c-code-editor pf-m-read-only">
        <div className="pf-c-code-editor__header">
          <div className="pf-c-code-editor__controls">
            <Button variant="control" aria-label="Action">
              <CopyIcon />
            </Button>
          </div>
        </div>
        <div className="pf-c-code-editor__main">
          <div className="pf-c-code-editor__code">
            <pre className="pf-c-code-editor__code-pre">
              bootstrap.servers=es-1-4-0-ibm-es-proxy-route-bootstrap-es.apps.2019-4-1-demo-icp-mst.fyre.ibm.com:44 
              sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username=“token
            </pre>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <DrawerPanelContent className="cluster-connection-drawer" widths={{ default: 'width_50' }}>
      <DrawerHead>
        <Title size={TitleSizes.lg} headingLevel="h2" tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>Cluster connection</Title>
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
