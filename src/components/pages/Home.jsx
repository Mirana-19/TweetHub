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
            <p className="mb-5 ">
              "Discover a dynamic social platform where users share thoughts and
              experiences in short, engaging tweets. Connect, explore trending
              topics, and stay updated on the latest conversations. Whether
              sharing your voice or scrolling through the buzz, our platform
              offers a vibrant space for expressing ideas and connecting with a
              diverse community."
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
