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
    image: '/images/bella.jpeg',
    puppyName: 'Bella',
    text: "Bella is the sweetest little Dachshund! She came to us healthy, playful, and already started on potty training. Noble Weenie made the whole process so easy and even checked in on us weeks after bringing her home."
  },
  {
    name: 'Jessica R.',
    location: 'Nashville, TN',
    rating: 5,
    image: '/images/charlie.jpeg',
    puppyName: 'Charlie',
    text: "Charlie has the best personality of any Dachshund I've ever met! He's so smart and loves to cuddle. The team at Noble Weenie was incredibly helpful and answered all our questions about Dachshund care."
  },
  {
    name: 'David & Karen W.',
    location: 'Denver, CO',
    rating: 5,
    image: '/images/rosie.jpeg',
    puppyName: 'Rosie',
    text: "This was our first Dachshund and Noble Weenie made it such a wonderful experience. Rosie is everything we dreamed of — loyal, funny, and full of energy. The health guarantee gave us total peace of mind."
  },
  {
    name: 'Emily C.',
    location: 'Charlotte, NC',
    rating: 5,
    image: '/images/benny.jpeg',
    puppyName: 'Benny',
    text: "Benny is the star of our neighborhood! Everyone stops to ask about him. He's so well-socialized and confident. You can tell Noble Weenie raises their Dachshunds with genuine love and attention."
  },
  {
    name: 'James & Lisa M.',
    location: 'Scottsdale, AZ',
    rating: 5,
    image: '/images/hazel.jpeg',
    puppyName: 'Hazel',
    text: "Hazel has been the perfect addition to our family. Our kids are obsessed with her! She came with all her vaccinations, vet records, and a starter kit. Noble Weenie truly goes above and beyond."
  },
  {
    name: 'Rachel P.',
    location: 'Portland, OR',
    rating: 5,
    image: '/images/minnie.jpeg',
    puppyName: 'Minnie',
    text: "We flew Minnie home and the transport process was seamless. She arrived happy and healthy. Three months later, she's the most loving little Dachshund. Best decision we ever made!"
  },
  {
    name: 'Brandon & Amy S.',
    location: 'Atlanta, GA',
    rating: 5,
    image: '/images/rocky.jpeg',
    puppyName: 'Rocky',
    text: "Rocky is our second Dachshund from Noble Weenie and the experience was just as amazing. He and his sister are inseparable now. The breeding quality and temperament are consistently outstanding."
  },
  {
    name: 'Michelle H.',
    location: 'San Diego, CA',
    rating: 5,
    image: '/images/pascal.jpeg',
    puppyName: 'Pascal',
    text: "From the first inquiry to bringing Pascal home, Noble Weenie was professional and caring. Pascal's coat is gorgeous and his personality is even better. He's already mastered sit and shake!"
  }
];

export const testimonialPreviews: TestimonialPreview[] = [
  {
    initials: 'ST',
    name: 'Sarah Thompson',
    rating: 5,
    text: "We absolutely love our little Bella from Noble Weenie! She's the sweetest Dachshund — healthy, well-socialized, and full of personality. The team was so helpful throughout the entire process.",
    location: 'Austin, TX',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'JR',
    name: 'Jessica Reynolds',
    rating: 5,
    text: "Best decision we ever made! Our Dachshund Charlie has brought so much joy to our family. Noble Weenie provided excellent care and the health guarantee gave us peace of mind.",
    location: 'Nashville, TN',
    timeAgo: '1 month ago'
  },
  {
    initials: 'DW',
    name: 'David Williams',
    rating: 5,
    text: "Rosie is the sweetest Dachshund puppy! She was already potty trained and knew basic commands. You can tell these puppies are raised with love and attention.",
    location: 'Denver, CO',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'EC',
    name: 'Emily Carter',
    rating: 5,
    text: "From the first phone call to bringing Benny home, the experience was fantastic. They answered all our questions about Dachshund care and even followed up to check on him. Highly recommend!",
    location: 'Charlotte, NC',
    timeAgo: '1 month ago'
  },
  {
    initials: 'JM',
    name: 'James Mitchell',
    rating: 5,
    text: "Our Dachshund Hazel is everything we hoped for and more. Beautiful coat, wonderful temperament, and so smart! Noble Weenie truly cares about their puppies.",
    location: 'Scottsdale, AZ',
    timeAgo: '2 months ago'
  },
  {
    initials: 'RP',
    name: 'Rachel Patterson',
    rating: 5,
    text: "We had Minnie flown to us in Portland and the transport was seamless. She arrived happy and healthy. Three months later she's the most loving Dachshund. Worth every penny!",
    location: 'Portland, OR',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'BS',
    name: 'Brandon Scott',
    rating: 5,
    text: "This was our second Dachshund from Noble Weenie and the experience was just as wonderful. Rocky and his sister are best friends now! Consistently amazing breeding quality.",
    location: 'Atlanta, GA',
    timeAgo: '3 months ago'
  },
  {
    initials: 'MH',
    name: 'Michelle Harris',
    rating: 5,
    text: "The puppy starter kit they provided was so helpful for first-time Dachshund owners like us. Pascal settled into our home right away. Thank you for our beautiful boy!",
    location: 'San Diego, CA',
    timeAgo: '2 months ago'
  },
  {
    initials: 'KL',
    name: 'Kevin Lawson',
    rating: 5,
    text: "Getting our Dachshund from Noble Weenie was the highlight of our year. She's perfectly healthy with the sweetest personality. The ongoing support has been incredible.",
    location: 'Dallas, TX',
    timeAgo: '1 month ago'
  },
  {
    initials: 'AJ',
    name: 'Amanda Johnson',
    rating: 5,
    text: "Excellent breeder! Our Dachshund came with all vaccinations up to date, KUSA registration, and proper documentation. The follow-up care has been outstanding.",
    location: 'Chicago, IL',
    timeAgo: '2 months ago'
  },
  {
    initials: 'TN',
    name: 'Tyler Nelson',
    rating: 5,
    text: "We couldn't be happier with our decision to get our Dachshund from Noble Weenie. He's settled in perfectly and loves playing with our kids. A true family dog!",
    location: 'Miami, FL',
    timeAgo: '1 month ago'
  },
  {
    initials: 'LB',
    name: 'Lauren Baker',
    rating: 5,
    text: "What a wonderful experience! The team at Noble Weenie genuinely cares about matching the right Dachshund with the right family. Our little girl is proof of that love.",
    location: 'Seattle, WA',
    timeAgo: '4 weeks ago'
  },
  {
    initials: 'CM',
    name: 'Chris Martinez',
    rating: 5,
    text: "Professional, caring, and trustworthy. That's how I'd describe Noble Weenie. Our Dachshund is everything we wanted — playful, healthy, and so loyal!",
    location: 'Phoenix, AZ',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'NW',
    name: 'Nicole Walker',
    rating: 5,
    text: "We drove from Houston to pick up our Dachshund and it was absolutely worth the trip. Noble Weenie's dedication to their puppies is evident the moment you meet them.",
    location: 'Houston, TX',
    timeAgo: '5 weeks ago'
  },
  {
    initials: 'RD',
    name: 'Ryan Davis',
    rating: 5,
    text: "Our miniature Dachshund from Noble Weenie has the most amazing temperament. He's great with strangers, kids, and other dogs. Couldn't have asked for a better breeder experience.",
    location: 'Boston, MA',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'SW',
    name: 'Stephanie Wilson',
    rating: 5,
    text: "I researched Dachshund breeders for months and Noble Weenie stood out. The communication was excellent from day one, and our puppy arrived healthy with a beautiful coat.",
    location: 'Minneapolis, MN',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'JA',
    name: 'Jason Andrews',
    rating: 5,
    text: "Noble Weenie exceeded all our expectations. Our Dachshund is so well-behaved and loving. The whole family is obsessed with him. Already planning to get a second!",
    location: 'Raleigh, NC',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'HT',
    name: 'Hannah Taylor',
    rating: 5,
    text: "The birth certificate, vet records, and health guarantee that came with our Dachshund gave us complete confidence. She's thriving and we couldn't be more grateful!",
    location: 'Columbus, OH',
    timeAgo: '1 month ago'
  }
];
