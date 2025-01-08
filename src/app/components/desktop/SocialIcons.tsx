import Image from 'next/image';

const SOCIAL_ICONS = [
  { src: '/discord.svg', alt: 'Discord', top: 12, left: 52 },
  { src: '/slack.svg', alt: 'Slack', top: 30, left: 61 },
  { src: '/tiktok.svg', alt: 'TikTok', top: 22, left: 79 },
  { src: '/messenger.svg', alt: 'Messenger', top: 20, left: 86 },
  { src: '/linkedin.svg', alt: 'LinkedIn', top: 55, left: 93 },
  { src: '/facebook.svg', alt: 'Facebook', top: 67, left: 81 },
  { src: '/telegram.svg', alt: 'Telegram', top: 88, left: 78 },
  { src: '/x.svg', alt: 'X', top: 71, left: 67 },
  { src: '/whatsapp.svg', alt: 'WhatsApp', top: 70, left: 55 },
  { src: '/instagram.svg', alt: 'Instagram', top: 65, left: 41 },
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
          className='absolute'
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
          }}
        />
      ))}
    </>
  );
}
