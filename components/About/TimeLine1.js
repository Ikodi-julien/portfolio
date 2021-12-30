import { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function OppositeContentTimeline() {
  const width = "20%";
  const maxWidth = "80px";
  const minWidth = "80px";

  return (
    <Fragment>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent style={{ width, maxWidth, minWidth }}>
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Titre pro développeur web et web mobile, appréciation du jury
            &quot;Excellent&quot;
            <br />
            Certification Opquast 890/1000
            <br />
            Développement de plusieurs applications avec Next.JS, React, Vue.JS,
            SQL, NoSQL...
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={{ width, maxWidth, minWidth }}>
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Auto-formation PHP, MySQL et Wordpress
            <br />
            Premières applications complètes, Multiplicorne et Chronofit.
            <br />
            Création du nom de domaine <strong>Ikodi.eu</strong>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={{ width, maxWidth, minWidth }}>
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Auto-formation Python, réseaux TCP/IP, HTTP
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ width, maxWidth, minWidth }}>
            2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Référent paramètrages, développement des fonctionnalités (côté
            client) et formation du personnel lors d&apos;un projet interne de
            changement de logiciel professionnel (150 salariés, groupe de
            travail sur 18 mois).
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Fragment>
  );
}
