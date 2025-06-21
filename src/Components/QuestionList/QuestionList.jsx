import QuestionListItem from '../QuestionListItem/QuestionListItem'

function QuestionList({ questions, selectedId, onSelect }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {questions.map(q => (
        <QuestionListItem
          key={q.id}
          question={q}
          selected={q.id === selectedId}
          onClick={() => onSelect(q.id)}
        />
      ))}
    </ul>
  )
}

export default QuestionList