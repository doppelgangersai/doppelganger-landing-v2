import Image from 'next/image';

const SOCIAL_ICONS = [
  { src: '/discord.svg', alt: 'Discord', top: 97, left: 752 },
  { src: '/slack.svg', alt: 'Slack', top: 241, left: 884 },
  { src: '/tiktok.svg', alt: 'TikTok', top: 176, left: 1139 },
  { src: '/messenger.svg', alt: 'Messenger', top: 159, left: 1246 },
  { src: '/linkedin.svg', alt: 'LinkedIn', top: 444, left: 1344 },
  { src: '/facebook.svg', alt: 'Facebook', top: 540, left: 1160 },
  { src: '/telegram.svg', alt: 'Telegram', top: 703, left: 1123 },
  { src: '/x.svg', alt: 'X', top: 565, left: 963 },
  { src: '/whatsapp.svg', alt: 'WhatsApp', top: 557, left: 795 },
  { src: '/instagram.svg', alt: 'Instagram', top: 524, left: 595 },
];

export default function SocialIcons() {
  return (
    <>
      {SOCIAL_ICONS.map((icon) => (
        <Image
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          width={60}
          height={60}
          className={`absolute top-[${icon.top}px] left-[${icon.left}px]`}
        />
      ))}
    </>
  );
}
