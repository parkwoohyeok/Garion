import Landing from '@pages/Landing'
import Section from './Section'

const SECTIONS = [
  (props: any) => <Landing />,
  (props: any) => <Section {...props} index={1} />,
  (props: any) => <Section {...props} index={2} />,
  (props: any) => <Section {...props} index={3} />,
]

export default SECTIONS
