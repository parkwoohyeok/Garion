import Landing from '@pages/Landing'
import Ceo from '@pages/Ceo'
import BusinessObjective from '@pages/BusinessObjective'
import News from '@pages/News'
import RoadToCome from '@pages/RoadToCome'

const SECTIONS = [
  (props: any) => <Landing />,
  (props: any) => <Ceo />,
  (props: any) => <BusinessObjective />,
  (props: any) => <News />,
  (props: any) => <RoadToCome />,
]

export default SECTIONS
