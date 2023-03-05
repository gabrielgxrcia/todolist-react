const Header = () => {
  const headerStyle = {
    color: '#eee',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div style={headerStyle}>
      <h1>Lista de Tarefas</h1>
    </div>
  )
}

export default Header
