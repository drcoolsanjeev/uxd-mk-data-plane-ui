import * as React from 'react';
import {
  Button,
  ButtonVariant,
  Card,
  Divider,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  InputGroup,
  TextInput,
  PageSection,
  Title 
} from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import './Topics.css';

const Topics: React.FunctionComponent = ({isCreateTopic, setIsCreateTopic, isTopicExpanded, setIsTopicExpanded, setTopicName}) => {

  const createTopic = () => {
    setIsCreateTopic(!isCreateTopic);
  }

  const openTopicItem = (nameOfTopic) => {
    setTopicName(nameOfTopic);
    setIsTopicExpanded(!isTopicExpanded);
  }

  const topicsData = [
    {
      "name": "Stoker_North_topics_0",
      "replicas": 2,
      "partitions": 2
    },
    {
      "name": "MissingMan_East_topic_1",
      "replicas": 1,
      "partitions": 1
    },
    {
      "name": "Trial_South_topic_1",
      "replicas": 0,
      "partitions": 0
    },
    {
      "name": "Stoker_West_topic_3",
      "replicas": 0,
      "partitions": 0
    },
    {
      "name": "MissingMan_North_topic_4",
      "replicas": 1,
      "partitions": 1
    },
    {
      "name": "Trial_East_topic_5",
      "replicas": 0,
      "partitions": 0
    },
    {
      "name": "Stoker_South_topic_6",
      "replicas": 0,
      "partitions": 0
    },
    {
      "name": "MissingMan_West_topic_7",
      "replicas": 2,
      "partitions": 2
    },
    {
      "name": "Trial_North_topic_8",
      "replicas": 1,
      "partitions": 1
    },
    {
      "name": "Stoker_East_topic_9",
      "replicas": 1,
      "partitions": 1
    }
  ]

  const columns = (
    [
      'Name',
      'Replicas',
      'Partitions'
    ]
  )

  const rows = topicsData.map(topic => (
      [
        { title: <Button variant="link" isInline onClick={() => openTopicItem(topic.name)}>{topic.name}</Button>},
        topic.replicas,
        topic.partitions
      ]
    )
  );

  const actions = [
    {
      title: 'Delete topic',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
    }
  ]

  return (
    <>
      <Card>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <InputGroup className="topics-search-inputgroup">
                <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" placeholder="Search" />
                <Button variant={ButtonVariant.control} aria-label="search button for search input">
                  <SearchIcon />
                </Button>
              </InputGroup>
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="primary" onClick={() => createTopic()}>
                Create topic
              </Button>
            </ToolbarItem>
            <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
              <div className="topics-per-page">
               <b>Topics per page:</b> 10
              </div>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Divider/>
        <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows} actions={actions}>
          <TableHeader />
          <TableBody />
        </Table>
      </Card>
    </>
  )
}

export { Topics };
