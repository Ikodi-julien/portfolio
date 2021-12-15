import { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function OppositeContentTimeline() {
  return (
    <Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>2021</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Titre pro développeur web et web mobile
            <br />
            Certification Opquast 890/1000
            <br />
            Développement de plusieurs applications avec Next.JS, Vue.JS, SQL,
            NoSQL...
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>2019</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Première app complète, avec PHP</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>2018</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Référent paramètrages, développement des fonctionnalités (côté
            client) et formation du personnel lors d&apos;un projet de
            changement de logiciel professionnel (150 salariés, groupe de
            travail sur 18 mois).
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>2005</TimelineOppositeContent>
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
          <TimelineOppositeContent>2000</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Technicien Qualité dans les industries plastique, automobile et TP.
            <br />
            Audits de processus, contrôles, analyses, formation du personnel...
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>1996</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Formation initiale en Chimie
            <br />
            Travail en 3/8, industrie métallurgique...
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Fragment>
  );
}
