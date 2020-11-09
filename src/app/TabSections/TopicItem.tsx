import React, {useState} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
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

const TopicItem: React.FunctionComponent = ({topicName}) => {

  const [activeTabKey, setActiveTabKey] = useState(0);
  const contentRef1 = React.createRef();
  const contentRef2 = React.createRef();

  const mainBreadcrumbs = (
    <Breadcrumb>
      <BreadcrumbItem to="/openshiftstreams">OpenShift Streams</BreadcrumbItem>
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
    </Tabs>
  )

  return (
    <>
      <section className="pf-c-page__main-breadcrumb">
        { mainBreadcrumbs }
      </section>
      <PageSection variant={PageSectionVariants.light}>
        <Title headingLevel="h1" size="lg">{topicName}</Title>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} padding={{ default: 'noPadding'}}>
        {mainTabs}
      </PageSection>

        <TabContent eventKey={0} id="refTab1Section" ref={contentRef1} aria-label="Tab item 1">
          <PageSection>
            <TopicItemConsumerGroups/>
          </PageSection>
        </TabContent>

        <TabContent eventKey={1} id="refTab2Section" ref={contentRef2} aria-label="Tab item 2" hidden>
          <PageSection variant={PageSectionVariants.light}>
            <TopicItemProperties/>
          </PageSection>
        </TabContent>
    </>
  )
}

export { TopicItem };
