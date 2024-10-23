import "./contact.css";
function Contact() {
  return (
    <main className="main-contact">
      <div className="contact-details">
        <h1>Contact Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa, possimus, optio maxime vero unde quis quam quidem assumenda mollitia doloremque exercitationem at consectetur voluptatum, vitae totam est amet? Molestias aspernatur odit ex similique expedita, saepe vitae? Perferendis modi obcaecati iste, voluptatum distinctio molestiae vero atque porro quo tenetur nam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, velit! A vitae magnam, officia sint tenetur incidunt harum in ipsa.</p>
      </div>
      <div className="contact">
        <form action="POST">
          <input type="text" placeholder="Enter your Name"/>
          <input type="text" placeholder="Enter a valid email address"/>
          <textarea name="message" id="message" placeholder="Enter your message"></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </main>
  )
}

export default Contact