import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX, SiQiita, SiInstagram } from '@icons-pack/react-simple-icons';
import { Calendar, Mail, Send } from 'lucide-react';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';

const data: Data = {
  name: '加藤 遼大',
  globalName: 'Ryota Kato',
  lastUpdatedAt: new Date(),
  status: {
    color: 'active',
    label: '就職活動中',
  },
  location: 'バンクーバー, カナダ',
  bio: 'Web Developer',
  summary:
    '私は熱心なWebエンジニアで、ユーザー中心のインタラクティブなウェブサイトとアプリケーションの開発に特化しています。最新の技術トレンドを追い続け、クライアントのビジョンを実現するために、革新的で効率的なソリューションを提供することに力を入れています。チームワークとコミュニケーションを重視し、常にクオリティの高い作業を心がけています。趣味はプログラミング、読書、旅行です。',
  avatarUrl: getAssetPath() + '/locale/ja/profile.webp',
  // skills: { [
  //   label: 'Next.js',
  //   icon: SiNextdotjs,
  //  ],
  //  [
  //   label: 'Tailwind CSS',
  //   icon: SiTailwindcss,
  //  ],
  //  [
  //   label: 'TypeScript',
  //   icon: SiTypescript,
  //  ],
  // },
  skills: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Java', 'C++', 'Lightroom'],
  education: [
    {
      school: 'サイモンフレーザー大学',
      degree: '学士 コンピュータサイエンス - ソフトウェアシステム',
      start: '2024',
      end: '2027',
    },
    {
      school: '松本深志高等学校',
      degree: '高校卒業',
      start: '2019',
      end: '2022',
    },
  ],
  work: [
    {
      company: 'Menya Raizo',
      link: 'https://zakkushi.com/raizo/w-broadway/',
      badges: ['In-Person'],
      title: 'キッチンスタッフ',
      start: '2024',
      end: '現在',
      description:
        'チームを率いて新しいクラウドベースのソリューションを開発。効率的なワークフローを構築し、AWSを使用したスケーラブルなアプリケーションの設計と実装を行う。技術: Python, Django, React, AWS',
    },
    // {
    //   company: 'グリーンデータ株式会社',
    //   link: 'https://www.jmdp.or.jp',
    //   badges: ['業務委託'],
    //   title: 'データサイエンティスト',
    //   start: '2020',
    //   end: '2019',
    //   description:
    //     'ビッグデータを活用して意思決定を支援する分析ツールの開発に貢献。機械学習とデータビジュアライゼーションを駆使して、顧客のビジネス成長を促進。技術: Python, R, SQL, Tableau',
    // },
    // {
    //   company: 'サイバーセキュリティソリューションズ',
    //   link: 'https://www.jmdp.or.jp',
    //   badges: [],
    //   title: 'シニアセキュリティエンジニア',
    //   start: '2018',
    //   end: '2017',
    //   description:
    //     '企業のサイバーセキュリティを強化するための戦略の立案と実装。最先端の脅威検出ツールの開発に携わり、クライアントのデータ保護を確保。技術: Java, Python, Linux, ネットワークセキュリティ',
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
      label: 'DMする',
      href: 'https://twitter.com/leo_rkc',
      icon: SiX,
      toolbar: true,
    },
    {
      label: 'DMする',
      href: 'https://instagram.com/leok_can',
      icon: SiInstagram,
      
    },
    // {
    //   label: 'オンラインミーティング',
    //   href: 'https://cal.com',
    //   icon: Calendar,
    // },
    // {
    //   label: 'フォーム',
    //   href: 'https://tally.so',
    //   icon: Send,
    // },
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
      label: 'Qiita',
      href: 'https://qiita.com/leo_rkc',
      icon: SiQiita,
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/leok_can',
      icon: SiInstagram,
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
        'Vercel',
      ],
      description:
        'An environmental impact tracking app for individuals and small businesses',
      link: {
        label: 'ecotrack.app',
        href: 'https://web-photo-leo.vercel.app',
      },
    },
    {
      title: 'CodeCollab',
      techStack: ['Side Project', 'Python', 'Flask', 'WebSocket', 'Docker'],
      description:
        'A real-time collaborative coding platform for remote pair programming',
      link: {
        label: 'codecollab.io',
        href: 'https://www.jmdp.or.jp',
      },
    },
  ],
};

export default data;
