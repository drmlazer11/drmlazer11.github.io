var brainHurricane = (function (window, document) {

    that = this;
	
	// endEvent = hasTouch ? 'touchend' : 'mouseup',
	
	brainHurricane = function (opts) {
	
	    that = this;
				
		this.int_refresh = 180;
        
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);

      	$('.refresh').on('click', this.fn_tap_industry.bind(this));
       
    };
    
	brainHurricane.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
		get_random_int: function(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		},

		
		fn_tap_industry: function() {

			var industries = ["Accounting", "Advertising", "PR", "Aerospace", "Agriculture", "Airlines", "Alcohol", 
			"Architecture", "Automobiles", "Banking", "Beer", "Casinos", "Fashion", "Software", "Construction", "Ice Cream", "Defense", "Dentistry", "Education", "Ice Cream",
			"Energy", "Farming", "Funeral Homes", "Weapons", "Healthcare", "Internet", "Music", "Art", "Payments", "Nursing Homes", "Pharmaceuticals", "Utilities", "IoT", "Photography", 
			"Publishing", "Railroads", "Transportation", "Retail", "Spas", "Cruises", "Vacation", "Tourism", "Tobacco", "Shipping", "Waste", "Recycling", "Trash", "Steel", "Restaurants", "Gaming",
			"Security", "Military", "3D Printing", "Drones", "Delivery", "E-Commerce", "Nutrition"];

			var words = [Accounting", "Advertising", "Public Relations", "Aerospace", "Agriculture", "Airlines", "Alcohol", 
			"Architecture", "Automobiles", "Banking", "Beer", "Casinos", "Fashion", "Software", "Construction", "Ice Cream", "Defense", "Dentistry", "Education", "Ice Cream",
			"Energy", "Farming", "Funeral Homes", "Weapons", "Healthcare", "Internet", "Music", "Art", "Payments", "Nursing Homes", "Pharmaceuticals", "Utilities", "IoT", 
			"Publishing", "Railroads", "Transportation", "Retail", "Spas", "Cruises", "Vacation", "Tourism", "Tobacco", "Shipping", "Waste", "Recycling", "Trash", "Steel", "Restaurants",
			"Millenials", "Baby-Boomers", "Generation X", "Scale", "Third World", "West Coast", "East Coast", "Mobile", "Website", "Virtual Reality", "Games", "Pictures", "Videos", "Social Media",
			"Instagram", "Twitter", "Innovation", "Nature", "Organic", "Off The Wall", "Academic", "Accidents", "M&A", "Actress", "Morning", "Afternoon", "Toddlers", "Artificial", "Bargain", "Barrier To Entry",
			"Relax", "Value Chain", "Supply Chain", "Timing", "Design", "Africa", "Europe", "Canada", "South America", "Asia", "Diet", "Romance", "Breakfast", "Broken", "Colors", "Analytics", "Cars", "Careless",
			"Cheap", "Undercut", "Reliability", "Chat", "Price", "Chemicals", "Random", "Shapes", "Addiction", "Retention", "Attention", "Weather", "Colleges", "Universities", "Comedy", "Funny",
			"Competition", "Simplicity", "Marketing", "Finance", "Economics", "Efficiency", "Focus", "Connections", "Consumer", "Contribution", "Crowdsource", "Crowdfunding", "Hip", "Hip Hop", "Copy",
			"Facebook", "Vine", "SoundCloud", "Spotify", "Countryside", "Criminal", "Information", "Organization", "Christmas", "Holidays", "Easter", "Decorations", "Desert", "Devices", "Differently",
			"Differences", "Directly", "Advantage", "Strategic", "Unity", "Online", "Tablets", "Elderly", "Email", "Communications", "Emotions", "Employees", "Overhead", "Enormous", "Eventually", "Futuristic",
			"Superior", "Products", "Branding", "Positioning", "Pricing", "Failure", "Celebrities", "Federal", "Forecast", "Security", "Freedom", "Government", "Fresh", "Storage", "Girls", "Guys", "Chicks",
			"Dudes", "Men", "Women", "Goodwill", "Gradual", "Green", "Sustainability", "Sustainable", "Technology", "Healthy", "Resistance", "Home", "Roadtrip", "Humorous", "Husband", "Wife", "Son",
			"Daughter", "Winter", "Spring", "Summer", "Fall", "Imagination", "Immediately", "Illustration", "Impatient", "Independent", "Indirectly", "Individual", "Indoors", "Influencers", "Stakeholders",
			"Guerrilla", "Surprising", "Installation", "Internet", "Invention", "Irritating", "Knowledge", "Impressions", "Packaging", "Lawyers", "Licensing", "Local", "Loyalty", "Magazine", "Majority",
			"Cultural", "Mail", "Subscription", "Leadership", "Fad", "Mathematics", "Media", "Medium", "Essential", "Messaging", "Military", "Modernize", "Interior", "Mother", "Father", "Muscle", "Natural",
			"Neighborhood", "Networking", "Newspaper", "Teenagers", "Parents", "Babysitter", "Exotic", "Occasionally", "Police", "Opinion", "Organize", "Original", "Partnership", "Percentage", "Perfection",
			"Permission", "Politics", "Physical", "Tangible", "Plastic", "3D Printing", "Drones", "Delivery", "E-Commerce", "Regulation", "Poor", "Rich", "Predict", "Pressure", "Private", "Public", "Property",
			"IP", "Patent", "Question", "Quality", "Rarely", "Recommendations", "Trust", "Reduction", "Relationships", "Relatives", "Reminder", "Remote", "Rent", "Repeatedly", "Resorts", "Research", "Reserve", 
			"Respect", "Retirement", "Romantic", "Boyfriend", "Girlfriend", "Roofing", "Flooring", "Running", "Routine", "Safely", "Safety", "Weekend", "Luxury", "Prototype", "Satisfaction", "Reviews",
			"Sauce", "Scared Of", "Schedule", "Scientist", "Promotion", "Seasonal", "Secretary", "Selection", "Sex", "Models", "Shallow", "Sharp", "Shower", "Clean", "Sideways", "Signature",
			"Silent", "Simple", "Singing", "Sleep", "Slow", "Smoking", "Smooth", "Small", "Smart", "Soap", "Social", "Society", "Soldier", "Solution", "Drink", "Sometimes", "Sorry", "Filter",
			"Inundation", "Speak", "Recognition", "Specialist", "Specific", "Spicy", "Spiritual", "Sports", "Stomach", "Storm", "Story", "Mission", "Ethical", "Strangers", "Students", "Stupid",
			"Substitute", "Complimentary", "Suggestions", "Suitcase", "Hotel", "Bedroom", "Living Room", "Family", "Teachers", "Supermarket", "Cheerleaders", "Summary", "Supply", "Demand", "Surroundings",
			"Survey", "Sweat", "Swimming", "Swollen", "Symbolic", "Bougie", "Takeover", "Acquisition", "Tall", "Short", "Equity", "Telephone", "Technology", "Medicine", "Temporary", "Tendencies", "Tension",
			"Theatre", "Threatening", "Three", "Ticket", "Tight", "Tiny", "Together", "Tomorrow", "Tonight", "Touch", "Tourist", "Tower", "Towel", "Trade", "Partnership", "Tradition", "Transparent",
			"Translate", "Transform", "Transfer", "Treat", "Busy", "Television", "Twins", "Unemployed", "Unexpected", "Ugly", "Umbrella", "Uncomfortable", "Underwear", "Underground", "Understand",
			"Underwater", "Uniform", "Union", "Unfriendly", "Unique", "Universe", "Astronomy", "Urban", "City", "Apartment", "Urgent", "Useless", "Variation", "Variety", "Vertical", "Venture",
			"Victim", "Village", "Violent", "Virtual", "Visible", "Virus", "Vital", "Vote", "Walking", "Dogs", "Cats", "Pets", "Wall", "War", "Warmth", "Warning", "Washing", "Trend", "Wave", "Weddings",
			"Whenever", "Wherever", "Whisper", "Train", "Subway", "Lying", "Wild", "Wind", "Solar", "Winners", "Witness", "Wooden", "Wool", "Worried", "Wrist", "Yard", "Yesterday", "Zero"];

			var hex_codes = ["#ff92bb", "#477F59", "#333", "#b59dcd", "#458dba", "#38c787", "#ad5280", "#7c7c83", "#1db7e2", "#a3955c", "#a76d58", "#773ec1", "#b04f56", "#00ff99", "#fbda04", "#680bf4", 
			"#25a1da", "#44bbad", "#d4612b", "#dd3222", "#ca26d9", "#f20d20", "#054afa", "#222"];

			$(".refresh").css("-webkit-transform", "rotate(" + this.int_refresh + "deg)");
			this.int_refresh += 180;

			// change background-color
			random_hex_code_number = this.get_random_int(0, hex_codes.length - 1);
			$(".container").css("background-color", hex_codes[random_hex_code_number]);
			$(".industry-text").css("color", hex_codes[random_hex_code_number]);
			$(".random-word-text").css("color", hex_codes[random_hex_code_number]);

			// change industry word
			random_industry_number = this.get_random_int(0, industries.length - 1);
			$(".industry-text").html(industries[random_industry_number]);
			$(".industry-text").css("text-transform", "uppercase");

			// change random word
			random_word_number = this.get_random_int(0, words.length - 1);
			$(".random-word-text").html(words[random_word_number]);
			$(".random-word-text").css("text-transform", "uppercase");

		},

	};

	return brainHurricane;

})(window, document);
