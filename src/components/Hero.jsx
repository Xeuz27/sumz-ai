import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-4">
        <img src={logo} alt="sumz-logo" className="w-28 object-contain" />
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/adrianhajdin/project_ai_summarizer", "_blank")
          }
          className='black_btn hover:cursor-pointer'
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GTTP-4</span>
      </h1>
      <h2 className="desc">simplify your reading with summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries</h2>
    </header>
  );
};

export default Hero;
