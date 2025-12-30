// WooCommerce API utility for fetching products and categories

const WC_API_URL = 'https://savannakennels.co.za/wp-json/wc/v3';
const CONSUMER_KEY = 'ck_9f59526df32b4cf788abcbee7770287c3fbf58af';
const CONSUMER_SECRET = 'cs_b15f89346664ba2ae468570db3792c169e91cda0';

function getAuthParams(): string {
  return `consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: string | null;
}

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  images: { src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
}

export interface Breed {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: string;
}

export interface Puppy {
  id: number;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  breed: string;
  breedSlug: string;
}

// Fetch all categories (breeds) with products
export async function getBreeds(): Promise<Breed[]> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products/categories?${getAuthParams()}&per_page=100`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    const categories: any[] = await response.json();

    // Filter only categories with products and valid images
    return categories
      .filter((cat) => cat.count > 0 && cat.image?.src)
      .map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        count: cat.count,
        image: cat.image.src,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error fetching breeds:', error);
    return [];
  }
}

// Fetch a single category by slug
export async function getBreedBySlug(slug: string): Promise<Breed | null> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products/categories?${getAuthParams()}&slug=${slug}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch category: ${response.status}`);
    }

    const categories: any[] = await response.json();

    if (categories.length === 0) {
      return null;
    }

    const cat = categories[0];
    return {
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      count: cat.count,
      image: cat.image?.src || '',
    };
  } catch (error) {
    console.error('Error fetching breed:', error);
    return null;
  }
}

// Fetch products by category
export async function getPuppiesByBreed(categoryId: number): Promise<Puppy[]> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products?${getAuthParams()}&category=${categoryId}&per_page=100&status=publish`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const products: any[] = await response.json();

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.images?.[0]?.src || '',
      imageAlt: product.images?.[0]?.alt || product.name,
      breed: product.categories?.[0]?.name || '',
      breedSlug: product.categories?.[0]?.slug || '',
    }));
  } catch (error) {
    console.error('Error fetching puppies:', error);
    return [];
  }
}

// Get all category slugs for static path generation
export async function getAllBreedSlugs(): Promise<string[]> {
  const breeds = await getBreeds();
  return breeds.map((breed) => breed.slug);
}

// Get a random puppy image from a breed for the breed card
export async function getRandomPuppyImageForBreed(categoryId: number): Promise<string | null> {
  try {
    const response = await fetch(
      `${WC_API_URL}/products?${getAuthParams()}&category=${categoryId}&per_page=10&status=publish`
    );

    if (!response.ok) {
      return null;
    }

    const products: any[] = await response.json();

    if (products.length === 0) {
      return null;
    }

    // Get a random product
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    return randomProduct.images?.[0]?.src || null;
  } catch (error) {
    return null;
  }
}

// Generate SEO-friendly content for each breed
export function getBreedSeoContent(breedName: string): {
  title: string;
  description: string;
  heroSubtitle: string;
  holidayMessage: string;
} {
  const cleanName = breedName.replace(' Puppies', '').replace(' Dog', '');

  return {
    title: `${breedName} For Sale | Find Your Perfect ${cleanName} Companion`,
    description: `Discover our beautiful ${breedName} available for adoption. Health guaranteed, vet checked, and ready for their forever homes. Browse our selection of adorable ${cleanName} puppies today.`,
    heroSubtitle: `Find your perfect ${cleanName} companion from our carefully raised, health-guaranteed puppies`,
    holidayMessage: `Bring home a loving ${cleanName} this season! We prioritize fast, safe delivery within 24 hours. Our ${breedName} come with complete health guarantees, up-to-date vaccinations, and lifetime support. Whether you choose pickup or delivery across the United States & Canada, your new family member will arrive healthy and happy. Reserve your ${cleanName} puppy today and experience the joy of a well-bred companion.`,
  };
}
