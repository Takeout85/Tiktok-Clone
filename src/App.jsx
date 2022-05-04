import FeedVideos from './components/FeedVideos'
import { Route } from 'wouter'
import Upload from './pages/Upload/index'
import './App.css'

function App () {
  return (
    <div className='App'>
      <main>
        <Route path='/'>
          <FeedVideos />
        </Route>

        <Route path='/upload'>
          <Upload />
        </Route>
      </main>
    </div>
  )
}

export default App
