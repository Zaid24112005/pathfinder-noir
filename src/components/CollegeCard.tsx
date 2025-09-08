import { useState } from "react";
import { MapPin, Star, ExternalLink, Navigation, Users, Award, Calendar, DollarSign } from "lucide-react";
import { College } from "@/data/colleges";

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
}

const CollegeCard = ({ college, onViewDetails }: CollegeCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${college.coordinates.lat},${college.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const handleVisitWebsite = () => {
    window.open(college.website, '_blank');
  };

  return (
    <div className="card-interactive group">
      {/* College Image */}
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        {!imageError ? (
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-surface flex items-center justify-center">
            <Award className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            college.type === 'Government' 
              ? 'bg-success text-success-foreground' 
              : college.type === 'Private'
              ? 'bg-warning text-warning-foreground'
              : 'bg-primary text-primary-foreground'
          }`}>
            {college.type}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
          <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
          <span className="text-xs font-medium">{college.reviews.rating}</span>
        </div>
      </div>

      {/* College Info */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold line-clamp-2 mb-1">{college.name}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-3 h-3 mr-1" />
            {college.location}, {college.state}
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1 text-muted-foreground" />
            <span>Est. {college.established}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1 text-muted-foreground" />
            <span>{college.reviews.totalReviews} reviews</span>
          </div>
        </div>

        {/* Ranking */}
        {college.ranking.nirf && (
          <div className="flex items-center text-sm">
            <Award className="w-3 h-3 mr-1 text-primary" />
            <span>NIRF Rank: #{college.ranking.nirf}</span>
          </div>
        )}

        {/* Fees */}
        <div className="flex items-center text-sm">
          <DollarSign className="w-3 h-3 mr-1 text-muted-foreground" />
          <span>₹{(college.fees.min / 100000).toFixed(1)}L - ₹{(college.fees.max / 100000).toFixed(1)}L</span>
        </div>

        {/* Domains */}
        <div className="flex flex-wrap gap-1">
          {college.domain.slice(0, 2).map((domain, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-surface rounded-full">
              {domain}
            </span>
          ))}
          {college.domain.length > 2 && (
            <span className="text-xs px-2 py-1 bg-surface rounded-full">
              +{college.domain.length - 2} more
            </span>
          )}
        </div>

        {/* Reviews Highlight */}
        <div className="text-xs text-muted-foreground">
          <span className="font-medium">Top highlight:</span> {college.reviews.highlights[0]}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 pt-4 border-t border-border space-y-2">
        <button
          onClick={() => onViewDetails(college)}
          className="btn-oval-primary w-full"
        >
          View Details & Reviews
        </button>
        
        <div className="flex gap-2">
          <button
            onClick={handleGetDirections}
            className="btn-oval-secondary flex-1 text-sm"
          >
            <Navigation className="w-3 h-3 mr-1" />
            Directions
          </button>
          <button
            onClick={handleVisitWebsite}
            className="btn-oval-secondary flex-1 text-sm"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;