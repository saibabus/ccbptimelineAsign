// Write your code here
import {Chrono} from 'react-chrono'
import {
  Heading,
  TimelineCon,
  SpanHeading,
  HeadingCont,
  TimelineContainer,
} from './styledComponents'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const rendertimeLineCard = eachtimeLine => {
    if (eachtimeLine.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard
          key={eachtimeLine.id}
          projectDetails={eachtimeLine}
        />
      )
    }

    return (
      <CourseTimelineCard key={eachtimeLine.id} courseDetails={eachtimeLine} />
    )
  }

  return (
    <TimelineContainer>
      <TimelineCon>
        <HeadingCont>
          <Heading>
            MY JOURNEY OF
            <br />
            <SpanHeading>CCBP 4.0</SpanHeading>
          </Heading>
        </HeadingCont>
        <Chrono
          theme={{
            secondary: 'red',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachtimeLine =>
            rendertimeLineCard(eachtimeLine),
          )}
        </Chrono>
      </TimelineCon>
    </TimelineContainer>
  )
}
export default TimelineView
