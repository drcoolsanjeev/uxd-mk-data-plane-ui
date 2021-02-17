import React, {useState} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  PageSection,
  PageSectionVariants,
  Title,
  Tabs,
  Tab,
  TabContent,
  TabTitleText
} from '@patternfly/react-core';
import {TopicItemProperties} from './TopicItemProperties';
import {TopicItemConsumerGroups} from './TopicItemConsumerGroups';
import {ConsumerGroupsDrawer} from './ConsumerGroupsDrawer';

const TopicItem: React.FunctionComponent = ({topicName, setIsExpanded2, setConsumerGroupID, consumergroupID }) => {

  const [activeTabKey, setActiveTabKey] = useState(0);
  const contentRef1 = React.createRef();
  const contentRef2 = React.createRef();
  const contentRef3 = React.createRef();
  const [isExpanded, setIsExpanded] = useState(false);
  const drawerRef = React.createRef();

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus()
  };

  const onCloseClick = () => {
    setIsExpanded(false);
  };


  const mainBreadcrumbs = (
    <Breadcrumb>
      <BreadcrumbItem to="https://cloud.redhat.com/beta/application-services/openshift-streams/">OpenShift Streams</BreadcrumbItem>
      <BreadcrumbItem to="/openshiftstreams">
        red-hat
      </BreadcrumbItem>
      <BreadcrumbItem isActive>
        {topicName}
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

            
      <Drawer isExpanded={isExpanded} onExpand={onExpand}>
        <DrawerContent panelContent={ <ConsumerGroupsDrawer isTopics onCloseClick={onCloseClick} drawerRef={drawerRef} isExpanded={isExpanded} consumergroupID={consumergroupID} /> }>
        <DrawerContentBody>

      <section className="pf-c-page__main-breadcrumb">
        { mainBreadcrumbs }
      </section>
      <PageSection variant={PageSectionVariants.light}>
        <Title headingLevel="h1" size="lg">{topicName}</Title>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding'}}>
        {mainTabs}
      </PageSection>

        <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Topics">

          <PageSection>
            <TopicItemConsumerGroups setIsExpanded={setIsExpanded} setConsumerGroupID={setConsumerGroupID} consumergroupID={consumergroupID}/>
          </PageSection>


        </TabContent>

        <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="Properties" hidden>
          <PageSection variant={PageSectionVariants.light}>
            <TopicItemProperties/>
          </PageSection>
        </TabContent>

        <TabContent eventKey={2} id="refTab3Section" ref={contentRef3} aria-label="Messages" hidden>
          <PageSection variant={PageSectionVariants.light}>
            The contents that would display here are not included in this prototype.
          </PageSection>
        </TabContent>

        </DrawerContentBody>
          </DrawerContent>
          </Drawer>
    </>
  )
}

export { TopicItem };
