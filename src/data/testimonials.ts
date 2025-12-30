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
    name: 'Sarah M.',
    location: 'Texas',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1605638868237-0660a05a135b?w=200&h=200&fit=crop',
    puppyName: 'Milo',
    text: "We got our little Milo from Santa's Little Wieners and he has been the greatest addition to our family! The team was so helpful throughout the entire process and even checked in on us weeks after bringing him home."
  },
  {
    name: 'Michael & Jennifer',
    location: 'California',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1596116082596-7a0da930b9aa?w=200&h=200&fit=crop',
    puppyName: 'Buddy',
    text: 'Buddy has brought so much joy into our lives! He came to us healthy, happy, and already started on potty training. The communication was excellent and we felt supported every step of the way.'
  },
  {
    name: 'Emily R.',
    location: 'Florida',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1635703705694-0da1f3b2f724?w=200&h=200&fit=crop',
    puppyName: 'Sophie',
    text: "This was our first time getting a puppy and Santa's Little Wieners made it such a wonderful experience. Sophie is everything we dreamed of and more. Highly recommend to anyone looking for a Dachshund!"
  }
];

export const testimonialPreviews: TestimonialPreview[] = [
  {
    initials: 'JM',
    name: 'Jennifer Martinez',
    rating: 5,
    text: "We absolutely love our little dachshund Bella from Santa's Little Wieners! She came to us healthy, well-socialized, and full of personality. The team was so helpful throughout the entire process.",
    location: 'Austin, Texas',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'RW',
    name: 'Robert Williams',
    rating: 5,
    text: "Best decision we ever made! Our mini dachshund Duke has brought so much joy to our family. Santa's Little Wieners provided excellent care and the health guarantee gave us peace of mind.",
    location: 'Denver, Colorado',
    timeAgo: '1 month ago'
  },
  {
    initials: 'SK',
    name: 'Sarah Kim',
    rating: 5,
    text: 'Cooper, our chocolate dapple, is the sweetest puppy! He was already potty trained and knew basic commands. You can tell these puppies are raised with love and attention.',
    location: 'Seattle, Washington',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'MT',
    name: 'Michael Thompson',
    rating: 5,
    text: "From the first phone call to bringing Rosie home, the experience was fantastic. They answered all our questions and even followed up to check on her. Highly recommend!",
    location: 'Chicago, Illinois',
    timeAgo: '1 month ago'
  },
  {
    initials: 'AL',
    name: 'Amanda Lee',
    rating: 5,
    text: "Our long-haired dachshund Teddy is everything we hoped for and more. Beautiful coat, wonderful temperament, and so smart! Santa's Little Wieners truly cares about their puppies.",
    location: 'Miami, Florida',
    timeAgo: '2 months ago'
  },
  {
    initials: 'DC',
    name: 'David Chen',
    rating: 5,
    text: 'We drove 4 hours to pick up our puppy and it was worth every mile! The facility was clean, the puppies were happy, and our little Oscar has been the perfect addition to our home.',
    location: 'Phoenix, Arizona',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'EP',
    name: 'Emily Parker',
    rating: 5,
    text: "This was our second puppy from Santa's Little Wieners and the experience was just as wonderful as the first time. Daisy and her sister are best friends now!",
    location: 'Nashville, Tennessee',
    timeAgo: '3 months ago'
  },
  {
    initials: 'JB',
    name: 'James Brown',
    rating: 5,
    text: 'The puppy starter kit they provided was so helpful for first-time dachshund owners like us. Ginger settled into our home right away. Thank you for our beautiful girl!',
    location: 'Portland, Oregon',
    timeAgo: '2 months ago'
  },
  {
    initials: 'LR',
    name: 'Lisa Rodriguez',
    rating: 5,
    text: "I was nervous about getting a puppy during the holidays, but Santa's Little Wieners made it magical. Our dapple Luna is healthy, happy, and the star of our family!",
    location: 'San Diego, California',
    timeAgo: '1 month ago'
  }
];
