import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCardAmber,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  SocialLink,
  ProjectsCardGreen,
  ProjectsCardRed,
} from './projectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCardRed>
          <ProjectsH2>Touch Interface Nav Sphere</ProjectsH2>
          <ProjectsP>
            Experimental JavaScript navigation object for mobile devices and an
            excuse to brush up on some trig and calculus. My favorite type of
            project.
          </ProjectsP>
          <ProjectsIcon src='/images/svg-3.svg' />
        </ProjectsCardRed>
        <ProjectsCardRed>
          <ProjectsIcon src='/images/svg-2.svg' />
          <ProjectsH2>Web Hosted Temporary Thumb Drive</ProjectsH2>
          <ProjectsP>
            I want to strip the cloud storage concept down to a safe process
            with a single file, no login, no password, just come client side
            encryption and a file ID for the API to accept from the second
            device.
          </ProjectsP>
        </ProjectsCardRed>
        <ProjectsCardRed>
          <ProjectsH2>Potato Webcam Chat</ProjectsH2>
          <ProjectsP>
            C++ and SDL2 desktop app for Windows which compresses video to a
            pixel-art level quality. Mostly an excuse to play around with
            peer-to-peer UDP networking and interfacing with hardware.
          </ProjectsP>
          <ProjectsIcon src='/images/svg-1.svg' />
        </ProjectsCardRed>
        <ProjectsCardRed>
          <ProjectsIcon src='/images/svg-3.svg' />
          <ProjectsH2>Maze Generator and Solver</ProjectsH2>
          <ProjectsP>
            For this website, I want the landing page background to be a live
            maze generation followed by its automated solving. Hopefully it will
            look good as well.
          </ProjectsP>
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
          <ProjectsH2>React Social Network</ProjectsH2>
          <ProjectsP>
            This in-progress site will be full CRUD and use React, Redux and
            Firestore. Features include authentication (new account and
            third-party), followers, chat, events, photo uploads and more.
          </ProjectsP>
        </ProjectsCardAmber>
        <ProjectsCardGreen>
          <SocialLink
            href='https://github.com/rosejoshua/ParticleFun'
            target='_blank'
            aria-label='Github'
          >
            <FaGithub />
          </SocialLink>
          <ProjectsH2>Particle Fun</ProjectsH2>
          <ProjectsP>
            This is a particle fire program with individual pixel behavior
            (think pretty screensaver) written with C++ using SDL2. Concepts
            include OOP, particle-level behavior, buffer manipulation and box
            blur.
          </ProjectsP>
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
          <ProjectsH2>React Single Page Demo App</ProjectsH2>
          <ProjectsP>
            This is the tutorial app that I used as a starting point for the
            website you're on now. Link to the author's video is in the 'About'
            section of the repo.
          </ProjectsP>
        </ProjectsCardGreen>
        <ProjectsCardGreen>
          <ProjectsH2>Final Bootcamp Team Project</ProjectsH2>
          <ProjectsP>
            This was a full CRUD foodie social network with friendship/follower
            mechanics. This thing was a hot mess to be honest but I made it look
            good.
          </ProjectsP>
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
          <ProjectsH2>Bootcamp Midterm Team Project</ProjectsH2>
          <ProjectsP>
            An online marketplace for buyers and sellers hosted on AWS.
            Technologies included STS, JDBC, Gradle, JSTL, and SQL.
          </ProjectsP>
        </ProjectsCardGreen>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
