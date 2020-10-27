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

const Topics: React.FunctionComponent = ({isCreateTopic, setIsCreateTopic, isTopicExpanded, setIsTopicExpanded}) => {

  const createTopic = () => {
    setIsCreateTopic(!isCreateTopic);
  }

  const openTopicItem = () => {
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
        topic.name,
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
      <Button variant="link" onClick={() => openTopicItem()}>Example topic</Button>
      <Card>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <InputGroup>
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
              Topics per page
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
