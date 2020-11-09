import React, {useState} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Divider,
  Grid,
  GridItem,
  PageSection,
  PageGroup,
  Form,
  Popover,
  FormGroup,
  PageSectionVariants,
  Title,
  TextContent,
  TextVariants,
  Text,
  Tabs,
  Tab,
  TabContent,
  TabTitleText
} from '@patternfly/react-core';
import { JumpLinks } from '../CustomComponents/JumpLinks';
import { JumpLinksItem } from '../CustomComponents/JumpLinksItem';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

const TopicItemProperties: React.FunctionComponent = ({topicName}) => {

  const [activeTabKey, setActiveTabKey] = useState(1);
  const contentRef1 = React.createRef();
  const contentRef2 = React.createRef();
  const contentRef3 = React.createRef();
  const contentRef4 = React.createRef();

  const mainBreadcrumbs = (
    <Breadcrumb>
      <BreadcrumbItem to="#">OpenShift Streams</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        MK Cluster Instance
      </BreadcrumbItem>
    </Breadcrumb>
  )

  const handleTabClick = (event, tabIndex) => {
    console.log('what is tabIndex  ' + tabIndex);
    setActiveTabKey(tabIndex);
  };

  const mainTabs = (
    <Tabs activeKey={activeTabKey} onSelect={handleTabClick} inset={{default: 'insetMd'}}>
      <Tab
        eventKey={0}
        title={<TabTitleText>Consumer groups</TabTitleText>}
        tabContentId="refTab1Section"
        tabContentRef={contentRef1}
      />
      <Tab
        eventKey={1}
        title={<TabTitleText>Properties</TabTitleText>}
        tabContentId="refTab2Section"
        tabContentRef={contentRef2}
      />
      <Tab
        eventKey={2}
        title={<TabTitleText>Messages</TabTitleText>}
        tabContentId="refTab3Section"
        tabContentRef={contentRef3}
      />
    </Tabs>
  )

  return (
    <>
      <Grid hasGutter>
        <GridItem span={3}>
          <JumpLinks isVertical label="Jump to section" scrollableSelector="#scrollable-element">
            <JumpLinksItem
              isActive
              key={0}
              href="#coreConfiguration"
            >
                Core configuration
            </JumpLinksItem>
            <JumpLinksItem key={1} href="#messages">
              Messages
            </JumpLinksItem>
            <JumpLinksItem key={2} href="#log">
              Log
            </JumpLinksItem>
            <JumpLinksItem key={3} href="#replication">
              Replication
            </JumpLinksItem>
            <JumpLinksItem key={4} href="#cleanup">
              Cleanup
            </JumpLinksItem>
            <JumpLinksItem key={5} href="#index">
              Index
            </JumpLinksItem>
            <JumpLinksItem key={6} href="#flush">
              Flush
            </JumpLinksItem>
            <JumpLinksItem key={7} href="#delete">
              Delete topic
            </JumpLinksItem>
          </JumpLinks>
        </GridItem>
        <GridItem span={9}>
          <div className="topics-wizard-content">
          <PageGroup hasOverflowScroll  id="scrollable-element">
            <PageSection>

              <TextContent>
                <Text component={TextVariants.h2} tabIndex={-1} id="coreConfiguration">
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
                sample topic
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
                1
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
                3
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
                1
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
                7 days
              </FormGroup>
            </Form>

          <TextContent>
            <Text component={TextVariants.h2} tabIndex={-1} id="messages">
              Messages
            </Text>
            <Text component={TextVariants.p}>
              These details control how your messages will be handled in the cluster.
            </Text>
          </TextContent>
          <Form>
            <FormGroup
              className="topics-wizard-content"
              label="Maximum message size"
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
              1000012 bytes
            </FormGroup>
              <FormGroup
                label="Message timestamp"
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
                CreateTime
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="log">
                Log
              </Text>
              <Text component={TextVariants.p}>
                Messages are continually appended to the partition’s log. This is when they are assigned their offset. These details define how your log is handled.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Cleanup policy"
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
                Delete
              </FormGroup>
              <FormGroup
                className="topics-wizard-content"
                label="Retention bytes"
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
                -1 byte
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Log segment types"
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
                Delete
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="replication">
                Replication
              </Text>
              <Text component={TextVariants.p}>
                These details control the behavior of your replicas. Each of these parameters has an impact on every replica created in this topic.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Unclean leader election"
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
                Disabled
              </FormGroup>
              <FormGroup
                className="topics-wizard-content"
                label="Follower replication throttled replicas"
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
                - 
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Leader replication throttled replicas"
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
                - 
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="cleanup">
                Cleanup
              </Text>
              <Text component={TextVariants.p}>
                These details control the cleanup processing of the log.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Minimum cleanable dirty ratio"
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
                4
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Minimum compaction lag time"
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
                0 milliseconds
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Segment time"
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
                6048000 milliseconds
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Segment jitter time"
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
                0 milliseconds
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="File delete delay"
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
                6000 milliseconds
              </FormGroup>


              <FormGroup
                className="topics-wizard-content"
                label="Preallocation log segment files"
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
                Enabled
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="index">
                Index
              </Text>
              <Text component={TextVariants.p}>
                These details control the indexing of the log.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Index interval bytes"
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
                4096 bytes
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Segment interval bytes"
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
                10847560 bytes
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="flush">
                Flush
              </Text>
              <Text component={TextVariants.p}>
                These details control the frequency of the flushing of the log.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Index interval bytes"
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
                984245548293848 milliseconds
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Flush interval time"
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
                96847293747387 milliseconds
              </FormGroup>
            </Form>

            <Divider/>

            <TextContent className="pf-u-mt-2xl">
                <Text component={TextVariants.h2} id="delete">
                  Delete topic (irreversable)
                </Text>
                <Text component={TextVariants.p}>
                  This permanently removes this topic from this instance of Strimzi. Applications will no longer have access to this topic.
                </Text>
                <Button variant="danger">Delete topic</Button>
              </TextContent>
              </PageSection>
            </PageGroup>
          </div>
        </GridItem>
      </Grid>
    </>
  )
}

export { TopicItemProperties };
