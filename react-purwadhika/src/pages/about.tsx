import './about.css'

function About() {
  return (
    <main className="main-about">
      <h1>Profile</h1>
      <p className='text-profile'>I'm creative Javascript webdeveloper</p>
      <div className="content">
        <div className="about-me">
          <h2>About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, id dolorum, corporis illum pariatur quisquam, voluptate perferendis animi dolore eligendi nostrum temporibus aperiam nam ducimus esse ab. Eius vero iste eaque eum animi minima possimus</p>
        </div>
        <div className="image"></div>
        <div className="details">
          <h3>Details</h3>
          <h3>Name :</h3>
          <p>Hanif Ahmad Rizqullah</p>
          <h3>Age :</h3>
          <p>33 years</p>
          <h3>Location :</h3>
          <p>Sukaasih, Bandung, Jawabarat</p>
        </div>
      </div>
    </main>
  )
}

export default About