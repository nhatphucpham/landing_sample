'use client';

import { useInView } from 'react-intersection-observer';

export default function AnimateComponent({
  children,
  type = 'up',
  className,
  as: Component = 'div',
  ...rest
}: any): JSX.Element {
  const { ref: scrollableRef, inView: section1InView } = useInView({ triggerOnce: true });
  let componentClassName = className;

  if (section1InView) {
    switch (type) {
      case 'down':
        componentClassName = (`${className} animate-fadeInDown`);
        break;
      case 'up':
        componentClassName = (`${className} animate-fadeInUp`);
        break;
      case 'left':
        componentClassName = (`${className} animate-fadeInLeft`);
        break;
      case 'right':
        componentClassName = (`${className} animate-fadeInRight`);
        break;
    }
  }

  return (
    <Component ref={scrollableRef} className={componentClassName} {...rest}>
      {children}
    </Component>
  ) as JSX.Element;
};