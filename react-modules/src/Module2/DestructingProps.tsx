function DestructingProps({name, age}: {name: string, age: number}) {
  return (
    <div>Destructing Props: {name} {age}</div>
  )
}

export default DestructingProps