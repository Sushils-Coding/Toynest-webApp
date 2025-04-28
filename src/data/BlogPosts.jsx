const blogPosts = [
  {
    id: 1,
    title: "The Science of Play: Why It's Crucial for Development",
    excerpt: "Discover how different types of play contribute to your child's cognitive, emotional, and social growth.",
    image: "https://images.unsplash.com/photo-1545065912-93d0abaa37ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "May 15, 2023",
    author: "Dr. Emily Parker",
    category: "Playtime"
  },
  {
    id: 2,
    title: "Choosing Age-Appropriate Toys: A Parent's Guide",
    excerpt: "Learn how to select toys that match your child's developmental stage and encourage learning through play.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 2, 2023",
    author: "Toy Safety Board",
    category: "Toys"
  },
  {
    id: 3,
    title: "Balancing Structured vs. Unstructured Play",
    excerpt: "Find the right mix of guided activities and free play to support your child's creativity and discipline.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 18, 2023",
    author: "Parenting Coach Mark",
    category: "Playtime"
  },
  {
    id: 4,
    title: "The 10-Minute Quality Time Challenge",
    excerpt: "How short bursts of fully engaged play can strengthen your bond with your child more than hours of distracted time.",
    image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "July 5, 2023",
    author: "Family Therapist Sarah",
    category: "Parenting Tips"
  },
  {
    id: 5,
    title: "Toy Rotation: Why Less is More",
    excerpt: "How regularly cycling toys can reduce clutter, boost creativity, and increase your child's attention span.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "July 22, 2023",
    author: "Minimalist Parenting",
    category: "Toys"
  },
  {
    id: 6,
    title: "Positive Discipline Through Play",
    excerpt: "Creative ways to teach boundaries and good behavior using play-based techniques.",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "August 10, 2023",
    author: "Child Psychologist Dr. Lee",
    category: "Parenting Tips"
  },
  {
    id: 7,
    title: "Outdoor Play: Benefits Beyond Fresh Air",
    excerpt: "Why nature play is essential for physical health, risk assessment skills, and environmental connection.",
    image: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "August 28, 2023",
    author: "Nature Play Association",
    category: "Playtime"
  },
  {
    id: 8,
    title: "Screen Time Alternatives: Engaging Toy Ideas",
    excerpt: "Creative play alternatives that capture children's attention as effectively as digital devices.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "September 15, 2023",
    author: "Digital Wellness Coach",
    category: "Toys"
  },
  {
    id: 9,
    title: "The Power of Pretend Play",
    excerpt: "How dress-up and role-playing build empathy, language skills, and problem-solving abilities.",
    image: "https://images.unsplash.com/photo-1566895733044-6dd41d6dee1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "October 3, 2023",
    author: "Early Childhood Educator",
    category: "Playtime"
  },
  {
    id: 10,
    title: "Building Emotional Intelligence Through Play",
    excerpt: "Explore playful strategies that help children recognize and manage their emotions effectively.",
    image: "https://images.unsplash.com/photo-1601758003122-58c55b1424c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "October 20, 2023",
    author: "Child Development Expert",
    category: "Parenting Tips"
  },
  {
    id: 11,
    title: "STEM Toys: Sparking Innovation Early",
    excerpt: "How science, technology, engineering, and math toys encourage critical thinking and creativity.",
    image: "https://images.unsplash.com/photo-1614721343394-24d90228e012?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "November 5, 2023",
    author: "STEM Educator Team",
    category: "Toys"
  },
  {
    id: 12,
    title: "How to Create a Safe Play Environment at Home",
    excerpt: "Essential tips to ensure your child's play area is fun, safe, and developmentally supportive.",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "November 22, 2023",
    author: "Safety First Initiative",
    category: "Parenting Tips"
  },
  {
    id: 13,
    title: "Artistic Play: Unlocking Your Child’s Creative Potential",
    excerpt: "Discover the benefits of art-based play activities and how they enhance cognitive development.",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "December 8, 2023",
    author: "Art Therapist Jane",
    category: "Playtime"
  },
  {
    id: 14,
    title: "Eco-Friendly Toys: Teaching Sustainability Early",
    excerpt: "Guide to choosing toys made from sustainable materials and promoting eco-consciousness in kids.",
    image: "https://images.unsplash.com/photo-1608506159396-06dba1512f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "December 22, 2023",
    author: "Green Parenting Network",
    category: "Toys"
  },
  {
    id: 15,
    title: "Sibling Play: Strengthening Bonds and Reducing Rivalry",
    excerpt: "How cooperative play activities between siblings can nurture strong lifelong relationships.",
    image: "https://images.unsplash.com/photo-1581578731548-f72bfbdb21ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "January 5, 2024",
    author: "Family Counselor Dr. Roberts",
    category: "Parenting Tips"
  },
  {
    id: 16,
    title: "Musical Play: Boosting Brain Development",
    excerpt: "Why introducing music and rhythm early supports language skills, memory, and emotional regulation.",
    image: "https://images.unsplash.com/photo-1601334769442-65c65d3c67a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "January 20, 2024",
    author: "Music Therapist Group",
    category: "Playtime"
  },
  {
    id: 17,
    title: "DIY Toy Projects: Fun Crafting Ideas for Parents and Kids",
    excerpt: "Strengthen your bond and spark creativity with simple, homemade toy projects.",
    image: "https://images.unsplash.com/photo-1601758063563-45ad6cae7b82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "February 3, 2024",
    author: "Creative Families Blog",
    category: "Toys"
  },
  {
    id: 18,
    title: "The Role of Storytelling in Child Development",
    excerpt: "Using imaginative storytelling to nurture language skills, empathy, and emotional intelligence.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "February 18, 2024",
    author: "Early Literacy Expert",
    category: "Playtime"
  },
  {
    id: 19,
    title: "Mindful Parenting Through Play",
    excerpt: "Learn how being fully present during playtime can deepen your connection with your child and reduce parenting stress.",
    image: "https://images.unsplash.com/photo-1614728894742-4f9a661d3a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "March 5, 2024",
    author: "Mindful Families Coach",
    category: "Parenting Tips"
  },
  {
    id: 20,
    title: "Adventure Playgrounds: Encouraging Risk and Resilience",
    excerpt: "Explore how adventure playgrounds foster problem-solving, confidence, and independence in children.",
    image: "https://images.unsplash.com/photo-1616047002344-f1a940f86a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "March 22, 2024",
    author: "Outdoor Play Experts",
    category: "Playtime"
  },
  {
    id: 21,
    title: "Choosing Toys for Special Needs Children",
    excerpt: "Guidelines for selecting toys that cater to a variety of abilities and support inclusive play.",
    image: "https://images.unsplash.com/photo-1611095973513-9d9200ee1d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "April 8, 2024",
    author: "Inclusive Play Alliance",
    category: "Toys"
  },
  {
    id: 22,
    title: "Cultural Play: Celebrating Diversity Through Toys",
    excerpt: "How culturally diverse toys and games can teach respect, understanding, and global awareness.",
    image: "https://images.unsplash.com/photo-1602099450842-3d908ee39bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "April 24, 2024",
    author: "Global Kids Initiative",
    category: "Playtime"
  },
  {
    id: 23,
    title: "Signs Your Child Needs More Playtime",
    excerpt: "Recognize the emotional and behavioral signals that indicate your child needs more unstructured play.",
    image: "https://images.unsplash.com/photo-1611513205121-599447c7e2c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "May 10, 2024",
    author: "Child Psychologist Dr. Simmons",
    category: "Parenting Tips"
  },
  {
    id: 24,
    title: "The Magic of Sensory Play",
    excerpt: "Unlock the benefits of sensory play activities for brain development, focus, and emotional regulation.",
    image: "https://images.unsplash.com/photo-1591447330648-26df77ac2542?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "May 26, 2024",
    author: "Sensory Play Experts",
    category: "Playtime"
  },
  {
    id: 25,
    title: "Second-Hand Toys: A Sustainable Play Choice",
    excerpt: "Discover the benefits of buying second-hand toys and how to ensure they’re safe and durable.",
    image: "https://images.unsplash.com/photo-1603775020648-83a9a7f7d622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 11, 2024",
    author: "Eco-Friendly Parenting",
    category: "Toys"
  }
];

export default blogPosts;