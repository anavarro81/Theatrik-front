import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Antonio',
    role: 'Developer',
    description: 'John is a front-end developer with a passion for creating intuitive user interfaces.',
    imageUrl: 'https://via.placeholder.com/150',
    socials: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe'
    }
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Designer',
    description: 'Jane is a creative graphic designer with a strong skill set in visual design and branding.',
    imageUrl: 'https://via.placeholder.com/150',
    socials: {
      twitter: 'https://twitter.com/janedoe',
      linkedin: 'https://linkedin.com/in/janedoe',
      instagram: 'https://instagram.com/janedoe'
    }
  },
  {
    id: 3,
    name: 'Steve Smith',
    role: 'Project Manager',
    description: 'Steve ensures all projects are delivered on time, within scope, and within budget.',
    imageUrl: 'https://via.placeholder.com/150',
    socials: {
      twitter: 'https://twitter.com/stevesmith',
      linkedin: 'https://linkedin.com/in/stevesmith',
      instagram: 'https://instagram.com/stevesmith'
    }
  },
  {
    id: 4,
    name: 'Ella Fern',
    role: 'Backend Developer',
    description: 'Ella specializes in server-side logic, database technology, and ensuring high performance and responsiveness to requests from the front-end.',
    imageUrl: 'https://via.placeholder.com/150',
    socials: {
      twitter: 'https://twitter.com/ellafern',
      linkedin: 'https://linkedin.com/in/ellafern',
      instagram: 'https://instagram.com/ellafern'
    }
  },
  {
    id: 5,
    name: 'Michael Brown',
    role: 'DevOps Engineer',
    description: 'Michael is skilled in automating, improving and optimizing operations and development processes.',
    imageUrl: 'https://via.placeholder.com/150',
    socials: {
      twitter: 'https://twitter.com/michaelbrown',
      linkedin: 'https://linkedin.com/in/michaelbrown',
      instagram: 'https://instagram.com/michaelbrown'
    }
  }
];

const TeamMemberCard = ({ member }) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white'>
    <div className='relative'>
      <div className='w-36 h-36 rounded-full mx-auto mt-4 overflow-hidden bg-white border-4 border-orange-500'>
        <img className='w-full h-full object-cover rounded-full' src={member.imageUrl} alt={member.name} />
      </div>
    </div>
    <div className='px-6 py-4'>
      <h2 className='font-bold text-xl mb-1'>{member.name}</h2>
      <h3 className='font-semibold text-lg text-orange-500 mb-2'>{member.role}</h3>
      <p className='text-gray-700 text-base mb-4'>
        {member.description}
      </p>
      <div className='flex justify-center space-x-4 bg-black p-1 rounded'>
        <a href={member.socials.twitter} target='_blank' rel='noopener noreferrer' className='text-white'><FaTwitter /></a>
        <a href={member.socials.linkedin} target='_blank' rel='noopener noreferrer' className='text-white'><FaLinkedin /></a>
        <a href={member.socials.instagram} target='_blank' rel='noopener noreferrer' className='text-white'><FaInstagram /></a>
      </div>
    </div>
  </div>
);

const TeamSection = () => (
  <div className='container mx-auto px-4 py-8'>
    <h1 className='text-3xl font-semibold text-center mb-6'> El equipo </h1>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
      {teamMembers.map(member => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  </div>
);

export default TeamSection;