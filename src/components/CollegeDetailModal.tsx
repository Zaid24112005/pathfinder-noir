import { useState } from "react";
import { X, MapPin, Star, ExternalLink, Navigation, Award, Calendar, DollarSign, Users, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react";
import { College } from "@/data/colleges";

interface CollegeDetailModalProps {
  college: College;
  onClose: () => void;
}

const CollegeDetailModal = ({ college, onClose }: CollegeDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'courses' | 'facilities'>('overview');
  const [imageError, setImageError] = useState(false);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${college.coordinates.lat},${college.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const handleVisitWebsite = () => {
    window.open(college.website, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'courses', label: 'Courses' },
    { id: 'facilities', label: 'Facilities' }
  ];

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="relative">
          {!imageError ? (
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-64 object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-64 bg-surface flex items-center justify-center">
              <Award className="w-16 h-16 text-muted-foreground" />
            </div>
          )}
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* College Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">{college.name}</h1>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {college.location}, {college.state}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span>{college.reviews.rating} ({college.reviews.totalReviews} reviews)</span>
                  </div>
                  {college.ranking.nirf && (
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-primary mr-1" />
                      <span>NIRF #{college.ranking.nirf}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleGetDirections}
                  className="btn-oval-secondary"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Directions
                </button>
                <button
                  onClick={handleVisitWebsite}
                  className="btn-oval-primary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Established</div>
                  <div className="font-semibold">{college.established}</div>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Fees Range</div>
                  <div className="font-semibold">₹{(college.fees.min / 100000).toFixed(1)}L - ₹{(college.fees.max / 100000).toFixed(1)}L</div>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Type</div>
                  <div className="font-semibold">{college.type}</div>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm text-muted-foreground">Cut-off</div>
                  <div className="font-semibold text-xs">{college.cutoff}</div>
                </div>
              </div>

              {/* Domains */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Domains</h3>
                <div className="flex flex-wrap gap-2">
                  {college.domain.map((domain, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accreditation */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Accreditation</h3>
                <div className="flex flex-wrap gap-2">
                  {college.accreditation.map((acc, idx) => (
                    <span key={idx} className="px-3 py-1 bg-success text-success-foreground rounded-full text-sm">
                      {acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Overall Rating */}
              <div className="text-center p-6 bg-surface rounded-lg">
                <div className="text-4xl font-bold mb-2">{college.reviews.rating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(college.reviews.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-muted-foreground">Based on {college.reviews.totalReviews} reviews</div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-2" />
                  What Students Love
                </h3>
                <ul className="space-y-2">
                  {college.reviews.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concerns */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 text-warning mr-2" />
                  Areas for Improvement
                </h3>
                <ul className="space-y-2">
                  {college.reviews.concerns.map((concern, idx) => (
                    <li key={idx} className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-warning mr-2 mt-0.5 flex-shrink-0" />
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Available Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {college.courses.map((course, idx) => (
                  <div key={idx} className="p-4 bg-surface rounded-lg">
                    <h4 className="font-medium">{course}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Duration varies by program level
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'facilities' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Campus Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {college.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center p-3 bg-surface rounded-lg">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailModal;