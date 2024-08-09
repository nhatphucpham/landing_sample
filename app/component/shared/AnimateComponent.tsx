'use client';

import { useInView } from 'react-intersection-observer';

export default function AnimateComponent({
  children,
  type = 'up',
  className,
  as: Component = 'div',
  initialAnimation = false,
  ...rest
}: any): JSX.Element {
  const { ref: scrollableRef, inView: section1InView } = useInView({ triggerOnce: true });
  let componentClassName = `opacity-0 ${className}`;

  if (initialAnimation || section1InView) {
    switch (type) {
      case 'down':
        componentClassName = (`opacity-0 ${className} animate-fadeInDown`);
        break;
      case 'up':
        componentClassName = (`opacity-0 ${className} animate-fadeInUp`);
        break;
      case 'left':
        componentClassName = (`opacity-0 ${className} animate-fadeInLeft`);
        break;
      case 'right':
        componentClassName = (`opacity-0 ${className} animate-fadeInRight`);
        break;
    }
  }

  return (
    <Component ref={scrollableRef} className={componentClassName} {...rest}>
      {children}
    </Component>
  ) as JSX.Element;
};