export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  image: string;
  puppyName: string;
  text: string;
}

export interface TestimonialPreview {
  initials: string;
  name: string;
  rating: number;
  text: string;
  location: string;
  timeAgo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah & Mike T.',
    location: 'Austin, TX',
    rating: 5,
    image: '/images/testi-1.jpeg',
    puppyName: 'Alex',
    text: "Alex is the sweetest Staffie! He came to us healthy, playful, and already started on potty training. Michael Paws made the whole process so easy and even checked in on us weeks after bringing him home."
  },
  {
    name: 'Jessica R.',
    location: 'Nashville, TN',
    rating: 5,
    image: '/images/testi-2.jpeg',
    puppyName: 'Cooper',
    text: "Cooper has the best personality of any Staffie I've ever met! He's so smart and loves to cuddle. The team at Michael Paws was incredibly helpful and answered all our questions about Staffie care."
  },
  {
    name: 'David & Karen W.',
    location: 'Denver, CO',
    rating: 5,
    image: '/images/testi-3.jpeg',
    puppyName: 'Gracie',
    text: "This was our first Staffordshire Bull Terrier and Michael Paws made it such a wonderful experience. Gracie is everything we dreamed of — loyal, funny, and full of energy. The health guarantee gave us total peace of mind."
  },
  {
    name: 'Emily C.',
    location: 'Charlotte, NC',
    rating: 5,
    image: '/images/testi-4.jpeg',
    puppyName: 'Kobe',
    text: "Kobe is the star of our neighborhood! Everyone stops to ask about him. He's so well-socialized and confident. You can tell Michael Paws raises their Staffies with genuine love and attention."
  },
  {
    name: 'James & Lisa M.',
    location: 'Scottsdale, AZ',
    rating: 5,
    image: '/images/testi-5.jpeg',
    puppyName: 'Bella',
    text: "Bella has been the perfect addition to our family. Our kids are obsessed with him! He came with all his vaccinations, vet records, and a starter kit. Michael Paws truly goes above and beyond."
  },
  {
    name: 'Rachel P.',
    location: 'Portland, OR',
    rating: 5,
    image: '/images/testi-6.jpeg',
    puppyName: 'Ashley',
    text: "We flew Ashley home and the transport process was seamless. She arrived happy and healthy. Three months later, she's the most loving Staffie. Best decision we ever made!"
  },
  {
    name: 'Brandon & Amy S.',
    location: 'Atlanta, GA',
    rating: 5,
    image: '/images/testi-7.jpeg',
    puppyName: 'Thor',
    text: "Thor is our second Staffie from Michael Paws and the experience was just as amazing. He and his sister are inseparable now. The breeding quality and temperament are consistently outstanding."
  },
  {
    name: 'Michelle H.',
    location: 'San Diego, CA',
    rating: 5,
    image: '/images/testi-8.jpeg',
    puppyName: 'Rex',
    text: "From the first inquiry to bringing Rex home, Michael Paws was professional and caring. Rex's coat is gorgeous and his personality is even better. He's already mastered sit and shake!"
  }
];

export const testimonialPreviews: TestimonialPreview[] = [
  {
    initials: 'ST',
    name: 'Sarah Thompson',
    rating: 5,
    text: "We absolutely love our little Bella from Michael Paws! She's the sweetest Staffie — healthy, well-socialized, and full of personality. The team was so helpful throughout the entire process.",
    location: 'Austin, TX',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'JR',
    name: 'Jessica Reynolds',
    rating: 5,
    text: "Best decision we ever made! Our Staffie Charlie has brought so much joy to our family. Michael Paws provided excellent care and the health guarantee gave us peace of mind.",
    location: 'Nashville, TN',
    timeAgo: '1 month ago'
  },
  {
    initials: 'DW',
    name: 'David Williams',
    rating: 5,
    text: "Rosie is the sweetest Staffie puppy! She was already potty trained and knew basic commands. You can tell these puppies are raised with love and attention.",
    location: 'Denver, CO',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'EC',
    name: 'Emily Carter',
    rating: 5,
    text: "From the first phone call to bringing Benny home, the experience was fantastic. They answered all our questions about Staffie care and even followed up to check on him. Highly recommend!",
    location: 'Charlotte, NC',
    timeAgo: '1 month ago'
  },
  {
    initials: 'JM',
    name: 'James Mitchell',
    rating: 5,
    text: "Our Staffie Hazel is everything we hoped for and more. Beautiful coat, wonderful temperament, and so smart! Michael Paws truly cares about their puppies.",
    location: 'Scottsdale, AZ',
    timeAgo: '2 months ago'
  },
  {
    initials: 'RP',
    name: 'Rachel Patterson',
    rating: 5,
    text: "We had Minnie flown to us in Portland and the transport was seamless. She arrived happy and healthy. Three months later she's the most loving Staffie. Worth every penny!",
    location: 'Portland, OR',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'BS',
    name: 'Brandon Scott',
    rating: 5,
    text: "This was our second Staffie from Michael Paws and the experience was just as wonderful. Rocky and his sister are best friends now! Consistently amazing breeding quality.",
    location: 'Atlanta, GA',
    timeAgo: '3 months ago'
  },
  {
    initials: 'MH',
    name: 'Michelle Harris',
    rating: 5,
    text: "The puppy starter kit they provided was so helpful for first-time Staffie owners like us. Pascal settled into our home right away. Thank you for our beautiful boy!",
    location: 'San Diego, CA',
    timeAgo: '2 months ago'
  },
  {
    initials: 'KL',
    name: 'Kevin Lawson',
    rating: 5,
    text: "Getting our Staffie from Michael Paws was the highlight of our year. She's perfectly healthy with the sweetest personality. The ongoing support has been incredible.",
    location: 'Dallas, TX',
    timeAgo: '1 month ago'
  },
  {
    initials: 'AJ',
    name: 'Amanda Johnson',
    rating: 5,
    text: "Excellent breeder! Our Staffie came with all vaccinations up to date, AKC registration, and proper documentation. The follow-up care has been outstanding.",
    location: 'Chicago, IL',
    timeAgo: '2 months ago'
  },
  {
    initials: 'TN',
    name: 'Tyler Nelson',
    rating: 5,
    text: "We couldn't be happier with our decision to get our Staffie from Michael Paws. He's settled in perfectly and loves playing with our kids. A true family dog!",
    location: 'Miami, FL',
    timeAgo: '1 month ago'
  },
  {
    initials: 'LB',
    name: 'Lauren Baker',
    rating: 5,
    text: "What a wonderful experience! The team at Michael Paws genuinely cares about matching the right Staffie with the right family. Our little girl is proof of that love.",
    location: 'Seattle, WA',
    timeAgo: '4 weeks ago'
  },
  {
    initials: 'CM',
    name: 'Chris Martinez',
    rating: 5,
    text: "Professional, caring, and trustworthy. That's how I'd describe Michael Paws. Our Staffie is everything we wanted — playful, healthy, and so loyal!",
    location: 'Phoenix, AZ',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'NW',
    name: 'Nicole Walker',
    rating: 5,
    text: "We drove from Houston to pick up our Staffie and it was absolutely worth the trip. Michael Paws's dedication to their puppies is evident the moment you meet them.",
    location: 'Houston, TX',
    timeAgo: '5 weeks ago'
  },
  {
    initials: 'RD',
    name: 'Ryan Davis',
    rating: 5,
    text: "Our miniature Staffie from Michael Paws has the most amazing temperament. He's great with strangers, kids, and other dogs. Couldn't have asked for a better breeder experience.",
    location: 'Boston, MA',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'SW',
    name: 'Stephanie Wilson',
    rating: 5,
    text: "I researched Staffie breeders for months and Michael Paws stood out. The communication was excellent from day one, and our puppy arrived healthy with a beautiful coat.",
    location: 'Minneapolis, MN',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'JA',
    name: 'Jason Andrews',
    rating: 5,
    text: "Michael Paws exceeded all our expectations. Our Staffie is so well-behaved and loving. The whole family is obsessed with him. Already planning to get a second!",
    location: 'Raleigh, NC',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'HT',
    name: 'Hannah Taylor',
    rating: 5,
    text: "The birth certificate, vet records, and health guarantee that came with our Staffie gave us complete confidence. She's thriving and we couldn't be more grateful!",
    location: 'Columbus, OH',
    timeAgo: '1 month ago'
  },
  {
    initials: 'MG',
    name: 'Michael Green',
    rating: 5,
    text: "Our little Staffie has been the best addition to our family. She's so playful and loves everyone she meets. Michael Paws made the whole process stress-free!",
    location: 'Tampa, FL',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'KR',
    name: 'Katie Robinson',
    rating: 5,
    text: "I can't say enough good things about Michael Paws. Our puppy arrived healthy, happy, and already knew basic commands. The support we've received has been amazing.",
    location: 'Salt Lake City, UT',
    timeAgo: '1 month ago'
  },
  {
    initials: 'DP',
    name: 'Daniel Parker',
    rating: 5,
    text: "This is our third Staffie and by far the best experience. The puppy's temperament is perfect and you can tell she was raised with love.",
    location: 'Indianapolis, IN',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'AC',
    name: 'Ashley Cooper',
    rating: 5,
    text: "We were nervous about getting a puppy shipped to us, but Michael Paws handled everything perfectly. Our Staffie arrived safe and sound!",
    location: 'Kansas City, MO',
    timeAgo: '5 weeks ago'
  },
  {
    initials: 'BH',
    name: 'Brian Hughes',
    rating: 5,
    text: "The communication from Michael Paws was excellent throughout the entire process. They sent us updates and photos before our puppy came home.",
    location: 'San Antonio, TX',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'JL',
    name: 'Jennifer Lewis',
    rating: 5,
    text: "Our Staffie has the sweetest personality. She loves to cuddle and play. Michael Paws truly cares about finding the right homes for their puppies.",
    location: 'Pittsburgh, PA',
    timeAgo: '1 month ago'
  },
  {
    initials: 'RB',
    name: 'Robert Brown',
    rating: 5,
    text: "We've had our puppy for 6 months now and she's absolutely perfect. Healthy, happy, and full of energy. Thank you Michael Paws!",
    location: 'Oklahoma City, OK',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'SJ',
    name: 'Samantha Jones',
    rating: 5,
    text: "From start to finish, Michael Paws provided exceptional service. Our Staffie is everything we wanted and more. Highly recommend to anyone!",
    location: 'Milwaukee, WI',
    timeAgo: '2 weeks ago'
  }
];
