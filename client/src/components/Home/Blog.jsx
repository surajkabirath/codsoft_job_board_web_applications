

// Sample data for blog posts (expanded to 6 items)
const blogPosts = [
  {
    category: 'Job Search Tips',
    title: 'The Catalyzer',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2oZUFn9RnGiauV0WN5JIQXwjxoP-qNbHhw&s',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    learnMoreLink: '#'
  },
  {
    category: 'Industry Insights',
    title: 'The Innovator',
    imageSrc: 'https://etimg.etb2bimg.com/photo/99614008.cms',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    learnMoreLink: '#'
  },
  {
    category: 'Career Development',
    title: 'The Navigator',
    imageSrc: 'https://img.freepik.com/premium-vector/career-development-vector-illustration-with-ladder-success-growing-revenue-improve-bar-graph-business-goal-flat-background-design_2175-20601.jpg',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    learnMoreLink: '#'
  },
  {
    category: 'Tech Trends',
    title: 'The Pioneer',
    imageSrc: 'https://imageio.forbes.com/specials-images/imageserve/65c9c44ac205195ae02e22ec/The-Biggest-Technology-Trends-In-The-Next-10-Years/960x0.jpg?format=jpg&width=960',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    learnMoreLink: '#'
  },
  {
    category: 'Startup Insights',
    title: 'The Visionary',
    imageSrc: 'https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    learnMoreLink: '#'
  },
  {
    category: 'Remote Work',
    title: 'The Nomad',
    imageSrc: 'https://www.achurchconsulting.com/wp-content/uploads/2021/02/remote-work-models.png',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    learnMoreLink: '#'
  }
];

const Blog = () => {
  return (
    <section className="text-gray-600 body-font" id="blog">
      <div className="max-w-screen-xl  px-5 py-24 mx-auto">
      <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center">
       Some Blog
      </h2>
        <div className="flex flex-wrap -m-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
              <div className={`h-full rounded-xl shadow-md bg-gray-100 overflow-hidden`}>
                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={post.imageSrc} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.category}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{post.title}</h1>
                  <p className="leading-relaxed mb-3">{post.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a href={post.learnMoreLink} className={`bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out`}>Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
