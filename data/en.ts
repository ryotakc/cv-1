import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
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
  skills: ['Next.js', 'Tailwind CSS', 'TypeScript' , 'Java', 'C++'],
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
        'Leading a team to develop new cloud-based solutions. Building efficient workflows and designing and implementing scalable applications using AWS. Technologies: Python, Django, React, AWS',
    },
    // {
    //   company: 'Green Data Co., Ltd.',
    //   link: 'https://wmda.info',
    //   badges: ['Remote'],
    //   title: 'Data Scientist',
    //   start: '2018',
    //   end: '2020',
    //   description: `Contributing to the development of analytical tools that leverage big data to aid decision-making. Utilizing machine learning and data visualization to foster clients' business growth. Technologies: Python, R, SQL, Tableau`,
    // },
    // {
    //   company: 'Cybersecurity Solutions',
    //   link: 'https://wmda.info',
    //   badges: [],
    //   title: 'Senior Security Engineer',
    //   start: '2017',
    //   end: '2018',
    //   description:
    //     'Developing and implementing strategies to strengthen corporate cybersecurity. Involved in the development of cutting-edge threat detection tools to secure client data. Technologies: Java, Python, Linux, Network Security',
    // },
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
      label: 'Meeting',
      href: 'https://cal.com',
      icon: Calendar,
    },
    {
      label: 'Form',
      href: 'https://tally.so',
      icon: Send,
    },
  ],
  projects: [
    {
      title: 'EcoTrack',
      techStack: [
        'Side Project',
        'JavaScript',
        'React',
        'Node.js',
        'MongoDB',
        'REST API',
      ],
      description:
        'An environmental impact tracking app for individuals and small businesses',
      link: {
        label: 'ecotrack.app',
        href: 'https://wmda.info',
      },
    },
    {
      title: 'CodeCollab',
      techStack: ['Side Project', 'Python', 'Flask', 'WebSocket', 'Docker'],
      description:
        'A real-time collaborative coding platform for remote pair programming',
      link: {
        label: 'codecollab.io',
        href: 'https://wmda.info',
      },
    },
  ],
  links: [
    {
      label: 'XXX',
      href: 'https://twitter.com/leo_rkc',
      icon: SiGithub,
    },
    {
      label: 'XXX',
      href: 'https://twitter.com/leo_rkc',
      icon: SiX,
    },
  ],
};

export default data;
