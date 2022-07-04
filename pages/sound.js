import React, { useState } from 'react';

import PageContent from '../components/page/page-content';
import PageHeader from '../components/page/page-header';
import SquareButton from '../components/page/square-button';
import SquareButtonContainer from '../components/page/square-button-container';
import VimeoModal from '../components/vimeo-modal/vimeo-modal';

const Sound = () => {
  const [currentModal, setCurrentModal] = useState(null);

  return (
    <>
      <div className="page page__portfolio">
        <div className="container container__col">
          <PageHeader title="Sound Design" />
          <PageContent>
            <p>
              Over 15 years of experience in sound design and post production
              for cinema, television, podcast, and other forms of audiovisual
              media.
            </p>
            <p>
              I have worked with a wide range of clients, from independent
              filmmakers to large corporations, to tech startups, to television
              production studios.
            </p>
            <p>
              The most important factor in achieving a great product is
              communication, so my focus is on gaining a thorough understanding
              of the project. The rest will follow naturally.
            </p>
          </PageContent>
        </div>

        <SquareButtonContainer>
          <SquareButton
            text="Sound Design"
            onClick={() => setCurrentModal("design")}
          />
          <SquareButton text="Drama" onClick={() => setCurrentModal("drama")} />
          <SquareButton
            text="IMDB"
            onClick={() =>
              window
                .open(
                  "https://www.imdb.com/name/nm2296043/?ref_=nv_sr_srsg_0",
                  "_blank"
                )
                ?.focus()
            }
          ></SquareButton>
        </SquareButtonContainer>
      </div>
      
      <VimeoModal
        titleText="Design Reel"
        isShowing={currentModal === "design"}
        onClose={() => setCurrentModal(null)}
        link={"https://player.vimeo.com/video/678098772?h=c44a23b727"}
      />
      <VimeoModal
        titleText="Drama Reel"
        isShowing={currentModal === "drama"}
        onClose={() => setCurrentModal(null)}
        link={"https://player.vimeo.com/video/410770878"}
      />
    </>
  );
};

export default Sound;
