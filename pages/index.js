import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    const reqBody = { email, feedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Enter Your Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="email@email.com"
            ref={emailInputRef}
          />
        </div>
        <div>
          <label htmlFor="feedback">Enter Your Feedback</label>
          <textarea
            rows={5}
            id="feedback"
            placeholder="feedback ..."
            ref={feedbackInputRef}
          />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
