import PassProp from './PassProp'
import DestructingProps from './DestructingProps'
import ChildrenProp from './ChildrenProp'
import NavigationButtons from '../Shared/NavigationButtons'

function Index() {
  const name = 'John'
  const age = 20
  return (
    <div className="module2-container">
      <div className="module2-title">Module 2</div>

      <div>
        <PassProp name={name} />
        <DestructingProps name={name} age={age} />
        <ChildrenProp>
          <h4 style={{marginLeft: '20px'}}>I am a child prop came from far away.</h4>
        </ChildrenProp>
      </div>

      <NavigationButtons previous="/module1" next="/module3" />

    </div>
  )
}

export default Index