import banner from './assets/banner.jpg'; // adjust the path if needed
import './index.css'; // make sure your CSS is imported

function App() {
  return (
    <>
      <section
        className="parallax"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="overlay">
          <h1>Welcome to Chicago</h1>
          <p>Your adventure starts here</p>
        </div>
      </section>

      <main>
        <section style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Explore the City</h2>
          <p>Scroll down to discover more about Chicago’s best spots.</p>
        </section>
      </main>
    </>
  );
}

export default App;
