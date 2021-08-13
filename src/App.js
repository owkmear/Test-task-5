import Routes from './routes/index'
import Header from './components/Header'

function App(props) {
  return (
    <div className="layout">
      <Header />
      <main>
        <Routes {...props} />
      </main>
    </div>
  )
}

export default App
