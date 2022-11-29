import React from 'react';
import { Container, Divider, Text, Title, Flex, Button } from '@mantine/core';
import { useParams, useNavigate } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import MainWrapper from './../../components/Wrapper/MainWrapper';
import { getDate } from '../../config/global';
import { getBlogByID } from '../../services/API/blog';
import { Icon } from '@iconify/react';

const dataSample = {
  _id: '637e4b89f554ebf1e6479308',
  authorId: '637e3464e7b9c3e514d4a1a8',
  authorName: 'Anonymous',
  title: 'Loading',
  description: `<h1>Loading</h1>`,
  createdAt: Date.now(),
  __v: 0,
};

const BlogDetail = () => {
  const navigation = useNavigate();
  let { id } = useParams();
  const [Data, setData] = React.useState<any>();
  const [err, setErr] = React.useState<boolean>(false);

  React.useEffect(() => {
    const asyncFun = async () => {
      try {
        if (!id) throw new Error();
        const result = id && (await getBlogByID(id as string));
        setData(result);
      } catch (err) {
        setErr(true);
      }
    };
    asyncFun();
  }, []);
  if (err) throw Error;
  return (
    <MainWrapper>
      <Container>
        <Flex>
          <Button
            onClick={() => navigation('/')}
            size='sm'
            className='mb-2 bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-white'
            leftIcon={
              <Icon icon='material-symbols:arrow-back' width='20' height='20' />
            }
          >
            Go Back
          </Button>
        </Flex>
        <div className='p-4 bg-blue-100 rounded'>
          <Title order={2} fw={700} className='text-4xl text-gray-900'>
            {Data?.title || dataSample?.title}
          </Title>
          <Flex justify='space-between'>
            <Text className='text-gray-700 text-sm' fw={600}>
              - By {Data?.authorName || dataSample?.authorName}
            </Text>
            <Text className='text-gray-700 text-sm'>
              Published On: {getDate(Data?.createdAt || dataSample?.createdAt)}
            </Text>
          </Flex>
        </div>
        <Divider my='sm' />
        <div className='grid p-4 bg-gray-50 border border-dashed border-gray-600'>
          {ReactHtmlParser(Data?.description || dataSample?.description)}
        </div>
      </Container>
    </MainWrapper>
  );
};

export default BlogDetail;