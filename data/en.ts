import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiInstagram, SiQiita, SiX } from '@icons-pack/react-simple-icons';
import { Calendar, Mail, Send } from 'lucide-react';

const data: Data = {
  name: 'Ryota Kato',
  lastUpdatedAt: new Date(),
  status: {
    color: 'active',
    label: 'Available',
  },
  location: 'Vancouver, Canada',
  bio: 'Web Developer',
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum unde, ducimus iusto ipsum repudiandae reprehenderit adipisci obcaecati quia consequuntur rem velit ab itaque saepe! Amet deserunt illo in nesciunt!',
  avatarUrl: getAssetPath() + '/locale/en/profile.webp',
  skills: ['Next.js', 'Tailwind CSS', 'TypeScript / JavaScript' , 'Java', 'C++ / C', 'Lightroom'],
  education: [
    {
      school: 'Simon Fraser University',
      degree: `Bachelor's in Computer Science - Software Systems`,
      start: '2024',
      end: 'Present',
    },
    {
      school: 'Matsumoto Fukashi High School',
      degree: `High School Graduation`,
      start: '2019',
      end: '2022',
    },
  ],
  work: [
    {
      company: 'Menya Raizo',
      link: 'https://zakkushi.com/raizo/w-broadway/',
      badges: ['In-Person'],
      title: 'Kitchen Staff',
      start: '2024',
      end: 'Present',
      description:
        'Through my part-time experience as a kitchen staff at a ramen shop, I acquired various skills and knowledge. First, I learned efficient cooking techniques and the importance of delivering high-quality dishes within a limited time. I was also entrusted with managing ingredients and checking inventory, gaining experience in working methodically and accurately. Furthermore, I realized the indispensability of teamwork during busy peak times and deeply understood the importance of smooth communication and cooperation with other staff members. By consistently providing prompt and courteous service to customers, I was able to enhance the overall quality of service.',
    },
  ],
  contacts: [
    {
      label: 'rka147@sfu.ca',
      href: 'mailto:rka147@sfu.ca',
      icon: Mail,
      toolbar: true,
    },
    {
      label: 'Send DM',
      href: 'https://twitter.com/leo_rkc',
      icon: SiX,
      toolbar: true,
    },
    {
      label: 'Send DM',
      href: 'https://instagram.com/leok_can',
      icon: SiInstagram,
      toolbar: true,
    }
  ],
  projects: [
    {
      title: 'Portfolio',
      techStack: [
        'React',
        'Next.js',
        'TailwindCSS',
        'TypeScript',
        'Shadcn UI',
        'Vercel',
      ],
      description:
        'An environmental impact tracking app for individuals and small businesses',
      link: {
        label: 'ecotrack.app',
        href: 'https://web-photo-leo.vercel.app',
      },
    },
  ],
  links: [
    {
      label: 'X.com',
      href: 'https://twitter.com/leo_rkc',
      icon: SiX,
    },
    {
      label: 'GitHub',
      href: 'https://twitter.com/leo_rkc',
      icon: SiGithub,
    },
    {
      label: 'Qiita(JP)',
      href: 'https://qiita.com/leo_rkc',
      icon: SiQiita,
    },
  ],
};

export default data;
