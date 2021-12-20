import React from 'react';
import { BlogContainer, Date, HeaderWrapper, PostWrapper, Subtitle, Text, Title } from './blogElements';
import { blogObjOne, blogObjTwo, blogObjThree } from './tempData';

const Blog = () => {
  return (
    <>
      <BlogContainer id='blog'>
        <PostWrapper>
            <HeaderWrapper>
            <Title>
                {blogObjOne.title}
            </Title>
            </HeaderWrapper>
            <Subtitle>
                {blogObjOne.titleDesc}
            </Subtitle>
            <Date>
                {blogObjOne.date}
            </Date>
            <Text>
                It's been a whirlwind of a six months. Not even mentioning the craziness we seem to perpetually be living in, I'm navigating what I would guess most developers reflect on not being the most fun part of their careers...trying to figure out what the heck I'm doing as a newbie developer. It has, of course, been a very difficult and humbling experience, but not without some very satisfying small victories as well.  <br/><br/> <em>Click to go read the full post...</em><br/>
            </Text>
        </PostWrapper>
        <PostWrapper>
        <HeaderWrapper>
            <Title>
                {blogObjTwo.title}
            </Title>
            </HeaderWrapper>
            <Subtitle>
                {blogObjTwo.titleDesc}
            </Subtitle>
            <Date>
                {blogObjTwo.date}
            </Date>
            <Text>
                Blog content here...
            </Text>
        </PostWrapper>
        <PostWrapper>
        <HeaderWrapper>
            <Title>
                {blogObjThree.title}
            </Title>
            </HeaderWrapper>
            <Subtitle>
                {blogObjThree.titleDesc}
            </Subtitle>
            <Date>
                {blogObjThree.date}
            </Date>
            <Text>
                Blog content here...
            </Text>
        </PostWrapper>
      </BlogContainer>
    </>
  );
};

export default Blog;
