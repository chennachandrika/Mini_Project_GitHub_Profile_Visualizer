import RepositoryLanguagesItem from "../RepositoryLanguagesItem";
import LookUp from "../LoginPage/resources/LookUp.png";
import {
  RepositoryTitle,
  RepositoryDescription,
  RepositoryLanguages,
  RepositoryInfo,
  RepositoryInfoContainer,
  RepositoryInfoCount,
  RepositoryInfoIcon,
  LookUPLink,
  LookUPImg
} from "./styledComponents";

const RepositoryCard = (props) => {
  const {
    title,
    description,
    languagesUrl,
    starsCount,
    forksCount,
    htmlUrl
  } = props.repoDetails;
  return (
    <>
      <RepositoryTitle>
        {title}
        <>
          {htmlUrl && (
            <LookUPLink href={htmlUrl} target="_blank">
              <LookUPImg src={LookUp} />
            </LookUPLink>
          )}
        </>
      </RepositoryTitle>
      <RepositoryDescription>{description}</RepositoryDescription>

      <RepositoryLanguages>
        {<RepositoryLanguagesItem languagesUrl={languagesUrl} />}
      </RepositoryLanguages>
      <RepositoryInfo>
        <RepositoryInfoContainer>
          <RepositoryInfoIcon
            src="https://uploads.codesandbox.io/uploads/user/3b4bf1a2-79b9-4319-933d-c5a16235ae34/SO7Q-Star.png"
            alt="git star icon"
          />
          <RepositoryInfoCount>{starsCount}</RepositoryInfoCount>
        </RepositoryInfoContainer>
        <RepositoryInfoContainer>
          <RepositoryInfoIcon
            src="https://uploads.codesandbox.io/uploads/user/3b4bf1a2-79b9-4319-933d-c5a16235ae34/1asD-Git.png"
            alt="git fork icon"
          />
          <RepositoryInfoCount>{forksCount}</RepositoryInfoCount>
        </RepositoryInfoContainer>
      </RepositoryInfo>
    </>
  );
};

export default RepositoryCard;
