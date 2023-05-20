import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="about">
      <h1 className="about-title">Welcome to Sweeter</h1>

      <p className="about-info">
        Sweeter - the app that brings you closer to your favorite celebrities
        and influencers! 🌟 Follow your idols, stay tuned on their latest
        updates, and get a glimpse into their sweeter moments. Experience a
        one-of-a-kind connection like never before. 🤩✨
      </p>

      <Link to="/feed" className="button about-btn">
        Lets start!
      </Link>
    </div>
  );
};
