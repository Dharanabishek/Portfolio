function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-10 text-center"
    >

      <h2 className="text-4xl font-bold text-cyan-400 mb-8">
        Contact
      </h2>

      <div className="space-y-4 text-lg">

        <p className="text-gray-400">
          Email:
          <a
            href="mailto:dharanabishek1@gmail.com"
            className="text-cyan-400 ml-2 hover:underline"
          >
            dharanabishek1@gmail.com
          </a>
        </p>

        <p className="text-gray-400">
          GitHub:
          <a
            href="https://github.com/Dharanabishek"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Visit GitHub
          </a>
        </p>

        <p className="text-gray-400">
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/dharanabishek/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Visit LinkedIn
          </a>
        </p>

      </div>

    </section>
  );
}

export default Contact;