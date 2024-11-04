import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Nice to meet you readers !',
        2000, // wait 2s
        'I\'m Hanif Ahmad Rizqullah',
        2000,
        'I\'m programmer',
        2000,
        'I\'m A.I enthusiast',
        2000,
        'I\'m anime lovers',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5rem', display: 'inline-block' }}
      repeat={Infinity}
      cursor={false}
      className='dark:text-white mb-4 after:content-["😊"] after:text-3xl'
    />
  );
};

export default TypingAnimation