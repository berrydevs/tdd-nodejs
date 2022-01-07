import './contact.module.css';

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <div>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              tempora aliquam nam repellendus error non ex alias, quia quisquam
              molestias deserunt fuga et repellat itaque, esse, eos distinctio
              obcaecati rem.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam!
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
               <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
               <div className="form-row">
                <label htmlFor="message">Message</label>
                <input type="message" name="message" id="message" />
              </div>
              <button className="btn bloc">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Contact;
