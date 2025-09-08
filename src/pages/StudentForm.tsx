import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, BookOpen, Code, Database, Laptop, Bookmark, Info, Palette, Camera, Music, Gamepad2, Briefcase, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  email: string;
  educationLevel: string;
  markSheet: File | null;
  selectedSkills: string[];
}

const StudentForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    educationLevel: "",
    markSheet: null,
    selectedSkills: [],
  });
  const [showSkillModal, setShowSkillModal] = useState<string | null>(null);

  const skills = [
    {
      name: "MongoDB",
      icon: Database,
      description: "Master NoSQL database management and modern data storage solutions.",
      careerRelevance: "High demand in web development, data engineering, and cloud computing roles.",
      learningTime: "6-8 weeks",
      benefits: ["Database design", "Data modeling", "Scalable applications"]
    },
    {
      name: "Python",
      icon: Code,
      description: "Learn the most versatile programming language for web development, AI, and data science.",
      careerRelevance: "Essential for AI/ML, web development, automation, and data analysis careers.",
      learningTime: "8-12 weeks",
      benefits: ["Web development", "Data analysis", "Machine learning", "Automation"]
    },
    {
      name: "JavaScript",
      icon: Laptop,
      description: "Master the language of the web for interactive and dynamic applications.",
      careerRelevance: "Critical for front-end, back-end, and full-stack development positions.",
      learningTime: "10-14 weeks",
      benefits: ["Web development", "Mobile apps", "Server-side programming"]
    },
    {
      name: "Web Development",
      icon: BookOpen,
      description: "Build modern, responsive websites and web applications from scratch.",
      careerRelevance: "High demand across all industries for digital transformation.",
      learningTime: "12-16 weeks",
      benefits: ["HTML/CSS", "React", "Node.js", "Responsive design"]
    },
    {
      name: "Graphic Design",
      icon: Palette,
      description: "Create stunning visual content for digital and print media using industry-standard tools.",
      careerRelevance: "Essential for marketing, advertising, branding, and digital media industries.",
      learningTime: "8-12 weeks",
      benefits: ["Adobe Creative Suite", "Brand identity", "UI/UX design", "Visual communication"]
    },
    {
      name: "Photography",
      icon: Camera,
      description: "Master the art of capturing compelling images for various professional purposes.",
      careerRelevance: "Growing demand in social media, e-commerce, journalism, and creative industries.",
      learningTime: "6-10 weeks",
      benefits: ["Photo editing", "Composition", "Lighting", "Portfolio development"]
    },
    {
      name: "Music Production",
      icon: Music,
      description: "Learn to create, record, and produce professional-quality music and audio content.",
      careerRelevance: "Opportunities in entertainment, advertising, gaming, and content creation.",
      learningTime: "10-16 weeks",
      benefits: ["Digital audio workstations", "Sound design", "Mixing", "Audio engineering"]
    },
    {
      name: "Game Development",
      icon: Gamepad2,
      description: "Build engaging games for mobile, web, and desktop platforms using modern engines.",
      careerRelevance: "Rapidly growing gaming industry with diverse career opportunities.",
      learningTime: "12-20 weeks",
      benefits: ["Unity/Unreal Engine", "Game design", "Programming", "3D modeling"]
    },
    {
      name: "Digital Marketing",
      icon: Briefcase,
      description: "Master online marketing strategies including SEO, social media, and content marketing.",
      careerRelevance: "Critical skill for all businesses in the digital age with high job demand.",
      learningTime: "8-12 weeks",
      benefits: ["SEO/SEM", "Social media marketing", "Analytics", "Content strategy"]
    },
    {
      name: "Foreign Languages",
      icon: Globe,
      description: "Learn popular languages like Spanish, French, German, or Japanese for global opportunities.",
      careerRelevance: "Valuable in international business, tourism, translation, and diplomatic careers.",
      learningTime: "16-24 weeks",
      benefits: ["Cultural understanding", "Global communication", "Translation skills", "International opportunities"]
    },
  ];

  const handleSkillToggle = (skillName: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skillName)
        ? prev.selectedSkills.filter(s => s !== skillName)
        : [...prev.selectedSkills, skillName]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, markSheet: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.educationLevel) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Profile Created!",
      description: "Let's explore your course options.",
    });

    // Store form data in localStorage for now
    localStorage.setItem("studentData", JSON.stringify(formData));
    navigate("/courses");
  };

  const SkillModal = ({ skill }: { skill: typeof skills[0] }) => (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-md w-full p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <skill.icon className="w-8 h-8 text-primary" />
          <h3 className="text-xl font-semibold">{skill.name}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4">{skill.description}</p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm mb-1">Career Relevance</h4>
            <p className="text-sm text-muted-foreground">{skill.careerRelevance}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-1">Learning Time</h4>
            <p className="text-sm text-muted-foreground">{skill.learningTime}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-1">Key Benefits</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside">
              {skill.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => {
              handleSkillToggle(skill.name);
              setShowSkillModal(null);
            }}
            className="btn-oval-primary flex-1"
          >
            <Bookmark className="w-4 h-4 mr-2" />
            Bookmark Skill
          </button>
          <button
            onClick={() => setShowSkillModal(null)}
            className="btn-oval-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold font-poppins mb-4">Tell Us About Yourself</h1>
          <p className="text-muted-foreground text-lg">
            Help us create a personalized learning path just for you
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          {/* Basic Information */}
          <div className="card-interactive">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Enter your full name"
                  className="input-modern"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Gmail ID *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@gmail.com"
                  className="input-modern"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Current Education Level *</label>
                <select
                  value={formData.educationLevel}
                  onChange={(e) => setFormData(prev => ({ ...prev, educationLevel: e.target.value }))}
                  className="input-modern"
                  required
                >
                  <option value="">Select your level</option>
                  <option value="class10">Completed Class 10</option>
                  <option value="class12">Completed Class 12</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Upload Mark Sheet (Optional)</label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="input-modern file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  <Upload className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="card-interactive">
            <h2 className="text-xl font-semibold mb-4">Extra Learning Skills</h2>
            <p className="text-muted-foreground mb-6">
              Select skills you're interested in learning. Click on any skill to see detailed information.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill.name} className="relative">
                  <button
                    type="button"
                    onClick={() => setShowSkillModal(skill.name)}
                    className={`skill-button w-full justify-between ${
                      formData.selectedSkills.includes(skill.name)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : ''
                    }`}
                  >
                    <div className="flex items-center">
                      <skill.icon className="w-4 h-4 mr-2" />
                      {skill.name}
                    </div>
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn-oval-primary text-lg px-12 py-4">
              Continue to Course Selection
            </button>
          </div>
        </form>

        {/* Skill Modal */}
        {showSkillModal && (
          <SkillModal skill={skills.find(s => s.name === showSkillModal)!} />
        )}
      </div>
    </div>
  );
};

export default StudentForm;