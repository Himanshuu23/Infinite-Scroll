import { useCallback, useRef, useState } from "react"
import './App.css'

export default function App() {
  const compRef = useRef(null)
  const containerRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      observer.observe(entry)
    })

    observer.observe(compRef.current)
  })

  function addComp() {
    if (containerRef.current && !isAdded) {
      for ( let i = 0; i < 10; i++) {
        const newChild = document.createElement('div')
        newChild.innerHTML = 'New Component'
        containerRef.current.appendChild(newChild)
      }
      setIsAdded(true)
    }
  }

  return (
    <>
      <div className={isVisible? 'container additional' : 'container'}></div>
      <div ref={containerRef} className="component-container">
        <div ref={compRef} className={isVisible? 'show' : 'hide'}>Component</div>
      </div>
    </>
  )
}