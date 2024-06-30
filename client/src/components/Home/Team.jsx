const teamMembers = [
  {
    name: "Mahesh Poudel",
    role: "UI Designer",
    image: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  },
  {
    name: "Suraj Kabirath",
    role: "CTO",
    image: "https://i.ibb.co/hZLDTyM/13-184.jpg",
  },
  {
    name: "Suraj Kabirath",
    role: "Founder",
    image: "https://i.ibb.co/hZLDTyM/13-184.jpg",
  },
  {
    name: "Sanjit Baruwal",
    role: "DevOps",
    image: "https://baruwalsanjit.com.np/static/media/sanjit.d56b23616975f41335f4.JPG",
  },
  {
    name: "Sagar Tandan",
    role: "Software Engineer",
    image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
  },
  {
    name: "Rajeev Yadav",
    role: "UX Researcher",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s",
  },
  
];

const Team = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-screen-xl px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center">
            Our Team
          </h2>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-300 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.image}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    {member.name}
                  </h2>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
