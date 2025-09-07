import { useNavigate } from "react-router-dom";
import { GraduationCap, Target, Users, BookOpen, ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "AI-powered recommendations based on your interests, skills, and academic performance."
    },
    {
      icon: BookOpen,
      title: "Course Mapping",
      description: "Detailed information about courses, career paths, and college options."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Access to career counselors and educational experts for personalized advice."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
              EduGuide Platform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your personalized career guidance platform designed to help students make informed decisions after Class 10 and Class 12.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate("/")}
              className="btn-oval-primary text-lg px-8 py-4"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate("/courses")}
              className="btn-oval-secondary text-lg px-8 py-4"
            >
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins">
            Why Choose EduGuide?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-interactive text-center">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins">
            How It Works
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Tell Us About Yourself",
                description: "Share your academic background, interests, and career aspirations through our interactive form."
              },
              {
                step: "02",
                title: "Explore Your Options",
                description: "Discover courses, career paths, and colleges tailored to your education level and interests."
              },
              {
                step: "03",
                title: "Make Informed Decisions",
                description: "Use our detailed information and expert guidance to choose the right path for your future."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Ready to Discover Your Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have found their perfect career path with EduGuide.
          </p>
          <button 
            onClick={() => navigate("/")}
            className="btn-oval-primary text-lg px-12 py-5 animate-glow"
          >
            <Sparkles className="mr-2 w-5 h-5" />
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
