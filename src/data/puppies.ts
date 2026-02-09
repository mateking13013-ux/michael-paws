export interface Puppy {
  name: string;
  image: string;
  sex: 'Male' | 'Female';
  age: string;
  status: string;
  price: number;
  description: string;
  coat: string;
}

export const puppies: Puppy[] = [
  {
    name: 'Alex',
    image: '/images/alex.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Alex is a confident and playful Staffordshire Bull Terrier puppy with a bold personality. He loves exploring his surroundings and is always ready for an adventure. His muscular build and bright eyes make him a real head-turner. Alex would thrive with an active family who enjoys outdoor fun.',
    coat: 'Brindle with white chest patch'
  },
  {
    name: 'Ashley',
    image: '/images/ashley.webp',
    sex: 'Female',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Ashley is a sweet and affectionate Staffie girl who loves cuddles and belly rubs. She has a gentle temperament and gets along wonderfully with everyone she meets. Her beautiful coat and expressive eyes will melt your heart. Ashley is looking for a loving forever home.',
    coat: 'Fawn with white markings'
  },
  {
    name: 'Bella',
    image: '/images/bella.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Bella is a strong and sturdy Staffie with a heart of gold. Despite his muscular build, he is incredibly gentle and loves nothing more than snuggling on the couch. He is well-socialized and confident in new situations. Bella is ready to become your loyal best friend.',
    coat: 'Blue with white chest'
  },
  {
    name: 'Belly',
    image: '/images/belly.webp',
    sex: 'Female',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Belly is an adorable and energetic Staffie puppy who keeps everyone entertained with her playful antics. She has a wonderful temperament and loves being the center of attention. Her compact, muscular frame and cheerful disposition make her irresistible. Belly is searching for her perfect family.',
    coat: 'Red brindle with white blaze'
  },
  {
    name: 'Boston',
    image: '/images/boston.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Boston is a handsome and outgoing Staffordshire Bull Terrier with a charming personality. He is curious about everything and loves to play with toys. His strong build and friendly nature make him perfect for families. Boston can\'t wait to find his forever home.',
    coat: 'Black brindle with white chest'
  },
  {
    name: 'Carlos',
    image: '/images/carlos.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Carlos is a bold and confident Staffie puppy with a love for adventure. He has excellent energy and loves to run and play. His striking appearance and loyal personality make him a wonderful companion. Carlos is ready to bring joy to his new family.',
    coat: 'Brindle and white'
  },
  {
    name: 'Chill',
    image: '/images/chill.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Sold',
    price: 800,
    description: 'Chill is a laid-back and easygoing Staffie who lives up to his name. He has a calm temperament but still enjoys a good play session. His gentle nature makes him great with children and other pets. Chill has found his forever home!',
    coat: 'Blue fawn with white markings'
  },
  {
    name: 'Connie',
    image: '/images/connie.webp',
    sex: 'Female',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Connie is a beautiful and sweet-natured Staffordshire Bull Terrier with a loving personality. She adores people and will greet you with a wagging tail every time. Her compact build and gorgeous coat make her a standout. Connie would make an excellent family companion.',
    coat: 'Fawn brindle with white chest'
  },
  {
    name: 'Cooper',
    image: '/images/cooper.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Cooper is a strong and athletic Staffie puppy who loves to stay active. He is intelligent and picks up training quickly. His loyal and protective nature makes him an ideal family dog. Cooper is looking for an active household that will keep up with his energy.',
    coat: 'Red with white blaze'
  },
  {
    name: 'Coy',
    image: '/images/coy.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Coy is a charming Staffordshire Bull Terrier with a playful spirit and a heart full of love. He enjoys interactive play and is always up for a game of fetch. His muscular frame and bright personality make him a joy to be around. Coy is eager to find his forever family.',
    coat: 'Dark brindle with white chest patch'
  },
  {
    name: 'Echo',
    image: '/images/echo.webp',
    sex: 'Male',
    age: '8 Weeks',
    status: 'Available',
    price: 800,
    description: 'Echo is a spirited and curious Staffie puppy who loves discovering new things. He has a wonderful temperament and is naturally sociable. His compact build and expressive face give him tons of character. Echo is ready to fill your home with love and laughter.',
    coat: 'Blue brindle with white markings'
  },
  {
    name: 'Gracie',
    image: '/images/gracie.webp',
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 800,
    description: 'Gracie is a gentle and loving Staffie girl with the sweetest personality. She enjoys quiet moments just as much as playtime. Her beautiful coat and kind eyes make her absolutely adorable. Gracie is looking for a family who will cherish her gentle spirit.',
    coat: 'Fawn with white chest and paws'
  },
  {
    name: 'Kobe',
    image: '/images/kobe.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Kobe is an energetic and athletic Staffordshire Bull Terrier with a competitive spirit. He loves to run, play, and show off his strength. His confident demeanor and striking looks make him a natural standout. Kobe is perfect for someone who loves an active lifestyle.',
    coat: 'Red brindle'
  },
  {
    name: 'Lucy',
    image: '/images/lucy.webp',
    sex: 'Female',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Lucy is a sweet and affectionate Staffie puppy who loves nothing more than being close to her people. She has a calm and gentle temperament that makes her great with kids. Her compact build and beautiful markings are truly eye-catching. Lucy is ready for her forever home.',
    coat: 'White with brindle patches'
  },
  {
    name: 'Mabel',
    image: '/images/mabel.webp',
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 800,
    description: 'Mabel is a delightful and playful Staffordshire Bull Terrier with a fun-loving personality. She brings joy to everyone she meets with her happy-go-lucky attitude. Her muscular little frame and adorable face make her irresistible. Mabel is searching for a family to call her own.',
    coat: 'Brindle with white blaze and chest'
  },
  {
    name: 'Mack',
    image: '/images/mack.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Mack is a robust and handsome Staffie with a bold personality. He is confident, friendly, and loves to be the center of attention. His powerful build and striking coat make him a real head-turner. Mack would thrive in an active household with plenty of love to give.',
    coat: 'Dark brindle with white chest'
  },
  {
    name: 'Maggie',
    image: '/images/maggie.webp',
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 800,
    description: 'Maggie is an adorable Staffie puppy with a heart as big as her personality. She loves playing with toys and giving kisses to everyone. Her sweet nature and beautiful appearance make her the perfect family companion. Maggie cannot wait to meet her new family.',
    coat: 'Fawn with white markings'
  },
  {
    name: 'Mia',
    image: '/images/mia.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Mia is a strong and confident Staffordshire Bull Terrier with an outgoing personality. He loves to explore and is always up for an adventure. His well-built frame and friendly demeanor make him an ideal companion. Mia is ready to bring endless joy to his new home.',
    coat: 'Blue with white chest and paws'
  },
  {
    name: 'Nevile',
    image: '/images/nevile.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Nevile is a distinguished and loyal Staffie puppy with a noble bearing. He has a calm confidence that sets him apart from the crowd. His muscular build and beautiful markings make him truly handsome. Nevile is looking for a family who will appreciate his gentle, devoted nature.',
    coat: 'Red with white blaze'
  },
  {
    name: 'Pip',
    image: '/images/pip.webp',
    sex: 'Female',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Pip is a petite and charming Staffie girl with a lively personality. She is full of energy and loves to play but also enjoys quiet cuddle time. Her compact frame and expressive eyes make her absolutely adorable. Pip is ready to fill your life with love and happiness.',
    coat: 'Brindle and white'
  },
  {
    name: 'Rex',
    image: '/images/rex.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Rex is a powerful and athletic Staffordshire Bull Terrier with a commanding presence. He is brave, loyal, and incredibly affectionate with his family. His striking build and confident stride make him stand out wherever he goes. Rex is seeking an experienced owner who will give him the love he deserves.',
    coat: 'Black brindle with white chest'
  },
  {
    name: 'Roy',
    image: '/images/roy.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Roy is a friendly and sociable Staffie puppy who gets along with everyone. He has a happy-go-lucky attitude that makes him a joy to be around. His well-proportioned build and glossy coat give him a distinguished appearance. Roy is looking for a loving family to share his life with.',
    coat: 'Red brindle with white markings'
  },
  {
    name: 'Royce',
    image: '/images/royce.webp',
    sex: 'Male',
    age: '8 Weeks',
    status: 'Available',
    price: 800,
    description: 'Royce is a premium Staffie puppy with a luxurious appearance and loving personality. He carries himself with confidence and loves to show off his playful side. His well-built frame and beautiful coat make him truly special. Royce is ready to be your loyal companion for life.',
    coat: 'Blue fawn with white chest'
  },
  {
    name: 'Thor',
    image: '/images/thor.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Thor is a mighty and brave Staffordshire Bull Terrier with a heart of gold. His powerful build and fearless spirit are matched only by his incredible sweetness. He loves rough-and-tumble play but is equally gentle with children. Thor is destined to be a beloved family protector.',
    coat: 'Dark brindle'
  },
  {
    name: 'Wild',
    image: '/images/wild.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Wild is an adventurous and high-energy Staffie puppy who lives up to his name. He loves to run, play, and explore the great outdoors. Despite his energetic nature, he has a sweet and affectionate side. Wild is perfect for an active owner who enjoys outdoor activities.',
    coat: 'Brindle with white blaze and chest'
  },
  {
    name: 'Yava',
    image: '/images/yava.webp',
    sex: 'Female',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Yava is an elegant and graceful Staffie girl with a warm personality. She has a calm confidence and a loving nature that draws people to her. Her beautiful coat and gentle eyes make her truly captivating. Yava would make a wonderful addition to any family.',
    coat: 'Fawn with white chest and paws'
  },
  {
    name: 'Zeus',
    image: '/images/zeus.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Zeus is a powerful and majestic Staffordshire Bull Terrier who commands attention wherever he goes. He has a strong, muscular build and a confident personality. Despite his imposing appearance, he is incredibly gentle and loving. Zeus is looking for a family worthy of his devotion.',
    coat: 'Blue with white markings'
  },
  {
    name: 'Ziggy',
    image: '/images/ziggy.webp',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Ziggy is a fun and quirky Staffie puppy with a unique personality. He is always making his family laugh with his playful antics. His well-built frame and cheerful expression make him impossible to resist. Ziggy is ready to bring endless entertainment to his new home.',
    coat: 'Brindle with white chest patch'
  },
  {
    name: 'Lime',
    image: '/images/lime.webp',
    sex: 'Male',
    age: '9 Weeks',
    status: 'Available',
    price: 800,
    description: 'Lime is a fresh and lively Staffordshire Bull Terrier with a zest for life. He brings energy and excitement to everything he does. His compact, muscular build and bright personality make him an absolute delight. Lime is eager to find a family who matches his enthusiasm for life.',
    coat: 'Fawn brindle with white markings'
  }
];

// Featured puppies for home page (first 5)
export const featuredPuppies = puppies.slice(0, 5).map(p => ({
  name: p.name,
  image: p.image,
  price: p.price
}));
