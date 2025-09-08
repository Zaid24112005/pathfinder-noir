import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  GraduationCap, 
  Wrench, 
  Computer, 
  Building, 
  Heart, 
  BookOpen,
  MapPin,
  Clock,
  Star,
  Filter,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { indianStates, majorCities } from "@/data/locations";
import { allColleges, getCollegesByDomain } from "@/data/colleges";
import CollegeCard from "@/components/CollegeCard";
import CollegeDetailModal from "@/components/CollegeDetailModal";
import type { College } from "@/data/colleges";

interface StudentData {
  fullName: string;
  email: string;
  educationLevel: string;
  selectedSkills: string[];
}

const CourseSelection = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filterLocation, setFilterLocation] = useState("");
  const [filterInterest, setFilterInterest] = useState("");
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [showColleges, setShowColleges] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("studentData");
    if (data) {
      setStudentData(JSON.parse(data));
    } else {
      navigate("/form");
    }
  }, [navigate]);

  const class10Options = [
    {
      id: "higher-education",
      title: "Higher Education",
      description: "Continue with Class 11 & 12 for diverse career paths",
      icon: GraduationCap,
      courses: [
        { name: "Science Stream", duration: "2 years", careers: ["Engineering", "Medicine", "Research"] },
        { name: "Commerce Stream", duration: "2 years", careers: ["CA", "Business", "Finance"] },
        { name: "Arts Stream", duration: "2 years", careers: ["Law", "Journalism", "Civil Services"] },
      ]
    },
    {
      id: "diploma",
      title: "Diploma Courses",
      description: "Skill-focused programs for immediate career entry",
      icon: Wrench,
      courses: [
        { name: "Computer Engineering", duration: "3 years", careers: ["Software Developer", "System Admin"] },
        { name: "Mechanical Engineering", duration: "3 years", careers: ["Technician", "Quality Control"] },
        { name: "Civil Engineering", duration: "3 years", careers: ["Site Engineer", "Survey Technician"] },
      ]
    }
  ];

  const class12Options = [
    {
      id: "engineering",
      title: "Engineering Courses",
      description: "Technical programs leading to high-demand careers",
      icon: Computer,
      courses: [
        { 
          name: "Computer Science Engineering", 
          duration: "4 years", 
          careers: ["Software Engineer", "Data Scientist", "AI Specialist"],
          colleges: getCollegesByDomain("Engineering").slice(0, 5).map(c => c.name),
          cutoff: "95%+",
          fees: "₹2-15 lakhs"
        },
        { 
          name: "Mechanical Engineering", 
          duration: "4 years", 
          careers: ["Design Engineer", "Project Manager", "Research Scientist"],
          colleges: getCollegesByDomain("Engineering").slice(5, 10).map(c => c.name),
          cutoff: "90%+",
          fees: "₹3-12 lakhs"
        },
        { 
          name: "Civil Engineering", 
          duration: "4 years", 
          careers: ["Site Engineer", "Urban Planner", "Structural Engineer"],
          colleges: getCollegesByDomain("Engineering").slice(2, 7).map(c => c.name),
          cutoff: "85%+",
          fees: "₹2-10 lakhs"
        },
      ]
    },
    {
      id: "other-courses",
      title: "Other Courses",
      description: "Diverse academic paths in various fields",
      icon: BookOpen,
      courses: [
        { 
          name: "Bachelor of Arts (B.A.)", 
          duration: "3 years", 
          careers: ["Civil Services", "Journalist", "Teacher"],
          colleges: getCollegesByDomain("Arts").slice(0, 3).map(c => c.name),
          cutoff: "60%+",
          fees: "₹50k-3 lakhs"
        },
        { 
          name: "Bachelor of Science (B.Sc.)", 
          duration: "3 years", 
          careers: ["Research Scientist", "Lab Technician", "Further Studies"],
          colleges: getCollegesByDomain("Science").slice(0, 3).map(c => c.name),
          cutoff: "70%+",
          fees: "₹1-5 lakhs"
        },
        { 
          name: "Bachelor of Commerce (B.Com)", 
          duration: "3 years", 
          careers: ["Chartered Accountant", "Financial Analyst", "Banker"],
          colleges: getCollegesByDomain("Commerce").slice(0, 3).map(c => c.name),
          cutoff: "85%+",
          fees: "₹2-8 lakhs"
        },
      ]
    }
  ];

  const getOptionsForLevel = () => {
    if (!studentData) return [];
    return studentData.educationLevel === "class10" ? class10Options : class12Options;
  };

  const CourseCard = ({ course, category }: { course: any, category: string }) => (
    <div className="card-interactive">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{course.name}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-1" />
          {course.duration}
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-1">Career Paths</h4>
          <div className="flex flex-wrap gap-2">
            {course.careers.map((career: string, idx: number) => (
              <span key={idx} className="text-xs px-2 py-1 bg-surface rounded-full">
                {career}
              </span>
            ))}
          </div>
        </div>
        
        {course.colleges && (
          <div>
            <h4 className="text-sm font-medium mb-1">Top Colleges</h4>
            <div className="space-y-1">
              {course.colleges.slice(0, 2).map((college: string, idx: number) => (
                <div key={idx} className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3 mr-1" />
                  {college}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {course.cutoff && (
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-muted-foreground">Cut-off: </span>
              <span className="font-medium">{course.cutoff}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Fees: </span>
              <span className="font-medium">{course.fees}</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <button className="btn-oval-secondary w-full">
          View Details & Colleges
        </button>
        <button 
          onClick={() => {
            setSelectedCategory(category);
            setShowColleges(true);
          }}
          className="btn-oval-primary w-full mt-2"
        >
          Browse Colleges
        </button>
      </div>
    </div>
  );

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/form")}
            className="btn-oval-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold font-poppins mb-2">
              Hi {studentData.fullName}! 👋
            </h1>
            <p className="text-muted-foreground">
              {studentData.educationLevel === "class10" 
                ? "Choose your path after Class 10" 
                : "Explore your options after Class 12"}
            </p>
          </div>
          
          <div className="w-20"></div> {/* Spacer for center alignment */}
        </div>

        {!selectedCategory ? (
          /* Category Selection */
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {getOptionsForLevel().map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedCategory(option.id)}
                className="card-interactive cursor-pointer group min-h-[300px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <option.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">{option.title}</h2>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Available Options:</h3>
                    {option.courses.slice(0, 3).map((course, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ChevronRight className="w-3 h-3 mr-2" />
                        {course.name}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="btn-oval-primary w-full group-hover:scale-105 transition-transform">
                    Explore Options
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Course Details */
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedCategory(null)}
                className="btn-oval-secondary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Categories
              </button>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <select 
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className="bg-surface border border-border rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="">All Locations</option>
                    {indianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {getOptionsForLevel().find(opt => opt.id === selectedCategory)?.title}
              </h2>
              <p className="text-muted-foreground">
                {getOptionsForLevel().find(opt => opt.id === selectedCategory)?.description}
              </p>
            </div>
            
            {!showColleges ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getOptionsForLevel()
                  .find(opt => opt.id === selectedCategory)
                  ?.courses.map((course, idx) => (
                    <CourseCard key={idx} course={course} category={selectedCategory} />
                  ))}
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setShowColleges(false)}
                    className="btn-oval-secondary"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Courses
                  </button>
                  <h3 className="text-xl font-semibold">Top Colleges</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getCollegesByDomain(
                    selectedCategory === "engineering" ? "Engineering" : 
                    selectedCategory === "other-courses" ? "Arts" : "Engineering"
                  )
                  .filter(college => 
                    !filterLocation || college.state === filterLocation
                  )
                  .slice(0, 12)
                  .map((college) => (
                    <CollegeCard
                      key={college.id}
                      college={college}
                      onViewDetails={setSelectedCollege}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
       
       {/* College Detail Modal */}
       {selectedCollege && (
         <CollegeDetailModal
           college={selectedCollege}
           onClose={() => setSelectedCollege(null)}
         />
       )}
      </div>
    </div>
  );
};

export default CourseSelection;