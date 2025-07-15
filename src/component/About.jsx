import React, { useState, useEffect } from 'react';

function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = 2000;
    let incrementTime = totalMilSecDur / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-pink-500">{count}+</h3>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
}

function AboutSection() {
  const testimonials = [
    {
      name: 'Arijit Pal',
      role: 'Frontend Developer',
      comment: 'BookStore gave me confidence to pursue my career goals.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Sneha Roy',
      role: 'Student',
      comment: 'Amazing content and supportive community. Loved it!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Rahul Das',
      role: 'Software Engineer',
      comment: 'Great platform for learning and growth. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16" id="about">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-pink-500">BookStore</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Learn, grow, and connect with a community of passionate learners.
          </p>
        </div>

        {/* Image + Text + Counters */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="flex-1">
            <img
              src="https://img.freepik.com/free-vector/education-concept-illustration_114360-6090.jpg"
              alt="Education"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Empowering Learners Worldwide
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We provide high-quality learning resources and a vibrant community.
              Our mission is to help learners grow, succeed, and reach their full potential.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Counter target="500" label="Happy Students" />
              <Counter target="120" label="Courses Available" />
              <Counter target="50" label="Expert Mentors" />
              <Counter target="1000" label="Books Sold" />
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Watch Our Story
          </h3>
          <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/JfVOs4VSpmA"
              title="About Bookstore Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            What Our Learners Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition-transform text-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {t.name}
                </h4>
                <p className="text-pink-500 mb-2">{t.role}</p>
                <p className="text-gray-600 dark:text-gray-300 italic">“{t.comment}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
