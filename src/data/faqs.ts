export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Is a Staffordshire Bull Terrier a good breed?',
    answer: 'Staffordshire Bull Terriers are loyal, affectionate, and courageous dogs known for being excellent family companions. They are often called "nanny dogs" for their natural love of children.'
  },
  {
    question: 'Is a Staffie good for beginners?',
    answer: 'Yes, Staffies can be great for first-time dog owners. They are eager to please, intelligent, and respond well to positive reinforcement training. Their loving and loyal nature makes them wonderful companions.'
  },
  {
    question: 'Do Staffies make good family pets?',
    answer: 'Absolutely! Staffordshire Bull Terriers are known for being fantastic family pets. They are gentle with children, loyal to their families, and form strong bonds with all household members.'
  },
  {
    question: 'How much exercise does a Staffie need?',
    answer: 'Staffies are active and energetic dogs that need at least 1 hour of exercise daily. This can include walks, playtime, and mental stimulation. They love interactive games like fetch and tug-of-war.'
  },
  {
    question: 'Are Staffies easy to train?',
    answer: 'Staffies are intelligent and eager to please, making them responsive to training. They do best with consistent, positive reinforcement methods. Early socialization and puppy training classes are highly recommended.'
  }
];

export interface Expense {
  item: string;
  cost: string;
}

export const expenses: Expense[] = [
  { item: 'Food', cost: '$50 – $100' },
  { item: 'Treats', cost: '$10 – $20' },
  { item: 'Veterinary Care', cost: '$20 – $50' },
  { item: 'Pet Insurance', cost: '$30 – $60' },
  { item: 'Grooming', cost: '$30 – $60' },
  { item: 'Training Classes', cost: '$50 – $100' },
  { item: 'Toys', cost: '$10 – $20' },
  { item: 'Supplies (bed, leash, etc.)', cost: '$10 – $15' },
  { item: 'Miscellaneous', cost: '$10 – $20' }
];

export interface ExpenseNote {
  label: string;
  text: string;
}

export const expenseNotes: ExpenseNote[] = [
  { label: 'Food', text: 'The cost can vary based on the brand and dietary needs.' },
  { label: 'Veterinary Care', text: 'This includes routine check-ups, vaccinations, and preventative care.' },
  { label: 'Pet Insurance', text: 'Costs can vary based on coverage and provider.' },
  { label: 'Training Classes', text: 'Group classes may be less expensive than private sessions.' },
  { label: 'Grooming', text: 'Staffies have short coats that are easy to maintain with regular brushing.' }
];
