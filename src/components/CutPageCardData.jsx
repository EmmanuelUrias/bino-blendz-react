import React from 'react'

function CutPageCardData() {
  

  return (
    <div>
                      <CardItem 
                    key={data.id}
                    id={data.id}
                    src={data.src}
                    text={data.text}
                    label={data.label}
                    path={data.path}
                     />
    </div>
  )
}

export default CutPageCardData