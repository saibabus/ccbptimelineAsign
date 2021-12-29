// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import {
  ProjectTimeLineCon,
  Visitlink,
  ProjectDuration,
  ProjectDiscription,
  DurationCon,
  ProjectTitle,
  ProjectTitledurationCon,
  ProjectImage,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <ProjectTimeLineCon>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitledurationCon>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationCon>
          <AiFillCalendar color="#171f46" />
          <ProjectDuration>{duration}</ProjectDuration>
        </DurationCon>
      </ProjectTitledurationCon>
      <ProjectDiscription>{description}</ProjectDiscription>
      <Visitlink href={projectUrl}>Visit</Visitlink>
    </ProjectTimeLineCon>
  )
}
export default ProjectTimelineCard
