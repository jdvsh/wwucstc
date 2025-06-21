function QuestionListItem({ question, selected, onClick }) {
  return (
    <li style={{ marginBottom: 4 }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '1rem 1rem',
          background: selected ? 'var(--color-selected)' : 'var(--color-button-bg)',
          color: selected ? 'var(--color-text)' : 'var(--color-button-text)',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          transition: 'background 0.15s',
        }}
      >
        {question.title}
      </button>
    </li>
  )
}

export default QuestionListItem