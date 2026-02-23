import { Review, Program, FAQ } from './types';

export const GOOGLE_API_KEY = "AIzaSyCwNBSv-53FtkxP-gurTA_vRWEbf2eU_o4";

export const BUSINESS_INFO = {
  name: "Alligator Fitness Gym",
  address: "1, Desh Bandhu Gupta Rd, near State Bank of India ATM, Bazar Sangatrashan, Multani Dhanda, Paharganj, New Delhi, Delhi 110055",
  phone: "+919899542012",
  phoneDisplay: "91+9899542012",
  rating: 4.8,
  reviewCount: 551,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4736333118103!2d77.20724488097225!3d28.64553381289254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdd2de9d4905%3A0xebca72e0778505f2!2sAlligator%20gym%20%26%20Fitness%20Studio%20%7C%20Paharganj!5e0!3m2!1sen!2sin!4v1771867455671!5m2!1sen!2sin",
  // Direct link to open the review dialog for the specific place ID derived from the CID
  googleReviewUrl: "https://www.google.com/search?q=Alligator+Fitness+Gym+New+Delhi&lrd=0x390cfdd2de9d4905:0xebca72e0778505f2,3,,,,",
  timings: {
    weekdays: "6:00 AM – 12:00 AM",
    sunday: "Closed"
  }
};

export const PROGRAMS: Program[] = [
  {
    id: "general-fitness",
    title: "General Fitness Training",
    shortDescription: "Build a strong foundation for a healthier lifestyle.",
    targetAudience: "Beginners to intermediates looking to stay active and healthy.",
    commonProblems: "Sedentary lifestyle, low energy, lack of routine.",
    methodology: "Balanced mix of cardio and light resistance training.",
    safety: "Supervised sessions with emphasis on proper form.",
    progress: "Improved stamina, better sleep, and consistent energy levels.",
    image: "https://img.freepik.com/free-photo/sport-lifestyle-fitness-male-training_1139-724.jpg?semt=ais_user_personalization&w=740&q=80"
  },
  {
    id: "weight-training",
    title: "Weight Training",
    shortDescription: "Increase muscle mass and bone density with structured lifting.",
    targetAudience: "Individuals wanting to build muscle and strength.",
    commonProblems: "Weakness, lack of muscle definition, plateauing results.",
    methodology: "Progressive overload using free weights and machines.",
    safety: "Spotters available, strict form correction.",
    progress: "Measurable strength gains and muscle hypertrophy.",
    image: "https://tropeaka.com/cdn/shop/articles/main_image_d517c79f-4ec7-4946-bb5e-db7e80623e85_3500x.jpg?v=1571697737"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    shortDescription: "1-on-1 coaching customized to your specific goals.",
    targetAudience: "Those needing accountability, specific results, or recovering from injury.",
    commonProblems: "Lack of motivation, confusion about exercises, previous injuries.",
    methodology: "Customized workout plans and nutritional guidance.",
    safety: "Constant dedicated supervision.",
    progress: "Rapid, targeted results based on personal metrics.",
    image: "https://fitnesscfgyms.com/stcloudfl/wp-content/uploads/sites/2/2025/02/shutterstock_2403270119.jpg"
  },
  {
    id: "fat-loss",
    title: "Fat Loss & Transformation",
    shortDescription: "High-intensity programs designed to burn calories effectively.",
    targetAudience: "Individuals looking to lose weight and tone up.",
    commonProblems: "Excess weight, slow metabolism, difficulty losing fat.",
    methodology: "HIIT, circuit training, and metabolic conditioning.",
    safety: "Heart rate monitoring and intensity scaling.",
    progress: "Visible fat loss, inch loss, and improved body composition.",
    image: "https://us.123rf.com/450wm/mikedesign/mikedesign2111/mikedesign211100075/178631956-awesome-before-and-after-weight-loss-fitness-transformation-the-man-was-fat-but-became-athlet-fat.jpg?ver=6"
  },
  {
    id: "strength-conditioning",
    title: "Strength & Conditioning",
    shortDescription: "Enhance athletic performance and functional power.",
    targetAudience: "Athletes and sports enthusiasts.",
    commonProblems: "Lack of power, poor endurance, sports injuries.",
    methodology: "Compound movements, plyometrics, and agility drills.",
    safety: "Focus on joint stability and mobility.",
    progress: "Increased power output, speed, and endurance.",
    image: "https://fitnessvolt.com/wp-content/uploads/2023/12/doing-battle-ropes-in-gym-750x536.jpg"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    shortDescription: "Train your body for real-life activities.",
    targetAudience: "Everyone wanting easier daily movement.",
    commonProblems: "Stiffness, back pain, difficulty with daily tasks.",
    methodology: "Movements mimicking daily life (squatting, lifting, pulling).",
    safety: "Core engagement focus.",
    progress: "Better posture, ease of movement, pain reduction.",
    image: "https://cdn.mos.cms.futurecdn.net/tXZdLU2gFBnPjqSAbRUBSZ.jpg"
  },
  {
    id: "group-classes",
    title: "Group Classes",
    shortDescription: "Energetic sessions including Crossfit and Team workouts.",
    targetAudience: "Social exercisers who love community vibes.",
    commonProblems: "Boredom with solo workouts, lack of consistency.",
    methodology: "Instructor-led high-energy group sessions.",
    safety: "Modifications provided for all levels.",
    progress: "Consistent attendance, improved mood, and cardiovascular health.",
    image: "https://www.telegraph.co.uk/content/dam/health-fitness/2017/11/09/TELEMMGLPICT000146072663_trans_NvBQzQNjv4Bqek9vKm18v_rkIPH9w2GMNtm3NAjPW-2_OvjCiS6COCU.jpeg?imwidth=640"
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility",
    shortDescription: "Restore balance, improve flexibility, and reduce stress.",
    targetAudience: "Individuals seeking stress relief, flexibility, and core stability.",
    commonProblems: "Stiffness, back pain, high stress levels, poor posture.",
    methodology: "Combination of Hatha flows and deep stretching techniques focusing on breath.",
    safety: "Low-impact movements suitable for all ages and injury recovery.",
    progress: "Increased flexibility, better posture, stress reduction, and core stability.",
    image: "https://www.doyou.com/wp-content/uploads/2021/01/5-Standing-Yoga-Poses-To-Increase-Lower-Body-Flexibility.jpg"
  },
  {
    id: "zumba",
    title: "Zumba Fitness",
    shortDescription: "High-energy dance workouts to burn calories while having fun.",
    targetAudience: "Those who find traditional cardio boring and love music.",
    commonProblems: "Boredom with treadmills, lack of motivation for cardio, low stamina.",
    methodology: "Dance-based interval training set to upbeat Latin and international music.",
    safety: "Instructor-led with modifications for intensity; suitable for all levels.",
    progress: "Massive calorie burn, improved coordination, and cardiovascular endurance.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Is this gym beginner friendly?",
    answer: "Absolutely. We specialize in helping beginners start their fitness journey with proper guidance and a supportive environment."
  },
  {
    question: "Do you provide personal training?",
    answer: "Yes, we have certified personal trainers available for 1-on-1 coaching to help you reach your specific goals faster."
  },
  {
    question: "Are trainers certified?",
    answer: "Yes, our trainers are qualified professionals with experience in various fitness disciplines."
  },
  {
    question: "Is the gym hygienic?",
    answer: "Cleanliness is a top priority. We maintain strict hygiene protocols, including regular sanitization of equipment and facilities."
  },
  {
    question: "How soon can I start?",
    answer: "You can start immediately! Just walk in or call us to book your first visit."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "User Review",
    rating: 5,
    timeAgo: "a year ago",
    text: "It’s the best Gym in our Town, i personally recommend this gym to everyone, also they have many sections in this gym like Cardio, Treadmill’s, Exercise, Canteen, Steam Bath and also a mini Garden for calisthenics or for Rest, & the toilet...",
    likes: 8
  },
  {
    id: "2",
    author: "Joanna Ho",
    rating: 5,
    timeAgo: "2 months ago",
    details: "14 reviews · 2 photos",
    text: "500 INR for day pass (foreigner), I liked the loud music inside, 1 squat rack and 1 deadlift platform, was a bit busy when I went 7am but got more quiet throughout, also a punching bag and gloves",
    likes: 0
  },
  {
    id: "3",
    author: "karan sagar",
    rating: 5,
    timeAgo: "10 months ago",
    details: "Local Guide · 19 reviews · 8 photos",
    text: "Separate sections for stretching, cardio and weight training makes it unique in this area. The gym is equipped with trending and latest machines, has nice ,hygienic and affordable kitchen/ cafe for diet food with good taste. Highly recommend.",
    likes: 0
  },
  {
    id: "4",
    author: "Akif Malik",
    rating: 5,
    timeAgo: "2 years ago",
    details: "4 reviews · 1 photo",
    text: "Very nice and clean gym in our area modern equipment and steam facility is also available. I am very happy.",
    likes: 2
  },
  {
    id: "5",
    author: "Morgan Lewis",
    rating: 5,
    timeAgo: "10 months ago",
    details: "3 reviews · 1 photo",
    text: "Was a good gym session :) 💪🏽 everyone there was friendly and they have everything there - whether you’re a hybrid athlete, a gym rat or just down for cardio. There’s WiFi too 🤌🏽ofc.",
    likes: 0
  },
  {
    id: "6",
    author: "Jyoti Sinha",
    rating: 5,
    timeAgo: "3 years ago",
    details: "Local Guide · 10 reviews",
    text: "I had a great experience. The staff there is always friendly and helpful, and they offer a variety of classes that are tailored to all fitness levels. The equipment is well-maintained and there is plenty of space to move around.",
    likes: 2
  },
  {
    id: "7",
    author: "Azmaan",
    rating: 5,
    timeAgo: "3 years ago",
    details: "8 reviews · 1 photo",
    text: "As per standards one of the best in the area. Ample space, great machines (have taken everything into consideration), great trainers (who don't push you for PT), supportive staff and clean.",
    likes: 2
  },
  {
    id: "8",
    author: "Anurag Vempaty",
    rating: 5,
    timeAgo: "3 years ago",
    details: "Local Guide · 16 reviews",
    text: "Alligator Gym and Fitness Studio is a great option for fitness enthusiasts who are looking for a supportive and well-equipped gym. The studio offers a wide range of classes and programs, including strength training, cardio, and yoga.",
    likes: 1
  },
  {
    id: "9",
    author: "Anand reddy",
    rating: 5,
    timeAgo: "3 years ago",
    details: "4 reviews · 2 photos",
    text: "I had best experience to they are soo coporative towards the athelets. I came from odisha and i have done my satisfied sweat too.",
    likes: 2
  },
  {
    id: "10",
    author: "Gilad Mes",
    rating: 5,
    timeAgo: "3 months ago",
    details: "Local Guide · 59 reviews",
    text: "The best gym around by far.",
    likes: 0
  },
  {
    id: "11",
    author: "Kunal Saini",
    rating: 5,
    timeAgo: "2 years ago",
    details: "3 reviews",
    text: "One of the best gym I've ever trained in. I personally train in this gym and I really find this gym staff very polite and helping. Also the environment of the gym is really cool. anyone, who's willing to join the gym, Alligator Gym & Fitness Studio will be the best choice... 🫶🏻💫",
    likes: 0
  },
  {
    id: "12",
    author: "Krishna Moorthi",
    rating: 5,
    timeAgo: "2 years ago",
    details: "Local Guide · 29 reviews",
    text: "Good and vibrant setting of this gym and good location to avoid hustle bustle of town.",
    likes: 0
  },
  {
    id: "13",
    author: "Bala Kishan",
    rating: 5,
    timeAgo: "3 years ago",
    details: "Local Guide · 18 reviews",
    text: "Alligator Gym & Fitness Studio is just an awesome place with great machines to work out on that are applicable for both men, and women and have very hygienic staff and well-trained professional trainers.",
    likes: 1
  },
  {
    id: "14",
    author: "Sanya Vasudev",
    rating: 5,
    timeAgo: "3 years ago",
    details: "2 reviews",
    text: "This is a fantastic gym. The trainers are nice and helpful, they make you feel really comfortable. Such a family vibe. They provide parking facility also. Best gym in this area. I definitely recommend them to my friends.",
    likes: 2
  },
  {
    id: "15",
    author: "neha lodhi",
    rating: 5,
    timeAgo: "3 years ago",
    details: "11 reviews",
    text: "This gym is amazing. Spacious. Outstanding facilities, Huge range of Top workout equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes.",
    likes: 2
  },
  {
    id: "16",
    author: "suraj seth",
    rating: 5,
    timeAgo: "2 years ago",
    details: "1 review",
    text: "Very good and very nice place for workout. Staff is very helpful and friendly, Trainer lucky is very good and have good amount of knowledge in exercise. He is very friendly and teach with patience. I highly recommend this gym for any fitness lover.",
    likes: 2
  },
  {
    id: "17",
    author: "Sameer Ansari",
    rating: 5,
    timeAgo: "3 years ago",
    details: "Local Guide · 21 reviews",
    text: "This is a good gym and best environment. Machines are very good. Trainers are very polite and they gave me good teaching for work out. They watch me evey time I do proper work out. They give me tips for diets over all good gym. I suggest to all my friend and family members to go this gym.",
    likes: 0
  },
  {
    id: "18",
    author: "Mehak Puri",
    rating: 5,
    timeAgo: "3 years ago",
    details: "2 reviews",
    text: "I have joined the gym since 1 month. My experience is amazing. All facilities are provided under one roof. All the trainers are specialised and give u training according to u. Both zumba and yoga relaxes ur mind and body and releases ur stress❤🤗",
    likes: 1
  },
  {
    id: "19",
    author: "Atul chauhan",
    rating: 5,
    timeAgo: "3 years ago",
    details: "1 review",
    text: "In my opinion this is the best gym in paharganj because it has multiple facilities like awesome cafeteria, steam room ,zumba room and CrossFit area. Here atmosphere is really upto the mark, ambience is also very nice. Staff is really helpful.",
    likes: 0
  },
  {
    id: "20",
    author: "kishu Gaur",
    rating: 5,
    timeAgo: "2 years ago",
    details: "Local Guide · 53 reviews · 17 photos",
    text: "This health gym is very neat and clean. All trainers are so polite and well mannered. Special thanks to who are always there to guide properly and support any time u need their assistance. Ample space for car parking in morning.",
    likes: 0
  },
  {
    id: "21",
    author: "chestha gandhi",
    rating: 5,
    timeAgo: "unknown",
    text: "AMAZING GYM, AMAZING WORKOUTS! The staff here is incredibly friendly and extremely qualified! Such a family vibe as soon as you walk in the doors – I highly recommend checking this gym out. #Alligator is my happy place🫶🥰✨",
    likes: 0
  }
];