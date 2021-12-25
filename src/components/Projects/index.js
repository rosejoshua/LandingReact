import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCardRed,
  ProjectsCardAmber,
  ProjectsCardGreen,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  SocialLink,
  TitleWrapper,
  TextWrapper,
  BtnWrapper,
  ArrowForward,
  ArrowRight,
  Subheader,
  SubheadingH2Red,
  SubheadingH2Amber,
  SubheadingH2Green,
  Holder,
  SubheadingH2White,
} from './projectsElements';
import { Button } from '../ButtonElements';

const Projects = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <Subheader>
        <Holder>
        <SubheadingH2Red>&nbsp;&nbsp;&nbsp;&nbsp;Planned</SubheadingH2Red>
        <SubheadingH2White>|</SubheadingH2White>
        </Holder>
        <Holder>
        <SubheadingH2Amber>In Progress&nbsp;&nbsp;</SubheadingH2Amber>
        <SubheadingH2White>|</SubheadingH2White>
        </Holder>
        <Holder>
        <SubheadingH2Green>&nbsp;&nbsp;Complete</SubheadingH2Green>
        </Holder>
      </Subheader>
      <ProjectsWrapper>
        <ProjectsCardRed>
          <TitleWrapper>
            <ProjectsH2>Touch Interface Nav Sphere</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              Experimental JavaScript navigation object for mobile devices and
              an excuse to brush up on some trig and calculus. My favorite type
              of project.
            </ProjectsP>
          </TextWrapper>
          <ProjectsIcon src='/images/svg-3.svg' />
        </ProjectsCardRed>
        <ProjectsCardRed>
          <ProjectsIcon src='/images/svg-2.svg' />
          <TitleWrapper>
            <ProjectsH2>Web Hosted Temporary Thumb Drive</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              I want to strip the cloud storage concept down to a safe process
              with a single file, no login, no password, just come client side
              encryption and a file ID for the API to accept from the second
              device.
            </ProjectsP>
          </TextWrapper>
        </ProjectsCardRed>
        <ProjectsCardRed>
          <TitleWrapper>
            <ProjectsH2>Potato Webcam Chat</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              C++ and SDL2 desktop app for Windows which compresses video to a
              pixel-art level quality. Mostly an excuse to play around with
              peer-to-peer UDP networking and interfacing with hardware.
            </ProjectsP>
          </TextWrapper>
          <ProjectsIcon src='/images/svg-1.svg' />
        </ProjectsCardRed>
        <ProjectsCardRed>
          <ProjectsIcon src='/images/svg-3.svg' />
          <TitleWrapper>
            <ProjectsH2>Maze Generator and Solver</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              For this website, I want the landing page background to be a live
              maze generation followed by its automated solving. Hopefully it
              will look good as well.
            </ProjectsP>
          </TextWrapper>
        </ProjectsCardRed>
        <ProjectsCardAmber>
          <SocialLink
            href='https://github.com/rosejoshua/SocialNetwork'
            target='_blank'
            aria-label='Github'
          >
            <FaGithub />
          </SocialLink>
          <ProjectsIcon src='/images/svg-2.svg' />
          <TitleWrapper>
            <ProjectsH2>React Social Network</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              This in-progress site will be full CRUD and use React, Redux and
              Firestore. Features include authentication (new account and
              third-party), followers, chat, events, photo uploads and more.
            </ProjectsP>
          </TextWrapper>
        </ProjectsCardAmber>
        <ProjectsCardGreen>
          <SocialLink
            href='https://github.com/rosejoshua/ParticleFun'
            target='_blank'
            aria-label='Github'
          >
            <FaGithub />
          </SocialLink>
          <TitleWrapper>
            <ProjectsH2>Particle Fun</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              This is a particle fire program with individual pixel behavior
              (think pretty screensaver) written with C++ using SDL2. Concepts
              include OOP, particle-level behavior, buffer manipulation and box
              blur.
            </ProjectsP>
          </TextWrapper>
          <ProjectsIcon src='/images/svg-1.svg' />
        </ProjectsCardGreen>
        <ProjectsCardGreen>
          <SocialLink
            href='https://github.com/rosejoshua/FinanceLanding'
            target='_blank'
            aria-label='Github'
          >
            <FaGithub />
          </SocialLink>
          <ProjectsIcon src='/images/svg-3.svg' />
          <TitleWrapper>
            <ProjectsH2>React Single Page Demo App</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              This is the tutorial app that I used as a starting point for the
              website you're on now. Link to the author's video is in the
              'About' section of the repo.
            </ProjectsP>
          </TextWrapper>
        </ProjectsCardGreen>
        <ProjectsCardGreen>
          <SocialLink
            href='https://github.com/rosejoshua/FinalBootCampProject'
            target='_blank'
            aria-label='Github'
          >
            <FaGithub />
          </SocialLink>
          <TitleWrapper>
            <ProjectsH2>Final Bootcamp Team Project</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              This was a full CRUD foodie social network with
              friendship/follower mechanics. This thing was a hot mess to be
              honest but I made it look good.
            </ProjectsP>
          </TextWrapper>
          <ProjectsIcon src='/images/svg-2.svg' />
        </ProjectsCardGreen>
        <ProjectsCardGreen>
          <SocialLink
            href='https://github.com/rosejoshua/MidtermBootCampProject'
            target='_blank'
            aria-label='Github'
          >
            <FaGithub />
          </SocialLink>
          <ProjectsIcon src='/images/svg-3.svg' />
          <TitleWrapper>
            <ProjectsH2>Bootcamp Midterm Team Project</ProjectsH2>
          </TitleWrapper>
          <TextWrapper>
            <ProjectsP>
              An online marketplace for buyers and sellers hosted on AWS.
              Technologies included STS, JDBC, Gradle, JSTL, and SQL.
            </ProjectsP>
          </TextWrapper>
        </ProjectsCardGreen>
      </ProjectsWrapper>
      <BtnWrapper>
        <Button
          to='resume'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          Work History {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </BtnWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
