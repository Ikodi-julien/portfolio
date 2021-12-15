import { Fragment } from "react";
import { Text } from "../../styled_components";
import { StyledTag, TagContainer } from "../Tag/TagStyles";
import { AppTechCard, AppTechTitle } from "./AppDetailsStyles";

const AppTech = ({ tech, title }) => {
  return (
    <AppTechCard>
      <AppTechTitle>{title}</AppTechTitle>

      {tech.lang && tech.lang.length ? (
        <Fragment>
          <Text>Language{`${tech.lang.length > 1 ? "s" : ""}`}</Text>
          <TagContainer>
            {tech.lang.map((lang) => (
              <StyledTag key={lang} text={lang} />
            ))}
          </TagContainer>
        </Fragment>
      ) : null}

      {tech.packages && tech.packages.length ? (
        <Fragment>
          <Text>Package{`${tech.packages.length > 1 ? "s" : ""}`}</Text>
          <TagContainer>
            {tech.packages.map((pkg) => (
              <StyledTag key={pkg} text={pkg} />
            ))}
          </TagContainer>
        </Fragment>
      ) : null}

      {tech.db && tech.db.length ? (
        <Fragment>
          <Text>Base{`${tech.db.length > 1 ? "s" : ""}`} de données</Text>
          <TagContainer>
            {tech.db.map((db) => (
              <StyledTag key={db} text={db} />
            ))}
          </TagContainer>
        </Fragment>
      ) : null}

      {tech.test && (
        <Fragment>
          <Text>Test</Text>
          <TagContainer>
            {tech.test.map((test) => (
              <StyledTag key={test} text={test} />
            ))}
          </TagContainer>
        </Fragment>
      )}

      {tech.test && (
        <Fragment>
          <Text>Test</Text>
          <TagContainer>
            <StyledTag key={tech.test} text={tech.test} />
          </TagContainer>
        </Fragment>
      )}

      {tech.host && (
        <Fragment>
          <Text>Hébergement</Text>
          <TagContainer>
            <StyledTag key={tech.host} text={tech.host} />
          </TagContainer>
        </Fragment>
      )}

      {tech.proxy && (
        <Fragment>
          <Text>Serveur / Proxy</Text>
          <TagContainer>
            <StyledTag text={tech.proxy} />
          </TagContainer>
        </Fragment>
      )}

      {tech.transfer_protocol && (
        <Fragment>
          <Text>Protocole</Text>
          <TagContainer>
            <StyledTag text={tech.transfer_protocol} />
          </TagContainer>
        </Fragment>
      )}
    </AppTechCard>
  );
};
export default AppTech;
