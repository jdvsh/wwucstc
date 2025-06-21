import { useState } from 'react'
// import './App.css'
import QuestionList from '../QuestionList/QuestionList'

const questions = [
  { id: 1, title: "How do I use useState in React?" },
  { id: 2, title: "What is a closure in JavaScript?" },
  { id: 3, title: "How do I center a div with CSS?" }
]

function App() {
  const [selectedId, setSelectedId] = useState(null)

  const selectedQuestion = questions.find(q => q.id === selectedId)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{
        minWidth: 250,
        borderRight: '1px solid var(--color-border)',
        padding: '1rem',
        textAlign: 'left',
        background: 'var(--color-sidebar-bg)'
      }}>
        <h2>Questions</h2>
        <QuestionList
          questions={questions}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </aside>
      <main style={{ flex: 1, padding: '2rem', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        {selectedQuestion ? (
          <div>
            <h2>{selectedQuestion.title}</h2>
            <p>Details about this question will go here.</p>
          </div>
        ) : (
          <p>Select a question to see details.</p>
        )}
      </main>
    </div>
  )
}

export default App
