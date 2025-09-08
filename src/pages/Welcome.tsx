import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Sparkles, ArrowLeft } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState("");
  const fullText = "Your future starts here!";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-8 left-8">
        <button
          onClick={() => navigate("/about")}
          className="btn-oval-secondary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-foreground/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-foreground/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-foreground/20 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="text-center max-w-2xl animate-fade-in">
        {/* Logo/Icon */}
        <div className="mb-8 animate-glow">
          <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        {/* Main heading with typing effect */}
        <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
          <span className="animate-typing">{typingText}</span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-slide-up font-inter">
          Discover your perfect career path with personalized guidance designed just for you.
        </p>

        {/* Next Button */}
        <button
          onClick={() => navigate("/form")}
          className="btn-oval-primary group text-lg px-12 py-5 animate-slide-up delay-300"
        >
          Let's Begin
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Additional info */}
        <div className="mt-16 animate-fade-in delay-700">
          <p className="text-sm text-muted-foreground">
            ✨ Personalized recommendations • 🎯 Career mapping • 📚 Course guidance
          </p>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-10 opacity-30 animate-bounce delay-1000">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
      </div>
      <div className="absolute top-10 right-10 opacity-30 animate-bounce delay-1500">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default Welcome;