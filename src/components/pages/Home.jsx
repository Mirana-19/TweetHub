import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/tweets');
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              "Explore a vibrant social platform where users share their
              thoughts and experiences in short, engaging tweets. Connect with
              others, discover trending topics, and stay updated on the latest
              conversations. Whether you're here to share your voice or simply
              scroll through the buzz, our platform provides a dynamic space for
              expressing ideas and connecting with a diverse community."
            </p>
            <button className="btn btn-primary" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
