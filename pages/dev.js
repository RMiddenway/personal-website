import PageContent from '../components/page/page-content';
import PageHeader from '../components/page/page-header';
import SquareButton from '../components/page/square-button';
import SquareButtonContainer from '../components/page/square-button-container';

const Dev = () => {
  return (
    <>
      <div className="page page__portfolio">
        <div className="container container__col">
          <PageHeader title="Development" />
          <PageContent>
            <p>
              Having an extensive background in audiovisual communication, I am
              passionate about UI/UX design and data exploration and
              visualisation.
            </p>
            <p>
              I recently graduated from a bachelors in computer science at
              Deakin University, and have been working on Linkmate, a peer-based
              mental wellness app.
            </p>
            <p>
              I am familiar with various stacks and languages, and am constantly
              learning more. Python, Javascript, Typescript, C#, HTML, CSS,
              ReactJS, AngularTS, NodeJS, Firebase, MongoDB, SQL.
            </p>
          </PageContent>
        </div>

        <SquareButtonContainer>
          <SquareButton
            text="Github"
            onClick={() =>
              window.open("https://github.com/RMiddenway", "_blank")?.focus()
            }
          />
          <SquareButton
            text="TBA"
            onClick={() =>
              window
                .open(
                  "https://www.imdb.com/name/nm2296043/?ref_=nv_sr_srsg_0",
                  "_blank"
                )
                ?.focus()
            }
          />
          <SquareButton
            text="TBA"
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
    </>
  );
};

export default Dev;
