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
            2005
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Diplôme d&apos;état Infirmier
            <br />
            Exercice en milieu hospitalier, dans l&apos;industrie
            agro-alimentaire puis à la Médecine du Travail.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ width, maxWidth, minWidth }}>
            2000
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Technicien Qualité dans les industries plastique (automobile),
            mécanique et Travaux Publics.
            <br />
            Normes ISO, audits de processus, analyses, formation du personnel...
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ width, maxWidth, minWidth }}>
            1996
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Formation initiale en Chimie
            <br />
            Travail en 3/8 dans l&apos;industrie métallurgique.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Fragment>
  );
}
