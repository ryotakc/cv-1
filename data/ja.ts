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
      school: 'クワントレンポリテクニック大学',
      degree: '編入 インフォメーションテクノロジー',
      start: '2023',
      end: '2024',
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
        'ラーメン屋でのキッチンスタッフとしてのアルバイト経験を通じて、さまざまなスキルや知識を身につけることができました。まず、効率的な調理技術を習得し、限られた時間内で高品質な料理を提供する重要性を学びました。また、食材の管理や在庫の確認なども任され、計画的かつ正確な仕事の進め方が求められる場面での経験を積みました。さらに、忙しいピークタイムにはチームワークが欠かせないことを実感し、他のスタッフとの円滑なコミュニケーションと協力の大切さを深く理解しました。お客様に対しても迅速かつ丁寧な対応を心がけることで、サービスの質を向上させることができました。',
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
  ],
};

export default data;
