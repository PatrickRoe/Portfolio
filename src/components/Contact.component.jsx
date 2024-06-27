import "./Contact.style.css"


export function Contact() {
  return (
    <>
    <section id="contact" className="contact-section">
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact me!</h1>
            <p className="py-6">
              Let's create something amazing together! Reach out to discuss your
              project ideas, ask questions, or just say hi. I'm excited to
              connect and collaborate with you!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              action="https://formspree.io/f/mdknnbod"
              method="POST"
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Firstname</span>
                </label>
                <input
                  type="text"
                  placeholder="your firstname"
                  className="input input-bordered"
                  name="firstname"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Bio"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
