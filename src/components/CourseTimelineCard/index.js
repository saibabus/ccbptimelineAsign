// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseDuration,
  CoureseCardTitleduraCon,
  Durationcon,
  Heading,
  CourseDiscription,
  EachTagItemcon,
  TagsListCon,
  EachTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {
    courseTitle,

    description,
    duration,
    tagsList,
  } = courseDetails
  return (
    <>
      <CoureseCardTitleduraCon>
        <Heading>{courseTitle}</Heading>
        <Durationcon>
          <AiFillClockCircle color="#171f46" />
          <CourseDuration>{duration}</CourseDuration>
        </Durationcon>
      </CoureseCardTitleduraCon>
      <CourseDiscription>{description}</CourseDiscription>
      <TagsListCon>
        {tagsList.map(eachoneis => (
          <EachTagItemcon key={eachoneis.id}>
            <EachTag>{eachoneis.name}</EachTag>
          </EachTagItemcon>
        ))}
      </TagsListCon>
    </>
  )
}
export default CourseTimelineCard
